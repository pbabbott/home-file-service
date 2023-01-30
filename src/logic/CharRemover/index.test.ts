import 'mocha'
import { expect } from 'chai'
import { CharRemover } from '.'

describe('CharRemover', () => {

    describe('hello world test', () => {
        const sut = new CharRemover(["o", "l"])
        const input = 'hello world'
        const output = sut.removeCharacters(input)

        it('Should remove all of the l characters', () => {
            expect(output.indexOf('l')).to.be.equal(-1)
        })

        it('Should remove all of the o characters', () => {
            expect(output.indexOf('o')).to.be.equal(-1)
        })

        it('Should equal "he wrd"', () => {
            expect(output).to.be.equal('he wrd')
        })
        
    })

    describe('ZWSP Test', () => {
        const sut = new CharRemover(["\uFEFF", "\u200B", "\u200C", "\u200D"])
        const input = 'C​a​l​l​ ​o​f​ ​D​u​t​y​®​ ​H​Q​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 2022-12-01 20-59-50.mp4'
        const output = sut.removeCharacters(input)

        it('Should remove all of the \u200B characters', () => {
            expect(output.indexOf('\u200B')).to.be.equal(-1)
        })

        it('Should equal "Call of Duty® HQ 2022-12-01 20-59-50.mp4"', () => {
            expect(output).to.be.equal('Call of Duty® HQ 2022-12-01 20-59-50.mp4')
        })
    })
})