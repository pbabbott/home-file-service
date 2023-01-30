import * as chokidar  from 'chokidar'
import * as path from 'path'
import { CharRemover } from '../logic/CharRemover'
import { logger } from "../utils/logging"
import * as fs from 'fs'

export type GameClipServiceOptions = {
    captureDirectory: string,
    outputDirectory: string
}

export class GameClipService {
    private constructor(
        private charRemover: CharRemover,
        private options: GameClipServiceOptions) {
    }

    static instance(options: GameClipServiceOptions) {
        const charRemover = new CharRemover(["\uFEFF", "\u200B", "\u200C", "\u200D"])
        return new GameClipService(charRemover, options)
    }

    private removeInvalidCharacters(fullPath) {
        const cleanPath = this.charRemover.removeCharacters(fullPath)
        if (cleanPath !== fullPath){
            fs.rename(fullPath, cleanPath, () => {
                logger.info(`Renamed file: ${cleanPath}`)
            })
        }
    }

    private moveToNas(fullPath) {
        const { outputDirectory } = this.options
        
        const filename = path.basename(fullPath)
        const destPath = path.join(outputDirectory, filename)

        logger.debug(`src:${fullPath} dest:${destPath}`)

        fs.copyFile(fullPath, destPath, (err) => {
            if (err) {
                logger.error(`An error occurred while moving file ${path} to ${destPath} ${err}`)
            }
        })

        // fs.rename(path, destPath, (err) => {
        //    
        // })
    }

    start() {
        let isReady = false

        const { captureDirectory } = this.options
        logger.info(`🔭  Watching directory: ${captureDirectory}`)

        chokidar
            .watch(captureDirectory, {
                awaitWriteFinish: {
                    stabilityThreshold: 2000,
                    pollInterval: 100
                },
            })
            .on('ready', () => {
                logger.info('🔭  Initial scan complete. Ready for changes.')
                isReady = true
            })
            .on('add', (path) => {
                this.removeInvalidCharacters(path)
                this.moveToNas(path)
                // logger.debug(`${path} has been added`);
            })

        logger.info('✔️  GameClipService Started successfully.')
    }
   

}