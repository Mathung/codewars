// The Hashtag Generator

// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    if (!str.trim().length)  {
      return false
    }
    function capitalizeFirstLetter(str) {
      if (str[0]) {
        return str[0].toUpperCase() + str.substring(1)
      }
    }
    
    let result = "#" + str.split(" ").map(elem => {
      return capitalizeFirstLetter(elem)
    }).join("")
    
    if (result.length > 140) {
      return false;
    } else return result
  }