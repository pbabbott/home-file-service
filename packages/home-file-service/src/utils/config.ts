import { promises as fs } from 'fs'
import { loadAsync } from 'node-yaml-config'
import path from 'path'
import * as _ from 'lodash'

export let config = undefined

export async function fileExists(path) {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}


const getDefaultConfig = () => {

    return {
        captureDirectory: 'C:\\Users\\pbabb\\Videos\\Captures',
        outputDirectory: 'V:\\GameCaptures\\Raw',
        logging: {
            level: 'debug',
            colorize: true
        },
        port: 4000
    }
}

export const loadConfig = async () => {
    // path should be even with package.json
    const configPath = path.resolve(global.__basedir, '../config.yml')
    const configFileExists = await fileExists(configPath);

    const defaultConfig = getDefaultConfig()

    if (!configFileExists) {
        console.log(`Did not find config file at ${configPath}, using default config`)
        config = defaultConfig
        return
    }


    const fileConfig = await loadAsync(configPath)
    config = _.merge({}, defaultConfig, fileConfig)
    console.log(`Found config file at ${configPath} -- resulting config is`, config)

}