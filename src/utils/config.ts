import { promises as fs } from 'fs'
import { loadAsync } from 'node-yaml-config'
import path from 'path'
import * as _ from 'lodash'

export let config

const fileExists = async path => !!(await fs.stat(path).catch(e => false));

const defaultConfig = {
    captureDirectory: 'C:\\Users\\pbabb\\Videos\\Captures',
    outputDirectory: 'V:\\Temp',
    logging: { 
        logFile: 'C:\\\\home-file-service\\\\log.txt', 
        level: 'debug' 
    },
    port: 4000
}

export const loadConfig = async () => {
    // path should be even with package.json
    const configPath = path.resolve(__dirname, '../../config.yml')
    const configFileExists = await fileExists(configPath);

    if (!configFileExists) 
        return defaultConfig
        
    const fileConfig = await loadAsync(configPath)

    config = _.merge({}, defaultConfig, fileConfig)

    return config    
}