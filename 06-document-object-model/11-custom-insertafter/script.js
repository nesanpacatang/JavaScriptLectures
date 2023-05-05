function insertBefore() {
  //FOO

  const ul = document.querySelector("ul");

  const li = document.createElement("li");
  li.textContent = "Insert Me After!";

  const firstItem = document.querySelector("li:first-child");

  ul.insertBefore(li, firstItem);
}

insertBefore();

// // New element to insert
// const li = document.createElement("li");
// li.textContent = "Insert Me After!";

// // Existing element to insert after
// const firstItem = document.querySelector("li:first-child");

// // Our custom function
// insertAfter(li, firstItem);
