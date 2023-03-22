import { loadConfig, config } from '../utils/config'
import { configureLogger, logger } from '../utils/logging'
import { configureProcessListeners } from '../utils/processes'
import { GameClipService } from '../services/GameClipService'
import { configureExpressApp } from '../express'

export const main = async () => {
    await loadConfig()

    configureLogger()
    logger.info(`----------------------------------`)
    logger.info('🏁 Service Starting...')
    logger.info(`----------------------------------`)

    configureProcessListeners()
    configureExpressApp()  

    const service = GameClipService.instance({
        captureDirectory: config.captureDirectory,
        outputDirectory: config.outputDirectory
    })
    service.start()

    logger.debug('✔️  main() process execution successful.')
}