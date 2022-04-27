// Valid Chess Moves 5 kyu

// You are presented with a single knight on a chess board. Your task is to count the number of unique positions that knight could reach using exactly two moves. In chess a knight can move either 2 squares horizonally and 1 square vertically OR 2 squares vertically and one square horizontally. It must stay on the board at all times (8x8 squares).

// The chess board will be presented as a 2D array. The knight's position is indicated by a "K" and empty squares "0"

// [ [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', 'K', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0', 'I' ],
//   [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', 'V', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0', '0' ] ]

// Make sure to return the number of unique end positions for the knight as it may be able to reach the same location via different routes.

// Also bear in mind the kinght can return to its starting position.

// Do not count positions the knight can reach in one move but not in two.

// For example, in the above grid, the cell marked with an 'I' can be reached in one move, but a second move will take the knight away from this square, making this an invalid endpoint.

// The position marked with a 'V' is an example of a valid endpoint.

function count(board) {
    let validCount = 0;
    function findValidKnightMoves(y, x) {
      //Array of all possible positions the knight can move
      let possibleMoves = [
        [y+2, x+1],  
        [y-2, x-1],  
        [y-2, x+1], 
        [y+2, x-1], 
        [y+1, x+2],  
        [y-1, x-2], 
        [y-1, x+2], 
        [y+1, x-2] 
      ];
      //Return the array of valid moves out of the possible moves: filter out any x and y positions that are outside of the 8x8 board
      return possibleMoves.filter(e => {
        if (e[0] > -1 &&
            e[1] > -1 &&
            e[0] < 8 &&
            e[1] < 8) {
          return true;
        }
      })
    }
    board.forEach((row, y) => {
      let x = row.indexOf('K'); //find the knight
      if (x > -1) { //if the knight is found...
        //create the array of all possible places the knight can go with two moves
        let validMoves = findValidKnightMoves(y, x).flatMap(e=> {
          return findValidKnightMoves(e[0], e[1]);
        })
        let seen = []; //remember which positions have already been checked
        validMoves.forEach(e=> {
          if (board[e[0]][e[1]] == '0' && !seen.includes(`${e[0]}, ${e[1]}`)) { //check if position is open
            validCount++;
          }
          seen.push(`${e[0]}, ${e[1]}`);
        })
      }
    })
    return validCount ? validCount +1 : validCount; //If the knight has any valid moves, original position is also a valid move
  }
  // the coordinates of the board are board[y][x] 
  // knights can move in the following ways: 
  //   board[y+2][x+1]  
  //   board[y-2][x-1]  
  //   board[y-2][x+1] 
  //   board[y+2][x-1] 
  //   board[y+1][x+2]  
  //   board[y-1][x-2] 
  //   board[y-1][x+2] 
  //   board[y+1][x-2] 
  //  Where board[y][x] is the knight's position