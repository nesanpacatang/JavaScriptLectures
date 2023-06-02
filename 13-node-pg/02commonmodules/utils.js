// const message = {
//   id: 1,
//   text: "hello world from common modules !",
// };

// module.exports = message;

// other way

// module.exports = {
//   id: 1,
//   text: "hello world from common modules!",
// };

// function capitalizeWords(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word) => word[0].toUpperCase() + word.substr(1))
//     .join(" ");
// }

// module.exports = capitalizeWords;

///////////////////////////////
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

function makeMoney(amount) {
  return `Php${amount}`;
}

module.exports = { capitalizeWords, makeMoney };
