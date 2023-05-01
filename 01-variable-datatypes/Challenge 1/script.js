let x;
let y;

x = Math.floor(Math.random() * 100 + 1);
y = Math.floor(Math.random() * 50 + 1);

// sum
const sumOutput = `${x} + ${y} = ${x + y}`;
console.log(sumOutput);

// difference

const differenceOutput = `${x} - ${y} = ${x - y}`;
console.log(differenceOutput);

// product
const productOutput = `${x} * ${y} = ${x * y}`;
console.log(productOutput);

//quotient

const quotientOutput = `${x} / ${y} = ${x / y}`;
console.log(quotientOutput);

//rm

const rmOutput = `${x} % ${y} = ${x % y}`;
console.log(rmOutput);

// console.log(sumOutput); // 31 + 15 = 46
// console.log(differenceOutput); // 31 - 15 = 16
// console.log(productOutput); // 31 * 15 = 465
// console.log(quotientOutput); // 31 / 15 = 2.066666666666667
// console.log(rmOutput); // 31 % 15 = 1
