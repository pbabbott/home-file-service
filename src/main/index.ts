import { configureLogger, logger } from '../utils/logging'
import { configureProcesses } from '../utils/processes'
import { GameClipService } from '../services/GameClipService'

export const main = async () => {
    configureLogger()
    logger.info('🏁 Service Starting...')

    configureProcesses()

    const service = new GameClipService({
        // captureDirectory: "C:\\Users\\pbabb\\Videos\\Captures",
        captureDirectory: "C:\\temp",
        outputDirectory: ""
    })
    service.start()

    logger.debug('✔️  main() process execution successful.')
}