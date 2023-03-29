import { loadConfig, config, configFileExists, configPath } from '../utils/config'
import { configureLogger, logger } from '../utils/logging'
import { configureProcessListeners } from '../utils/processes'
import { GameClipService } from '../services/GameClipService'
import { configureExpressApp } from '../express'

const printConfig = () => {
    if (configFileExists) {
        logger.info(`Found config file at configPath: ${configPath}`)
    } else {
        logger.info(`Using default config. Did not find config file at configPath: ${configPath}`)
    }

    logger.info('Resulting config is: ')
    logger.info(JSON.stringify(config))
}

export const main = async () => {
    await loadConfig()

    configureLogger()

    printConfig()

    logger.info(`----------------------------------`)
    logger.info('🏁 Service Starting...')
    logger.info(`----------------------------------`)

    configureProcessListeners()
    configureExpressApp()  

    const service = GameClipService.instance(config.gameClipConfig)
    service.start()

    logger.debug('✔️  main() process execution successful.')
}