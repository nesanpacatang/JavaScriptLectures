// for (let i = 0; i <= 100; i++) {
//   let j = i % 3;
//   let k = i % 5;
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else {
//       console.log(i);
//     }
//   }

// for loop

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// while loop

let j = 1;
while (j <= 100) {
  if (j % 5 === 0 && j % 3 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("Fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }
  j++;
}

// # FizzBuzz Challenge

// **Instructions:**

// - Print/log the numbers from 1 to 100
// - For **multiples of three** print "Fizz" instead of the number
// - For **multiples of five** print "Buzz"
// - For numbers which are **multiples of both three and five** print "FizzBuzz".

// **Hints:**

// Write a loop and output/log something for each iteration. You also know how to check for a condition with "if/else/else if". You also know how to get a remainder of a number using the modulus operator (%). This is all you need to know to complete this challenge. Good luck!
