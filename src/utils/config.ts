import { promises as fs } from 'fs'
import { loadAsync } from 'node-yaml-config'
import path from 'path'
import * as _ from 'lodash'

export let config

const fileExists = async path => !!(await fs.stat(path).catch(e => false));

const getDefaultConfig = () => {
    const logFile = path.resolve(global.__basedir, 'output.log')
    
    return {
        captureDirectory: 'C:\\Users\\pbabb\\Videos\\Captures',
        outputDirectory: 'V:\\Temp',
        logging: { 
            logFile, 
            level: 'debug',
            enableConsole: true
        },
        port: 4000
    }
}

export const loadConfig = async () => {
    // path should be even with package.json
    const configPath = path.resolve(global.__basedir, '../../config.yml')
    const configFileExists = await fileExists(configPath);

    const defaultConfig = getDefaultConfig()

    if (!configFileExists) 
        return defaultConfig
        
    const fileConfig = await loadAsync(configPath)

    config = _.merge({}, defaultConfig, fileConfig)

    return config    
}