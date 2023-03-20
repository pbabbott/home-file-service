import * as winston from 'winston'
import { config } from '../utils/config'

export let logger = undefined

export const configureLogger = () => {
    const { level } = config.logging

    logger = winston.createLogger({
        level,
        format: winston.format.json(),
    })

    const formats = []
    if (config.logging.colorize) {
        formats.push(winston.format.colorize())
    }

    formats.push(winston.format.simple())
    formats.push(winston.format.padLevels())

    logger.add(new winston.transports.Console({
        format: winston.format.combine(...formats)
    }));

    logger.debug(`NODE_ENV: ${process.env.NODE_ENV}`)
    logger.debug(`✏️  Logger configured!`)
}


export const logError = (err: NodeJS.ErrnoException) => {
    logger.error(`err.name: ${err.name}`)
    logger.error(`err.message: ${err.message}`)
    logger.error(`err.cause: ${err.cause}`)
    logger.error(`err.errno: ${err.errno}`)
    logger.error(`err.path: ${err.path}`)
    logger.error(`err.stack: ${err.stack}`)
    
}