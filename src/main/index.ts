import express from 'express'
import { loadConfig, config } from '../utils/config'
import { configureLogger, logger } from '../utils/logging'
import { configureProcesses } from '../utils/processes'
import { GameClipService } from '../services/GameClipService'

export const main = async () => {
    await loadConfig()

    configureLogger()
    logger.info('🏁 Service Starting...')

    configureProcesses()

    /// ---  express
    const app = express()
    app.get('/', (req, res) => {
        res.send('hello world')
    })
    const { port } = config
    app.listen(config.port, () => {
        logger.info(`Example app listening on port ${port}`)
    })

    /// ---  express

    /// ---  game clip service
    const service = GameClipService.instance({
        captureDirectory: "C:\\Users\\pbabb\\Videos\\Captures",
        outputDirectory: "V:\\GameCaptures\\Raw"
    })
    // service.start()

    /// ---  game clip service


    logger.debug('✔️  main() process execution successful.')
}