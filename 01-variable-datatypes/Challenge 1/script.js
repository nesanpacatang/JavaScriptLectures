const myString = "developer";
// myNewString = myString.toUpperCase().charAt() + myString.slice(-8);
// // myNewString = myNewString + "eveloper";
// console.log(myNewString);

myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);
