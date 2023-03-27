

export class CharRemover {

    private readonly _invalid: string[]
    constructor (invalidCharacters: string[]){
        this._invalid = invalidCharacters
    }

    /**
     * Remove all instances of a given set of characters from an input string.
     * @param dirtyString The string which has characters to be removed.
     * @returns a clean string with all ocurrences removed.
     */
    removeCharacters(dirtyString:string): string {
        const invalidTestString = this._invalid.join("|")
        
        const testRegEx = new RegExp(invalidTestString, 'g')
        const isInString = testRegEx.test(dirtyString)

        if (isInString) {
            return dirtyString.replace(testRegEx, "")
        }

        return dirtyString
    }

}

export const ZWSPInstance = new CharRemover(["\uFEFF", "\u200B", "\u200C", "\u200D"])