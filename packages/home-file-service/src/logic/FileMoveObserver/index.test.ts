import 'mocha'
import { expect } from 'chai'
import { FileMoveObserver } from './index'
import { GameClipMetadata } from '../FilenameParserOperator'
import { DateTime } from 'luxon'

describe('FileMoveObserver', () => {

    describe('Calculate Destination', () =>{

        const expected = 'V:\\GameCaptures\\Raw\\2023-03\\Battlefield™ 2042 2023-03-04 13-19-34.mp4'
        it(`Should match "${expected}"`, () => {
            const outputDirectory = 'V:\\GameCaptures\\Raw'

            const sut = new FileMoveObserver(outputDirectory, {
                noOp: true,
            })

            const metadata: Partial<GameClipMetadata> = {
                filename: 'Battlefield™ 2042 2023-03-04 13-19-34.mp4',
                dateTime: DateTime.fromObject({ year: 2023, month: 3, day: 4, hour: 13, minute: 19, second: 34})
            }

            const actual = sut.calculateDestination(metadata as GameClipMetadata)

            expect(actual).to.be.eql(expected)
        })
    })
})