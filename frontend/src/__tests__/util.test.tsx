import { leastCommonSubsequence } from '../utils'

describe('leastCommonSubsequence', () => {
    test('testing lcs one', () => {
        let textOne: string = 'martin loves to code'
        let textTwo: string = 'martin hates to code'
        let m: number = textOne.length - 1
        let n: number = textTwo.length - 1
        let actualResult: number = 16
        let grid: number[][] = leastCommonSubsequence(textOne, textTwo)
        let result: number = grid[m][n]

        expect(result).toEqual(actualResult)
    })
    test('lcs test two', () => {
        let textOne: string = 'do you love coding?'
        let textTwo: string = 'do you hate coding?'
        let m: number = textOne.length - 1
        let n: number = textTwo.length - 1
        let actualResult: number = 15
        let grid: number[][] = leastCommonSubsequence(textOne, textTwo)
        let result: number = grid[m][n]

        expect(result).toEqual(actualResult)
    })
})