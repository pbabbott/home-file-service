import * as winston from 'winston'

export let logger = undefined

export const configureLogger = () => {
    logger = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),    
    })
    
    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
          format: winston.format.simple(),
        }));
    }
    logger.debug(`Logger configured, process.env.NODE_ENV: ${process.env.NODE_ENV}`)
}


