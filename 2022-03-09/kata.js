// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let arr = str.split(/-|_/)
    return arr.map((word, index) => {
      if (index > 0) {
        word = word[0].toUpperCase() + word.substring(1)
        return word
        } else return word
    }).join('')
  }