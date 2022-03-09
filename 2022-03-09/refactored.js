//Convert string to camel case
//Using regular expressions
function toCamelCase(str){
    str = str.replace(/[-_]+/gi, '-')
    if (/^[-_]/g.test(str)) {
        str = str.substring(1)
    } 
    return  str.replace(/[-_]+\w/gi, function(match) {
      return match.charAt(1).toUpperCase()
    })
}