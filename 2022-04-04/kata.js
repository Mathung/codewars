
// Highest Scoring Word

// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let words = x.split(" ");
    function checkScore(word) {
      let letters = word.split("");
      return letters.reduce((acc, current) => {
        return acc + (current.charCodeAt(0) - 96)
      }, 0)
    }
    return words.reduce((acc, current) => {
      return (checkScore(current) > checkScore(acc)) ? current : acc
    })
  }
  