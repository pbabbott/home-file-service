import * as winston from 'winston'
import { config } from '../utils/config'

export let logger = undefined

export const configureLogger = () => {
    const { level } = config.logging

    logger = winston.createLogger({
        level,
        format: winston.format.json(),    
    })
    
    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            winston.format.padLevels()
          )
        }));
        logger.debug('🖥️  Console transport added to logger')
    }

    const { logFile } = config.logging
    logger.add(new (winston.transports.File)({ filename: logFile }))

    logger.debug(`NODE_ENV: ${process.env.NODE_ENV}`)
    logger.debug(`✏️  Logger configured!`)
}


