// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function validParentheses(parens) {
    let parenArray = parens.split('')
    
    function countParensLeft(arrayToCount) {
      let count = 0
      arrayToCount.forEach((paren) => {
      if (paren == '(') count++ 
      })
      return count
    }
    function countParensRight(arrayToCount) {
      let count = 0
      arrayToCount.forEach((paren) => {
      if (paren == ')') count++
      })
      return count
    }
    
    if (parenArray.length % 2 == 1) {
      return false
    }
    let firstHalf = parenArray.slice(0, parenArray.length / 2)
    
    let firstHalfLeft = countParensLeft(firstHalf)
    let firstHalfRight = countParensRight(firstHalf)
    let left = countParensLeft(parenArray)
    let right = countParensRight(parenArray)
    
    if (firstHalfRight > firstHalfLeft) 
      return false
    else if (left == right && parenArray[0] == '(' && parenArray[parenArray.length - 1] == ')') 
      return true
    else if (parenArray == '')
      return true
    else return false
  }