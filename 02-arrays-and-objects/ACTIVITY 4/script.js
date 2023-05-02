let x;
// Step 1
const library = {
  title: "Travel",
  author: "JK Rowling",
  status: {
    own: true,
    reading: false,
    read: false,
  },
};
console.log(library);

// Step 2
x = library.status.read;
x = library.status["read"] = true;

console.log(x);

// Step 3
// Destructuring
const { title } = library;
console.log(title);

// rename the title to firstbook
const {
  title: firstbook,
  author,
  status: { object },
} = library;

console.log(firstbook);

// Step 4

const str = JSON.stringify(library);
console.log(str);
