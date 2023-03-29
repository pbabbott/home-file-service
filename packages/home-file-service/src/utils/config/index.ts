import { promises as fs } from 'fs'
import { loadAsync } from 'node-yaml-config'
import path from 'path'
import * as _ from 'lodash'
import { ServiceConfig } from './types'

export let configPath:string = undefined
export let config:ServiceConfig = undefined
export let configFileExists:boolean = undefined

export async function fileExists(path) {
    try {
        await fs.access(path)
        return true
    } catch {
        return false
    }
}

const getDefaultConfig = (): ServiceConfig => {
    return {
        gameClipConfig: {
            captureDirectory: 'C:\\Users\\pbabb\\Videos\\Captures',
            outputDirectory: 'V:\\GameCaptures\\Raw',
            monitoringConfig: {
                waitForInitialScan: true,
                //maxFiles: 1
            },
            gameClipMoveConfig: {
                noOp: false,
                copyMode: true
            }
        },
        logging: {
            level: 'debug',
            colorize: true
        },
        port: 4000
    }
}

export const loadConfig = async () => {
    // path should be even with package.json
    configPath = path.resolve(global.__basedir, '../config.yml')
    configFileExists = await fileExists(configPath);

    const defaultConfig = getDefaultConfig()

    if (!configFileExists) {
        config = defaultConfig
        return
    }

    const fileConfig = await loadAsync(configPath)
    config = _.merge({}, defaultConfig, fileConfig)
}