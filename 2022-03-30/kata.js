// Sudoku Solution Validator - 4 Kyu

// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board){
    let validSection = "123456789"
    function check(arr) {
      if (arr.sort((a, b) => a - b).join("") == validSection) return true;
      else return false;
    }
    function getColumns(arr) {
      let result = [[],[],[],[],[],[],[],[],[]]
      for (let i=0;i<9;i++) {
        for (let j=0;j<9;j++) {
          result[i].push(arr[j][i])
        }
      }
      return result;
    }
    function getBoxes(arr) {
      let result = [[],[],[],[],[],[],[],[],[]]
      for (let i=0;i<9;i++) {
        for (let j=0;j<9;j++) {
          result[i].push(arr[~~(j/3) + (3 * (i % 3))][(j % 3) + 3 * ~~(i/3)])
        }
      }
      return result;
    }
    let columns = getColumns(board);
    let boxes = getBoxes(board)
    function checkSection(arr) {
      return arr.every((elem) => {
        return check(elem)
      })
    }
    if (checkSection(board) && checkSection(columns) && checkSection(boxes)) return true;
    else return false;
  }
  //In a valid sudoku board, each row, column, and box adds up to 45 and every single value in each subsection is unique.
  //I can validate each section by checking that 1. the sum of all elements in the section is 45 and 2. no two elements are the same
  //I may also be able to validate each section by sorting,  joining, and comparing the string to string "123456789"
  //First I need to create a function that creates and array of each 3x3 box and a function that creates an array of each column
  //result[i].push(arr[~~(j/3) + (3 * (i % 3))][(j % 3) + 3 * ~~(i/3)]) this is completely unreadable but it works
  //result[i].push(arr[3 * (i % 3) + j][k + (3 * ~~(i/3))]) is this more readable?