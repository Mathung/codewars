// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let start = 0;
    if (url.includes("www.")) {
      start = url.indexOf(".") + 1
    } else if (url.includes("//")) {
      start = url.indexOf("//") + 2
    }
    let end = url.indexOf(".", start)
    return url.substring(start, end)
  }
  