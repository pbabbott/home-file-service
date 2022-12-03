import { configureLogger, logger } from '../utils/logging'
import * as chokidar  from 'chokidar'
import { configureProcesses } from '../utils/processes'

export const main = async () => {

    configureLogger()
    logger.info('🏁 Service Starting...')
    logger.debug('🏁 Check 123...')

    configureProcesses()

    const log = (msg) => logger.debug(msg)

    let isReady = false

    chokidar
        .watch('C:\\temp\\', {
            awaitWriteFinish: {
                stabilityThreshold: 2000,
                pollInterval: 100
            },
        })
        .on('ready', () => {
            log('Initial scan complete. Ready for changes')
            isReady = true
        })
        .on('add', (path) => {
            if (isReady)
                logger.debug(`${path} has been added`);
        })
    
    logger.debug('main() process execution successful.')
}