//How many numbers III?

// We want to generate all the numbers of three digits where:

// the sum of their digits is equal to 10.

// their digits are in increasing order (the numbers may have two or more equal contiguous digits)

// The numbers that fulfill the two above constraints are: 118, 127, 136, 145, 226, 235, 244, 334

// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with three values: [1,2,3]

// 1 - the total number of possible numbers

// 2 - the minimum number

// 3 - the maximum number

// The example given above should be:

// findAll(10, 3) => [8, "118", "334"]
// If we have only one possible number as a solution, it should output a result like the one below:

// findAll(27, 3) => [1, "999", "999"]
// If there are no possible numbers, the function should output the empty array.

// findAll(84, 4) => []
// The number of solutions climbs up when the number of digits increases.

// findAll(35, 6) => [123, '116999', '566666']
// Features of the random tests:

// Number of tests: 112
// Sum of digits value between 20 and 65
// Amount of digits between 2 and 17

function findAll(n, k) {
    let solutions = []
    function sumDigits(num) {
      let sum = 0;
      while (num) {
          let digit = num % 10;
          sum += digit;
          num = (num - digit) / 10;
      }
      return sum;
    }
    
    function isIncreasingOrder(num) {
      let str = num.toString();
      for (let i=0;i<str.length-1;i++) {
        if (Number(str[i]) > Number(str[i+1])) {
          return false
        }
      }
      return true;
    }
    
    for (let i=10**(k-1);i<10**k;i++) {
      let sum = sumDigits(i)
      if (sum !== n) continue;
      
      if (Number(i.toString()[0]) > n/k) break;
  
      if (isIncreasingOrder(i)) {
        solutions.push(i.toString())
      }
    }
    if (!solutions.length) {
      return [];
    } else return [solutions.length, solutions[0], solutions[solutions.length-1]]
  }