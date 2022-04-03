// The observed PIN

// DESCRIPTION:
// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

// Detective, we are counting on you!

function getPINs(observed) {
    let zero = ['0','8'];
    let one = ['1','2','4'];
    let two = ['2','1','3','5'];
    let three = ['3','2','6'];
    let four = ['4','1','5','7'];
    let five = ['5','2','4','6','8'];
    let six = ['6','3','5','9'];
    let seven = ['7','4','8'];
    let eight = ['8','5','7','9','0'];
    let nine = ['9','6','8'];
    
    observed = observed.split("")
    let result = []
    observed.forEach(elem => {
      switch (elem) {
          case "0":
            result.push(zero)
            return
          case "1":
            result.push(one)
            return
          case "2":
            result.push(two)
            return
          case "3":
            result.push(three)
            return
          case "4":
            result.push(four)
            return
          case "5":
            result.push(five)
            return
          case "6":
            result.push(six)
            return
          case "7":
            result.push(seven)
            return
          case "8":
            result.push(eight)
            return
          case "9":
            result.push(nine)
            return
          default: return
      }
    })
    const combine = ([head, ...[headTail, ...tailTail]]) => {
      if (!headTail) return head
  
      const combined = headTail.reduce((acc, x) => {
        return acc.concat(head.map(h => `${h}${x}`))
      }, [])
  
      return combine([combined, ...tailTail])
    }
    
    return combine(result)
  }
  //Array of each group of adjacent numbers, with the zeroth index being the number
  //observed.forEach() switch case (0-9): push each array into an array of arrays representing the possible # in each index
  //Function to permute two arrays and return the array of every single permutation
  //reduce function using the above function to permute an indefinite number of arrays
  //function permute(array1, array2) {
  //     return array1.flatMap(d => array2.map(v => d + v))
  //   }
  
  //   return result.reduce((acc, next) => {
  //     return permute(acc, next)
  //   })
  //this permute solution using flatMap works but it isn't compatible