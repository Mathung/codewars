// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let res = []
    let zeroes = []
    while (arr.length) {
      if (arr[0] === 0) {
        zeroes.push(arr.shift())
      } else {
        res.push(arr.shift())
      }
    }
    return res.concat(zeroes)
  }