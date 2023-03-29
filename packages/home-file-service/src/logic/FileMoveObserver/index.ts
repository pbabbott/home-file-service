import * as path from 'path'
import * as fs from 'fs'
import { Observer } from "rxjs";
import { logger, logError } from '../../utils/logging';
import { GameClipMetadata, GameClipMetadataParseResult } from "../FilenameParserOperator";
import { fileExists } from '../../utils/config';
import { GameClipMoveConfig } from '../../utils/config/types';
import Prometheus from 'prom-client'

const files_moved = new Prometheus.Counter({
    name: 'home_file_service_files_moved',
    help: 'Files moved from gaming PC to NAS',
    labelNames: ['gameName']
})


export class FileMoveObserver implements Partial<Observer<GameClipMetadataParseResult>> {

    constructor(
        private readonly outputDirectory: string,
        private readonly options: GameClipMoveConfig) {
    }

    // TODO: Extract to operator
    calculateDestination(metadata: GameClipMetadata) {
        const datedDirName = metadata.dateTime.toFormat('yyyy-MM')

        const outputDirectory = path.join(
            this.outputDirectory,
            datedDirName,
            metadata.filename
        )

        return outputDirectory
    }

    async moveToNas(fullPath: string, destPath: string, gameName: string) {

        // TODO: Extract to operator
        // check if target already exists
        const exists = await fileExists(destPath)
        if (exists) {
            logger.debug(`File already exists. Skipping: ${fullPath}`)
            return
        }

        // Log the move file operation, considering noOp
        const { noOp } = this.options
        const message = `Moving File! ${noOp ? '(noOp)' : ''} src:${fullPath} dest:${destPath}`
        logger.info(message)
        // Guard clause against noOp
        if (noOp === true) return

        // Set up error handler
        const errorHandler = (err) => {
            if (err) {
                logger.error(`An error occurred while moving file from ${fullPath} to ${destPath}`)
                logError(err)
            }
            logger.debug('Successfully moved file!')
        }

        // TODO: Extract to operator
        // Ensure directory exists
        const dir = path.dirname(destPath)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        // Finally, either copy or move the file
        if (this.options.copyMode === true) {
            logger.debug('CopyMode: true')
            fs.copyFile(fullPath, destPath, errorHandler)
        } else {
            logger.debug('CopyMode: false')
            fs.rename(fullPath, destPath, errorHandler)
        }

        // Increment the metrics counter.
        logger.debug(`Incrementing counter for game: ${gameName}`)
        files_moved.inc({
            gameName,
        })

    }

    async next(metadataParseResult: GameClipMetadataParseResult) {
        const { metadata } = metadataParseResult
        const destPath = this.calculateDestination(metadata)
        await this.moveToNas(metadata.fullPath, destPath, metadata.gameName)
    }
}