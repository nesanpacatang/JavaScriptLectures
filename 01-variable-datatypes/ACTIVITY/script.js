// //Creating a "string object"
// const s = new String("myString");
// x = typeof s;

// //Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt - returns the character at the specified index
// x = s.charAt(0);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(1, 7);
// x = s.slice(-11);
// x = s.slice(-11, -6);

let myString = "developer";
let myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

console.log(myNewString); // Output: "Developer"
