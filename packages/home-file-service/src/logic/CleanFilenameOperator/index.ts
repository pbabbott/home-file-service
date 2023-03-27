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

    
    // private moveToNas(fullPath) {
    //     const { outputDirectory } = this.options
        
    //     const filename = path.basename(fullPath)
    //     const destPath = path.join(outputDirectory, filename)
    
    //     logger.debug(`src:${fullPath} dest:${destPath}`)
    
    //     // fs.copyFile(fullPath, destPath, (err) => {
    //     //     if (err) {
    //     //         logger.error(`An error occurred while moving file from ${fullPath} to ${destPath}`)
    //     //         logError(err)
    //     //     }
    //     // })
    
    //     // TODO: actually move the file, not just copy.
    //     // fs.rename(path, destPath, (err) => {
    //     //    
    //     // })
    // }
    
  
