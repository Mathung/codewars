// Battleship field validator - 3 Kyu

// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

function validateBattlefield(field) {
    let rows = field;
    let columns = [[],[],[],[],[],[],[],[],[],[]];
    field.forEach((row,y) => {
      row.forEach((e,x) => {
        columns[x][y] = e;
      })
    })
    let ships = {
      battleships: 0,
      cruisers: 0,
      destroyers: 0,
      submarines: 0,
      illegal: 0,
    }
    
    //Go through the rows, and every time I find a 1 in row, count down the column.
    rows.forEach((row,y) => {
      row.forEach((cell,x) => {
        if (cell === 1) {
          let count = 1;
          //Count number of consecutive 1s down the columns
          for (let i=y;i<10;i++) {
            if (columns[x][y-1] === 1){ //Only count from the start of set; this avoids double counting
              count = 0;
              break;
            } else if (row[x+1] === 1 || row[x-1] === 1) { //If there's an adjacent cell in the row, break
                count = 0;
                break;
            } else if (x < 9 && (columns[x+1][y+1] === 1 || //If it tries to read from columns[10][n] or columns[-1][n] it will error because it's trying to read from an array that doesn't exist
                        columns[x+1][y-1] === 1) ||
                        x > 0 && (columns[x-1][y-1] === 1 ||
                        columns[x-1][y+1] === 1)) { //If there's a diagonal adjacent cell, this is illegal
                ships['illegal']++;
                break;
            } else if (columns[x][i] === 0) { //If the cell is a zero, the count stops
              break;
            } else if (columns[x][i+1] === 1){ //If the next cell down is a 1, add to the count
              if (row[x+1] === 1 || row[x-1] === 1) { // But if the next cell down is a 1 and there is an adjacent 1 in the row, this is illegal
                ships['illegal']++;
                count = 0;
                break;
              }
              count++;
            }
          }
            console.log(count)
          if (count > 4) {
            ships['illegal']++
          }
          switch (count) {
              case 1:
                ships['submarines']++;
                break;
              case 2: 
                ships['destroyers']++;
                break;
              case 3: 
                ships['cruisers']++;
                break;
              case 4:
                ships['battleships']++;
                break;
              default:
                break;
          }
        }
      })
    })
  
    columns.forEach((column,x) => {
      column.forEach((cell,y) => {
        if (cell === 1) {
          let count = 1;
          //Count number of consecutive 1s down the columns
          for (let i=x;i<10;i++) {
            if (rows[y][x-1] === 1){ //Only count from the start of set; this avoids double counting
              count = 0;
              break;
            } else if (column[y+1] === 1 || column[y-1] === 1) { //If there's an adjacent cell in the row, break
                count = 0;
                break;
            }else if (rows[y][i] === 0) { //If the cell is a zero, the count stops
              break;
            } else if (rows[y][i+1] === 1){ //If the next cell cown is a 1, add to the count
              if (column[y+1] === 1 || column[y-1] === 1) { // But if the next cell cown is a 1 and there is an adjacent 1 in the row, this is illegal
                ships['illegal']++;
                count = 0;
                break;
              }
              count++;
            }
          }
            console.log(count)
          if (count > 4) {
            ships['illegal']++
          }
          switch (count) {
              //don't count submarines because submarines have already been counted
              case 2: 
                ships['destroyers']++;
                break;
              case 3: 
                ships['cruisers']++;
                break;
              case 4:
                ships['battleships']++;
                break;
              default:
                break;
          }
        }
      })
    })
    console.log(ships)
    if (ships['illegal'] > 0) {
      return false;
    } 
    if (ships['battleships'] === 1 &&
        ships['cruisers'] === 2 &&
        ships['destroyers'] === 3 &&
        ships['submarines'] === 4) {
      return true;
    } else return false;
  }
  //Get the array of columns 
  //Create a function that checks the arrays and counts the consecutive 1s, when 
  //it finds a 1, start counting only if the previous element isn't a 1.
  //count the number of 1s in a row, and modify the object based on the result.
  //ex. object of battleships: n cruisers: x destroyers: y submarines: z
  //if it finds 5 or more in a row, break and return false
  //cross reference the two sets using reversed indexes. if an element has 
  //a neighbor in both arrays, break and return false.
  //if an element has no neighbor in either array, add 1 to submarines.
  //check the final object: if ships['battleship'] === 1, ships['cruiser'] === 2,
  //etc. all match return true.