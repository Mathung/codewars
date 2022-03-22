// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let arr = str.split(" ");
    let regex = new RegExp(/\W$/g)
    return arr.map((elem) => {
      if (regex.test(elem) == false) {
        return (elem.substring(1) + elem[0] + "ay")
      } else return (elem)
    }).join(" ")
  }