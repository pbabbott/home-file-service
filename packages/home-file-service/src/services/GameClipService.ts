import { filter, map, mergeAll, tap } from 'rxjs'
import { logger } from "../utils/logging"
import { ObservableGameClipDirectory } from '../logic/ObservableGameClipDirectory'
import { cleanFilenameOperator } from '../logic/CleanFilenameOperator'
import { filenameParserOperator } from '../logic/FilenameParserOperator'
import { FileMoveObserver } from '../logic/FileMoveObserver'
import { GameClipServiceOptions } from '../utils/config/types'

export class GameClipService {
    private constructor(
        private options: GameClipServiceOptions) {
    }

    static instance(options: GameClipServiceOptions) {
        return new GameClipService(options)
    }
   
    start() {
        // Start monitoring a directory
        logger.debug(Object.keys(this.options))
        const directoryMonitor = new ObservableGameClipDirectory(
            this.options.captureDirectory,
            this.options.monitoringConfig)

        let observable$ = directoryMonitor
            .getObservable()
            .pipe(map(cleanFilenameOperator))
            .pipe(mergeAll())
            .pipe(map(filenameParserOperator))
            .pipe(filter(x => x.success === true))

        const {outputDirectory } = this.options
        const fileMoveObserver = new FileMoveObserver(outputDirectory, this.options.gameClipMoveConfig)

        observable$.subscribe(fileMoveObserver)
        
        directoryMonitor.startDirectoryWatcher()
        logger.info('✔️  GameClipService Started successfully.')
    }
}