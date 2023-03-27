import { concatAll, filter, map, mergeAll, tap } from 'rxjs'
import { logger } from "../utils/logging"
import { ObservableGameClipDirectory } from '../logic/ObservableGameClipDirectory'
import { cleanFilenameOperator } from '../logic/CleanFilenameOperator'
import { filenameParserOperator } from '../logic/FilenameParserOperator'
import { FileMoveObserver } from '../logic/FileMoveObserver'


export type GameClipServiceOptions = {
    captureDirectory: string,
    outputDirectory: string,
    waitForInitialScan: boolean
}

export class GameClipService {
    private constructor(
        private options: GameClipServiceOptions) {
    }

    static instance(options: GameClipServiceOptions) {
        return new GameClipService(options)
    }

   
    start() {

        // Start monitoring a directory
        const directoryMonitor = new ObservableGameClipDirectory({
            captureDirectory: this.options.captureDirectory,
            waitForInitialScan: true,
            // maxFiles: 1,
            enableDebugLogs: false
        })

        let observable$ = directoryMonitor
            .getObservable()
            .pipe(map(cleanFilenameOperator))
            .pipe(mergeAll())
            .pipe(map(filenameParserOperator))
            .pipe(filter(x => x.success === true))

        const {outputDirectory } = this.options
        const fileMoveObserver = new FileMoveObserver({ 
            outputDirectory,
            noOp: false,
            copyMode: true
        })

        observable$.subscribe(fileMoveObserver)
        
        directoryMonitor.startDirectoryWatcher()
        logger.info('✔️  GameClipService Started successfully.')
    }
   

}