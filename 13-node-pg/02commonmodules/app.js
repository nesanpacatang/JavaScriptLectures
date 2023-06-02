// const message = require("./utils");

// console.log(message.text);

// for capitalization
// const capitalizeWords = require("./utils");
// console.log(capitalizeWords("hello world"));

// ################## for another function

// const { capitalizeWords, makeMoney } = require("./utils");
// console.log(capitalizeWords("hello world"));
// console.log(makeMoney(100));

// adding classes:

const { capitalizeWords, makeMoney } = require("./utils");
const person = require("./person");
console.log(capitalizeWords("hello world"));
console.log(makeMoney(100));

const person1 = new person("Nesan", 18);
person1.greet();

const person2 = new person("Jay", 20);
person2.greet();
