import * as winston from 'winston'

export let logger = undefined

export const configureLogger = () => {
    logger = winston.createLogger({
        level: 'debug',
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

    logger.debug(`NODE_ENV: ${process.env.NODE_ENV}`)
    logger.info(`✏️  Logger configured!`)
}


