
// Rot13
// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let pattern = new RegExp(/[n-z]/i) 
    let otherPattern = new RegExp(/[a-m]/i) 
    let newMessage = ""
    for (let i=0;i<message.length;i++) {
      if (pattern.test(message[i])) {
        newMessage += String.fromCharCode(message.charCodeAt(i) - 13)
      } else if (otherPattern.test(message[i])) {
        newMessage += String.fromCharCode(message.charCodeAt(i) + 13)
      } else {
        newMessage += message[i]
      }
    }
    return newMessage
  }
  //charcodeat
  //fromcharcode
  //capital letters: 65-90 lowercase: 97-122
  //let pattern = new regexp(/[n-z]/gi) if pattern.test(char) newcharcode = charcode - 13 else newcharcode = charcode + 13