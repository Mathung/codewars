// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    let a = [Math.floor(r/16)]
    a.push(r % 16)
    a.push(Math.floor(g/16))
    a.push(g % 16)
    a.push(Math.floor(b/16))
    a.push(b % 16)
    return a.map((elem) => {
      if (elem < 10) {
        return elem.toString();
      } else if (elem == 10) {
        return 'A'
      } else if (elem == 11) {
        return 'B'
      } else if (elem == 12) {
        return 'C'
      } else if (elem == 13) {
        return 'D'
      } else if (elem == 14) {
        return 'E'
      } else if (elem == 15) {
        return 'F'
      } 
    }).join('')
  }