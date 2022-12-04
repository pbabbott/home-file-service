import * as chokidar  from 'chokidar'
import { logger } from "../utils/logging"


export type GameClipServiceOptions = {
    captureDirectory: string,
    outputDirectory: string
}

export class GameClipService {
    
    private readonly _options: GameClipServiceOptions
    constructor(options: GameClipServiceOptions) {
        this._options = options
    }

    removeZWS(filename) {

    }

    start() {
        let isReady = false

        const { captureDirectory } = this._options
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
                // if (isReady)
                logger.debug(`${path} has been added`);
            })

        logger.info('✔️  GameClipService Started successfully.')
    }

}