// Catching Car Mileage Numbers - 4 Kyu

// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
// You should only ever output 0, 1, or 2.

function isInteresting(number, awesomePhrases) {
    //Check for trailing zeroes
    function trailingZeros(num) {
      return num.toString().substring(1).split('').every(e=>e==='0')
    }
    //Check for palindromes
    function isPalindrome(num) {
      if (num < 100) return false;
      let forward = num.toString();
      let reversed = num.toString().split('').reverse().join('')
      if (forward === reversed) return true;
      else return false;
    }
    // Check for incrementing, decrementing
    function isIncrementing(num) {
      let arr = num.toString().split('').map(e=>Number(e))
      for (let i=0;i<arr.length-1;i++) {
        if (arr[i] === 9 && arr[i+1] === 0) { //9->0 counts as incrementing but would not be caught by the below code
          continue;
        } else if (arr[i] === arr[i+1]-1) {
          continue;
        } else return false;
      }
      return true;
    }
    function isDecrementing(num) {
      if (num < 100) return false; 
      let arr = num.toString().split('').map(e=>Number(e))
      for (let i=0;i<arr.length-1;i++) {
        if (arr[i] === arr[i+1]+1) {
          continue;
        } else return false;
      }
      return true;
    }
    if (number < 98) { // 2 digit numbers are boring, but 98 and 99 approach an interesting number.
      return 0;
    } else if (trailingZeros(number) ||
       isPalindrome(number) ||
       isIncrementing(number) ||
       isDecrementing(number) ||
       awesomePhrases.includes(number)) {
      return 2;
    } else if (trailingZeros(number+1) ||
       trailingZeros(number+2) ||
       isPalindrome(number+1) ||
       isPalindrome(number+2) ||
       isIncrementing(number+1) ||
       isIncrementing(number+2) ||
       isDecrementing(number+1) ||
       isDecrementing(number+2) ||
       awesomePhrases.includes(number+1) ||
       awesomePhrases.includes(number+2)) {
      return 1;
    } else return 0;
  }
  //if (any of these functions return true) return 2 because it is an interesting number;
  //if (any of these functions return true on number+1 or number+2) return 1 because it is close to an interesting number;
  //else return 0