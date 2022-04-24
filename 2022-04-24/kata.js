// Pyramid Slide Down 4 kyu

// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

//    /3/
//   \7\ 4 
//  2 \4\ 6 
// 8 5 \9\ 3
// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as argument and returns its' largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.
// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// (c) This task is a lyrical version of the Problem 18 and/or Problem 67 on ProjectEuler.

function longestSlideDown (pyramid) {
  if (pyramid.length < 2) {
    return pyramid[0][0]
  } else {
    //add the bottom row of the pyramid to the one directly above it; adding the greater of the two possibilities to each value
    pyramid[pyramid.length-2].forEach((e,i) => {
      pyramid[pyramid.length-1][i] > pyramid[pyramid.length-1][i+1] ? pyramid[pyramid.length-2][i] += pyramid[pyramid.length-1][i] : pyramid[pyramid.length-2][i] += pyramid[pyramid.length-1][i+1];
    })
    pyramid.pop(); // remove the bottom row
    return longestSlideDown(pyramid) // call function recursively
  }
  
}
//Failed solution below - this solution only chooses the larger of the next two options,
//meaning if somewhere down the pyramid the smaller option leads to a larger sum it does not work

//   let distanceFromCenter = 0; //distance from the center of the pyramid
//   console.log(pyramid)
//   return pyramid.reduce((acc, next, i) => {
//     let nextCenterIndex = next.reduce((acc, next, i) => {return acc + i}, 0)/next.length
//     let nextIndexes = [Math.floor(nextCenterIndex+distanceFromCenter),Math.ceil(nextCenterIndex+distanceFromCenter)]
    
//     if (i===0) return acc + next[0];
//     if (next[nextIndexes[0]] > next[nextIndexes[1]]) {
//       distanceFromCenter -= 0.5;
//       return acc + next[nextIndexes[0]];
//     } else if (next[nextIndexes[0]] < next[nextIndexes[1]]) {
//       distanceFromCenter += 0.5;
//       return acc + next[nextIndexes[1]];
//     }
//   }, 0)