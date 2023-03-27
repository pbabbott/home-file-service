import { DateTime } from 'luxon'
import * as path from 'path'

export type GameClipMetadata = {
    dateTime: DateTime
    gameName: string
    filename: string
    fullPath: string
}

export type GameClipMetadataParseResult = {
    success: boolean
    metadata?: GameClipMetadata
}

/**
 * Takes a filename such as 'Call of Duty® HQ 2022-12-15 20-34-15.mp4' and parses 
 * out the name of the game and the date.
 * @param fullPath the input string, which should be a filename ending in .mp4
 * @returns Metadata - The name of the game and the date extracted from the filename. 
 * If unsuccessful, success will be false.
 */
export const filenameParserOperator = (fullPath: string): GameClipMetadataParseResult => {
    const regex = /\d\d\d\d-\d\d-\d\d \d\d-\d\d-\d\d\.mp4$/

    const filename = path.basename(fullPath)
    const matches = filename.match(regex)

    if (!matches.length) {
        return { success: false }
    }

    const dateAsString = matches[0].replace('.mp4', '')
    const dateTime = DateTime.fromFormat(dateAsString, 'yyyy-MM-dd HH-mm-ss')
    const gameName = filename.split(` ${dateAsString}`)[0]

    return {
        success: true,
        metadata: {
            gameName,
            dateTime,
            fullPath,
            filename,
        },
    }
}
