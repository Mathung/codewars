// Strings Mix - 4 Kyu

// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
// Note for Swift, R, PowerShell
// The prefix =: is replaced by E:

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"

function mix(s1, s2) {
    function countDuplicates(str) {
      let regex = new RegExp(/[a-z]/);
      let arr = str.split('').filter(e=>regex.test(e)).sort();
      return arr.reduce((acc, next) => {
        acc[next] ? acc[next]++ : acc[next] = 1; //if the property exists, add 1 to the value. else create the property and set the value to 2.
        return acc;//return the modified object to the next iteration
      }, {})//Accumulator starts as an empty object
    }
    
    //create objects with key:value pairs of letter:count
    let count1 = countDuplicates(s1); 
    let count2 = countDuplicates(s2); 
    let arr = []
    
    //set count to 0 for any letter that appears in one string but not the other
    for (let char in count1) {
      if (!count2[char]) {
        count2[char] = 0;
      }
    }
    for (let char in count2) {
      if (!count1[char]) {
        count1[char] = 0;
      }
      
      //Counting only occurrences > 1: push results to the array according to instructions
      if (count1[char] > count2[char] && (count1[char] > 1 || count2[char] > 1)) {
        arr.push(`1:${char.repeat(count1[char])}`);
      } else if (count1[char] === count2[char] && (count1[char] > 1 || count2[char] > 1)) {
        arr.push(`=:${char.repeat(count2[char])}`);
      } else if (count1[char] > 1 || count2[char] > 1) {
        arr.push(`2:${char.repeat(count2[char])}`);
      }
    }
    return arr.sort((a,b) => { //sort by string length first
      if (b.length === a.length) { //if the lengths are the same, sort by the first character: 1, 2, =
        if (a.codePointAt(0) === b.codePointAt(0)) {
          return a.localeCompare(b); //if the first character is the same and the length is the same, sort alphabetically
        } else return a.codePointAt(0) - b.codePointAt(0);
      } else return b.length - a.length; // sort by string length
      }).join('/') //join each element with the delimiter '/'
  }