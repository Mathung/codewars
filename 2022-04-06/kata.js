// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    function addDigits(num) {
      return num.toString().split("").reduce((acc, next) => {return acc + Number(next)}, 0)
    }
    let num = n;
    while (num > 9) {
      num = addDigits(num)
    }
    return num
  }
  //number to string
  //string split
  //reduce string->number add number
  //while (num > 9) do this