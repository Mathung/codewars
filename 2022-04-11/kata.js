// Range Extraction 4 Kyu

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
// Courtesy of rosettacode.org

// ALGORITHMS

function solution(list){
    let str = "";
    function checkRange(array, currentIndex) {
      let range = 2;
      while (array[currentIndex+range] - array[currentIndex] === range) {
        range++;
      }
      return range-1;
    }
    for (let i=0;i<list.length;i++) {
     if (list[i+1] - list[i] === 1 && list[i+2] - list[i] === 2) {
       str+= list[i]; 
       str+="-"; 
       str+= list[i+checkRange(list, i)];
       i+=checkRange(list, i);
     } else {
       str+=list[i];
     }
     if (list[i+1]) str +=",";
    }
    return str;
  }
  //Parameter is an array of integers
  //Returns a string of numbers separated by commas, with any range of 3+ consecutive numbers condensed
  //If three or more integers in a row are consecutive, condense them into a range
  //So I need a loop that iterates through the array, checking each element, and the next element.  
  //let str=""
  //
  //If array[index+1] - array[index] == 1 && array[index+2] - array[index] == 2, str+= array[index]; str+="-"; str+= array[index+checkRange(array, currentIndex)]
  //function checkRange(array, currentIndex) {let range=2; while (array[currentIndex+range] - array[currentIndex] === range) {range++} return range}
  //else str+=array[index]; 
  //if (array[index+1]) str+=","