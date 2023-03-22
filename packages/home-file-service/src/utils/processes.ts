import { logger } from "./logging"

const exit = () => {
    logger.info('exit(): Program Terminated.')
    process.exit(1)
}

export const configureProcessListeners = () => {

    process.on('uncaughtException', (err) => {
        logger.error('🚫 Uncaught exception', err)
        exit()
    })
    process.on('SIGTERM', () => {
        logger.info('SIGTERM, program exiting')
        exit()
    })
    process.on('SIGINT', () => {
        logger.info('SIGINT, program exiting')
        exit()
    })
    process.on('SIGUSR2', () => {
        logger.info('SIGUSR2, program exiting')
        exit()
    })

    logger.debug('Process Listeners Configured.')
    
}