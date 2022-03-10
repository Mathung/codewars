function validParentheses(parens) {
    while (/\(\)/.test(parens)) {
      parens = parens.replace(/\(\)/, '')
    }
    if (parens.length > 0) 
      return false
    else return true
  }