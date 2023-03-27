import * as path from 'path'
import * as fs from 'fs'
import { Observer } from "rxjs";
import { logger, logError } from '../../utils/logging';
import { GameClipMetadata, GameClipMetadataParseResult } from "../FilenameParserOperator";
import { fileExists } from '../../utils/config';

export type FileMoveObserverOptions = {
    outputDirectory: string
    /** Will cause no operation to any file, just debug logs */
    noOp?: boolean

    /** Will cause files to get copied to dest rather than moved*/
    copyMode?: boolean
}

export class FileMoveObserver implements Partial<Observer<GameClipMetadataParseResult>> {

    constructor(private readonly options: FileMoveObserverOptions) {
    }

    calculateDestination(metadata: GameClipMetadata) {

        const datedDirName = metadata.dateTime.toFormat('yyyy-MM')

        const outputDirectory = path.join(
            this.options.outputDirectory,
            datedDirName,
            metadata.filename
        )

        return outputDirectory
    }
    
    async moveToNas(fullPath, destPath) {
        
        // check if target already exists
        const exists = await fileExists(destPath)
        if (exists) {
            logger.debug('file already exists. Skipping')
            return
        }

        const {noOp} = this.options

        const message = `Moving File! ${noOp ? '(noOp)' : ''} src:${fullPath} dest:${destPath}`
        logger.debug(message)

        if (noOp === true) return


        const errorHandler = (err) => {
            if (err) {
                logger.error(`An error occurred while moving file from ${fullPath} to ${destPath}`)
                logError(err)
            }
            logger.debug('Successfully moved file!')
        }

        

        // Ensure directory exists
        const dir = path.dirname(destPath)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        

        if (this.options.copyMode === true) {
            logger.debug('CopyMode: true')
            fs.copyFile(fullPath, destPath, errorHandler)
        } else {
            logger.debug('CopyMode: false')
            fs.rename(fullPath, destPath, errorHandler)
        }
    
    }


    async next(metadataParseResult) {
            
        const { metadata } = metadataParseResult
        const destPath = this.calculateDestination(metadata)
        
        await this.moveToNas(metadata.fullPath, destPath)
    
    }

}