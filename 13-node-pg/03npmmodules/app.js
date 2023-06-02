// Instruction

// Open a new window of vscode
// run npm init in the terminal
// run npm i axios
// run npm i -D nodemon
// copy the script (package.json)
// run the output by using: npm start

const axios = require("axios");

async function getPost() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  console.log(res.data);
}

getPost();
