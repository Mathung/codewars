// Permutations 4 Kyu

// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function permutations(string) { //permutations is called on a string
    if (typeof string !== "string"||!string.length) {
      return;
    } else if (string.length < 2) { //if the string is 1 character or less, the problem has already been solved. return the string and exit out
      return new Array(string)
    }
    //the empty permutationsArray is created
    let permutationsArray = [];
    //the string is iterated through. In each iteration, there are two variables
    for (let i=0;i<string.length;i++) {
      //  1. char: The char the iteration is currently looking at, as a string
      let char = string[i]; 
      //  2. rest: Every other char in the original string, as a string.
      let rest = string.slice(0, i) + string.slice(i+1); 
      
      //inside this loop, another loop is called.
      //this loop iterates through all of the elements of a new permutationsArray, created "one level deeper" when permutations is called on rest
      //inside this function, the same thing recurs with a string argument that is one character shorter. this recurs until the length of the argument is 1
      for (let permutation of permutations(rest)) { 
        if (permutationsArray.indexOf(char + permutation) < 0) { //check if the result already exists in the array
          permutationsArray.push(char + permutation)
        }
      }
    }
    return permutationsArray
  }
  
  //permutations(rest) at the highest level returns an array of all of the permutations of string.length - 1 characters
  //at the next deeper level, it returns all permutations of string.length - 2 characters. each time it goes deeper, the new permutations(rest) is added to the top of the call stack
  //this continues until permutations(rest) returns an array of a single character.
  //at which point the recursion stops, and it works through the entire call stack until it comes back to the outermost function, and returns the full array of permutations.