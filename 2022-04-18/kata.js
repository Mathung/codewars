// Recover a secret string from random triplets - 4 Kyu

// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) {
    let letters = [];
    let secret = '';
    //Create an array of each letter that occurs in the final word
    triplets.forEach(e=> {
      e.forEach(char => {
        if (!letters.includes(char)) {
          letters.push(char);
        }
      })
    })
    
    while (letters.length) {
      //Score each letter by index
      let scores = triplets.reduce((acc, next) => {
        next.forEach((e, i)=> {
          acc[e] ? acc[e] += i : acc[e] = i;
        })
        return acc;
      }, {})
      
      //find the letter that only appears in the zeroth index
      for (let letter in scores) {
        if (scores[letter] === 0) {
          secret += letter; //add that letter to the final string
          letters.splice(letters.indexOf(letter), 1); //remove the letter from the array of letters remaining
          triplets.forEach((e, i)=> {
            if (triplets[i].includes(letter)) {
              triplets[i].splice(triplets[i].indexOf(letter), 1) //remove that letter from the original triplets
            }
          })
        }
      }
      //Iterate until every single letter is found
    }
    return secret;
  }