// Function

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Error message";
  }
}

console.log(calculator(5, 2, "+")); //7
console.log(calculator(5, 2, "-")); //3
console.log(calculator(5, 2, "*")); //10
console.log(calculator(5, 2, "/")); //2.5
console.log(calculator(5, 2, "&")); //Error message

// // Nested if
// if (hour < 12) {
//     console.log('Good Morning');
//     if (hour === 6) {
//       console.log('Wake up!');
//     }
//   } else if (hour < 18) {
//     console.log('Good Afternoon');
//   } else {
//     console.log('Good night!');
//     if (hour >= 20) {
//       console.log('ZzzzzZZzzz');
//     }
//   }

// switch (month) {
//     case 1:
//       console.log('It is January');
//       break;
//     case 2:
//       console.log('It is February');
//       break;
//     case 3:
//       console.log('It is March');
//       break;
//     default:
//       console.log('It is not Jan, Feb or March');
//   }

// calculator(5, 2, "+"); // returns 7
// calculator(5, 2, "-"); // returns 3
// calculator(5, 2, "*"); // returns 10
// calculator(5, 2, "/"); // returns 2.5
// calculator(5, 2, "&"); // returns an error message
