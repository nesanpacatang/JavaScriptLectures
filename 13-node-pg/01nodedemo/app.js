// console.log("Hello from Node.js");
async function getUser() {
  const response = await fetch("https://api.github.com/users/nesanpacatang");
  const data = await response.json();
  console.log(data);
}

getUser();
