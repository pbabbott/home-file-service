import * as chokidar  from 'chokidar'
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

    private removeInvalidCharacters(path) {
        const cleanPath = this.charRemover.removeCharacters(path)
        if (cleanPath !== path){
            fs.rename(path, cleanPath, () => {
                logger.info(`Renamed file: ${cleanPath}`)
            })
        }
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
                // logger.debug(`${path} has been added`);
            })

        logger.info('✔️  GameClipService Started successfully.')
    }

    static instance(options: GameClipServiceOptions) {
        const charRemover = new CharRemover(["\uFEFF", "\u200B", "\u200C", "\u200D"])
        return new GameClipService(charRemover, options)
    }

}