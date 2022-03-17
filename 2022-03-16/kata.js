// Human readable duration format - 4 Kyu

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    let years = Math.floor(seconds/31536000)
    let days = Math.floor((seconds % 31536000)/86400)
    let hours = Math.floor((seconds % 86400)/3600)
    let mins = Math.floor((seconds % 3600)/60)
    let secs = seconds % 60
    
    switch(years) {
      case 1: 
        years += " year";
        break;
      case 0: 
        years = "";
        break;
      default: years += ' years' 
    }
      
    switch(days) {
      case 1: 
        days += " day";
        break;
      case 0: 
        days = "";
        break;
      default: days += ' days'
    }
      
    switch(hours) {
      case 1: 
        hours += " hour";
        break;
      case 0: 
        hours = "";
        break;
      default: hours += ' hours'
    }
      
    switch(mins) {
      case 1: 
        mins += " minute";
        break;
      case 0: 
        mins = "";
        break;
      default: mins += ' minutes'
    }
      
    switch(secs) {
      case 1: 
        secs += " second";
        break;
      case 0: 
        secs = "";
        break;
      default: secs += ' seconds'
    }
      
    let time = [years, days, hours, mins, secs]
    time = time.filter(elem => elem)
    time = time.join(', ')
    if (!time) {
      return 'now'
    } else return time.replace(/,(?!.*,)/g, " and")
  }