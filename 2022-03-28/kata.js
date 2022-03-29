// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(arr = [0]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (0 + arr[1])
        case "minus":
          return (0 - arr[1])
        case "mult":
          return (0 * arr[1])
        case "divide":
          return (~~(0 / arr[1]))
    }
  }
  function one(arr = [1]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (1 + arr[1])
        case "minus":
          return (1 - arr[1])
        case "mult":
          return (1 * arr[1])
        case "divide":
          return (~~(1 / arr[1]))
    }
  }
  function two(arr = [2]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (2 + arr[1])
        case "minus":
          return (2 - arr[1])
        case "mult":
          return (2 * arr[1])
        case "divide":
          return (~~(2 / arr[1]))
    }
  }
  function three(arr = [3]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (3 + arr[1])
        case "minus":
          return (3 - arr[1])
        case "mult":
          return (3 * arr[1])
        case "divide":
          return (~~(3 / arr[1]))
    }
  }
  function four(arr = [4]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (4 + arr[1])
        case "minus":
          return (4 - arr[1])
        case "mult":
          return (4 * arr[1])
        case "divide":
          return (~~(4 / arr[1]))
    }
  }
  function five(arr = [5]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (5 + arr[1])
        case "minus":
          return (5 - arr[1])
        case "mult":
          return (5 * arr[1])
        case "divide":
          return (~~(5 / arr[1]))
    }
  }
  function six(arr = [6]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (6 + arr[1])
        case "minus":
          return (6 - arr[1])
        case "mult":
          return (6 * arr[1])
        case "divide":
          return (~~(6 / arr[1]))
    }
  }
  function seven(arr = [7]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (7 + arr[1])
        case "minus":
          return (7 - arr[1])
        case "mult":
          return (7 * arr[1])
        case "divide":
          return (~~(7 / arr[1]))
    }
  }
  function eight(arr = [8]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (8 + arr[1])
        case "minus":
          return (8 - arr[1])
        case "mult":
          return (8 * arr[1])
        case "divide":
          return (~~(8 / arr[1]))
    }
  }
  function nine(arr = [9]) {
    if (arr.length == 1) return arr;
    switch (arr[0]) {
        case "plus": 
          return (9 + arr[1])
        case "minus":
          return (9 - arr[1])
        case "mult":
          return (9 * arr[1])
        case "divide":
          return (~~(9 / arr[1]))
    }
  }
  
  function plus(arr) {
    return ["plus", arr[0]]
  }
  function minus(arr) {
    return ["minus", arr[0]]
  }
  function times(arr) {
    return ["mult", arr[0]]
  }
  function dividedBy(arr) {
    return ["divide", arr[0]]
    
  }
  
  //number functions need to take in a parameter with a default value of the number
  //if the parameter is default value, return [number]
  //if the parameter is an array, check array[0] for operation, and switch cases for each operation: ~~number (operation) array[1]