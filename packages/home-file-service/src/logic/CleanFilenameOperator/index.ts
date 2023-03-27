import { Observable, Observer } from 'rxjs';
import { CharRemover, ZWSPInstance } from "../CharRemover";
import * as path from 'path'
// import { logger, logError } from "../utils/logging"

import * as fs from 'fs'
import { logger } from '../../utils/logging';


export const cleanFilenameOperator = (fullPath:string) => {
    return new Observable<string>(subscriber => {
        
        const charRemover = ZWSPInstance
        const cleanPath = charRemover.removeCharacters(fullPath)
        if (cleanPath === fullPath) {
            logger.debug('Skipping file rename as path is clean')
            subscriber.next(fullPath)
        }
        else {
            logger.debug('Renaming file')
            fs.rename(fullPath, cleanPath, () => {
                logger.info(`Renamed file: ${cleanPath}`)
                subscriber.next(cleanPath)
            })
        }

    })
}


  
