import * as chokidar  from 'chokidar'
import { take, Observable, Subscriber, map, tap } from 'rxjs';
import { logger } from "../../utils/logging"


export type MonitoringOptions = {
    captureDirectory: string
    waitForInitialScan: boolean
    maxFiles?: number
    enableDebugLogs: boolean
}

export class ObservableGameClipDirectory  {

    constructor(private readonly options: MonitoringOptions) {
    }

    private __isReady = false
    private __subscriber: Subscriber<string> = null

    getObservable(): Observable<string> {

        // Setup the observable & stream configuration
        let result$ = new Observable<string>(subscriber => {
            logger.debug('Updating subscriber')
            this.__subscriber = subscriber
        })

        // Potentially limit the observable to just a few files for debugging
        const { maxFiles } = this.options
        if (maxFiles) {
            logger.info(`🔭  Stop scanning after number of files: ${maxFiles}`)
            result$ = result$.pipe(take(maxFiles))
        }

        // Debug output for each file detected
        const { enableDebugLogs } = this.options
        if (enableDebugLogs) {
            result$ = result$.pipe(tap(x => {
                logger.debug(`Observable: added file: ${x}`)
            }))
        }

        return result$
    }

    startDirectoryWatcher() {
        const { captureDirectory, waitForInitialScan } = this.options

        logger.info(`🔭  Wait for initial scan: ${waitForInitialScan}`)
        logger.info(`🔭  Watching directory: ${captureDirectory}`)

        chokidar
            .watch(captureDirectory, {
                awaitWriteFinish: {
                    stabilityThreshold: 2000,
                    pollInterval: 100
                },
            })
            .on('ready', () => {
                logger.info('🔭  Initial scan complete. Ready for changes.')
                this.__isReady = true
            })
            .on('add', (fullPath) => {
                
                if (this.__subscriber === null) return
    
                // If waitForInitialScan is set, then only consider files as added after the initial scan.
                if ((waitForInitialScan && this.__isReady) || !waitForInitialScan) {
                    this.__subscriber.next(fullPath)
                }
            })
    }
    
}




