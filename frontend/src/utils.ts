export const longestCommonSubsequence = (textOne: string, textTwo: string) => {
  if (!textOne || !textTwo) return 0

  let m: number = textOne.length
  let n: number = textTwo.length

  let grid: number[][] = new Array(m + 1)

  for (let i: number = 0; i < grid.length; i++) {
    grid[i] = new Array(n + 1).fill(0)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (textOne[i] === textTwo[j]) {
        grid[i + 1][j + 1] = grid[i][j] + 1
      } else {
        grid[i + 1][j + 1] = Math.max(grid[i][j], grid[i + 1][j])
      }
    }
  }
  return grid
}

let deleted: string[] = []
let added: string[] = []
let sameOne: string[] = []
let sameTwo: string[] = []

export const printDifference = (
  grid: number[][],
  textOne: string,
  textTwo: string,
  i: number,
  j: number
) => {
  if (i > 0 && j > 0 && textOne[i - 1] === textTwo[j - 1]) {
    printDifference(grid, textOne, textTwo, i - 1, j - 1)
    sameOne[i - 1] = textOne[i - 1]
    sameTwo[j - 1] = textTwo[i - 1]
  } else if (j > 0 && (i === 0 || grid[i][j - 1] >= grid[i - 1][j])) {
    printDifference(grid, textOne, textTwo, i, j - 1)
    added[j - 1] = textTwo[j - 1]
  } else if (i > 0 && (j === 0 || grid[i][j - 1] < grid[i - 1][j])) {
    printDifference(grid, textOne, textTwo, i - 1, j)
    deleted[i - 1] = textOne[i - 1]
  }
  return [sameOne, deleted, sameTwo, added]
}
