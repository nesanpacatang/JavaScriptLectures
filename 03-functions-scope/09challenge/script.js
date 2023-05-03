// Challenge 1

// function getCelsius(f) {
//   return ((f - 32) * 5) / 9;
// }
// console.log(getCelsius(32));

// Bunos

// const getCelcius = (f) => ((f - 32) * 5) / 9;

// console.log(getCelcius(32));

// putting into a string
// function getCelsius(f) {
//   return ((f - 32) * 5) / 9;
// }

// console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
// const arr = [1, 2, 3, 4, 5];
// function minMax() {
//   return Math.min(...arr), Math.max(...arr);
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;// }

const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(35)} \xB0C `);

//Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
}

console.log(minMax([2, 31, 4, 5, 6]));

//Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(72, 11);
