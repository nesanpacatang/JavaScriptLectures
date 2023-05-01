let x;

// Challenge 1
// const arr = [1, 2, 3, 4, 5];

// arr.push(6);
// arr.unshift(0);
// arr.reverse();

// console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr3 = [...arr1, ...arr2];
console.log(arr3);

x = arr3.splice(4, 1);
console.log(x);

console.log(arr3);
