// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
    let count;
    let result = A[0];
    function countDuplicates(arr) {
      count = 0;
      arr.forEach(elem => {
        if (elem == arr[0]) {
          count++
        }
      })
      return count;
    }
    
    function trimEvens(arr) {
      return arr.filter(elem => (elem !== arr[0]))
    }s
    
    while (countDuplicates(A) % 2 == 0) {
      A = trimEvens(A);
      result = A[0];
    }
    return result;
  }
  
  //declare a count variable
  //create a function that sets count back to 0, then iterates through the array, checking for all elements that match array[0] and count++ each time
  //if count % 2 == 0, array.filter (elem => elem !== array[0]), run function again
  //else, count % 2 == 1, odd  number of appearances, return count