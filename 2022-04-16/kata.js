// Scramblies 5 Kyu

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let charCounts = arr1.reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      return acc;
    }, {})
    return arr2.every(c=> {
      charCounts[c] = charCounts[c] - 1;
      if (charCounts[c] >= 0) return true;
    })
  }
  //This took four tries because each of my other solutions timed out on very long test cases