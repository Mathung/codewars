// Integers: Recreation One 5 kyu

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

function listSquared(m, n) {
    let sets = []; //The solution will be stored in this array
  
    //Iterate through all numbers from m to n
    for (let i=m;i<=n;i++) {
      let divisors = []; //All divisors of i will be stored in this array using the nested for loop below
      for (let j=i;j>0;j--) {
        //If i is divisible by a number, add the divisors to the array
        if (i % j === 0) { 
          if (!divisors.includes(j)) divisors.push(j);
          if (!divisors.includes(i/j)) divisors.push(i/j);
        }
      }
      //Square all divisors and sum them
      let sumSquares = divisors.reduce((acc, next) => {
        return acc + (next ** 2)
      }, 0)
      //If the sum of the squared divisors is itself a square, add to solution.
      if (Number.isInteger(Math.sqrt(sumSquares))) {
        sets.push([i, sumSquares])
      }
    }
    return sets;
}