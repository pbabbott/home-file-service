import express from 'express'
import { config } from '../utils/config'
import { logger } from '../utils/logging'


export const configureExpressApp = () => {
    const app = express()
    const { name, version } = require('../../package.json')

    app.get('/', (req, res) => {
        res.json({
            name,
            version
        })
    })

    const { port } = config

    app.listen(config.port, () => {
        logger.info(`Example app listening on port ${port}`)
    })

}
