// Human Readable Time: 5 kyu

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    function addDigit(num) {
      if (num.length == 1) {
      num = 0 + num
      }
      return num
    }
    let s = addDigit(String(seconds % 60))
    let totalMin = Math.floor(seconds/60)
    let m = addDigit(String(totalMin % 60))
    let h = addDigit(String(Math.floor(totalMin/60)))
    
    return `${h}:${m}:${s}`
  }