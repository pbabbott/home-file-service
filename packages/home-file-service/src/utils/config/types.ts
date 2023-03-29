
export type LoggingConfig = {
    level: string,
    colorize: boolean
}

export type MonitoringConfig = {
    waitForInitialScan: boolean
    maxFiles?: number
}

export type GameClipMoveConfig = {
    /** Will cause no operation to any file, just debug logs */
    noOp?: boolean

    /** Will cause files to get copied to dest rather than moved*/
    copyMode?: boolean
}

export type GameClipServiceOptions = {
    captureDirectory: string
    outputDirectory: string

    monitoringConfig: MonitoringConfig
    gameClipMoveConfig: GameClipMoveConfig
}

export type ServiceConfig = {
    gameClipConfig: GameClipServiceOptions
    logging: LoggingConfig
    port: number
}