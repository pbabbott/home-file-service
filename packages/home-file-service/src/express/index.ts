import express from 'express'
import { config } from '../utils/config'
import { logger } from '../utils/logging'
import apiMetrics from 'prometheus-api-metrics'

export const configureExpressApp = () => {
    const app = express()
    const { name, version } = require('../../package.json')

    app.get('/', (req, res) => {
        res.json({
            name,
            version
        })
    })

    app.use(apiMetrics())

    const { port } = config
    app.listen(config.port, () => {
        logger.info(`Example app listening on port ${port}`)
    })

}
