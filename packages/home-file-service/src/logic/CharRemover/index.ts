

export class CharRemover {

    private readonly _invalid: string[]
    constructor (invalidCharacters: string[]){
        this._invalid = invalidCharacters
    }

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