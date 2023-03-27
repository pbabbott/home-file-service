import 'mocha'
import { expect } from 'chai'
import { filenameParserOperator } from './index'
import { DateTime } from 'luxon'

const testFixtures = [
    {
        filename: 'Battlefield™ 2042 2023-03-04 13-19-34.mp4',
        game: 'Battlefield™ 2042',
        date: DateTime.fromObject({ year: 2023, month: 3, day: 4, hour: 13, minute: 19, second: 34})
    },
    {
        filename: 'Call of Duty® HQ 2022-12-15 20-34-15.mp4',
        game: 'Call of Duty® HQ',
        date: DateTime.fromObject({ year: 2022, month: 12, day: 15, hour: 20, minute: 34, second: 15})
    },
    {
        filename: 'Halo Infinite 2021-12-26 20-38-56.mp4',
        game: 'Halo Infinite',
        date: DateTime.fromObject({ year: 2021, month: 12, day: 26, hour: 20, minute: 38, second: 56})
        
    }
]

describe('FilenameParser', () => {
    testFixtures.forEach(testData => {
        describe(testData.filename, () => {

            
            const input = testData.filename
            const output = filenameParserOperator(input)
                
            it('Should parse the game name', () => {
                expect(output.metadata.gameName).to.be.equal(testData.game)
            })
    
            it('Should parse the date', () => {
                expect(output.metadata.dateTime.toString()).to.be.eql(testData.date.toString())
            })
        })
    })
})