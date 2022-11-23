import { configureLogger, logger } from '../utils/logging'
import * as chokidar  from 'chokidar'
import { configureProcesses } from '../utils/processes'

export const main = async () => {

    configureLogger()
    logger.info('🏁 Service Starting...')

    configureProcesses()

    const watcher = chokidar.watch('.').on('all', (event, path) => {
        logger.debug(`${event} ${path}`);
    });

    const log = (msg) => logger.debug(msg)

    watcher
        .on('addDir', path => log(`Directory ${path} has been added`))
        .on('unlinkDir', path => log(`Directory ${path} has been removed`))
        .on('error', error => log(`Watcher error: ${error}`))
        .on('ready', () => log('Initial scan complete. Ready for changes'))
        .on('raw', (event, path, details) => { // internal
            log(`Raw event info: ${event}, ${path}, ${details}`);
        });

    logger.debug('Main')
}