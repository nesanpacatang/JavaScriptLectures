// Get the necessary elements from the HTML DOM
const form = document.querySelector("form");
const itemList = document.querySelector(".item-list");
const clearBtn = document.querySelector(".clear-btn");
const filter = document.querySelector("#filter");
const itemInput = document.querySelector("#item-input");

// Load items from localStorage on page load
document.addEventListener("DOMContentLoaded", loadItemsFromStorage);

// Add item to the list
form.addEventListener("submit", addItem);

// Remove item from the list
itemList.addEventListener("click", removeItem);

// Clear all items from the list
clearBtn.addEventListener("click", clearItems);

// Filter the items
filter.addEventListener("keyup", filterItems);

// Edit item in the list
itemList.addEventListener("click", editItem);

// Function to add item to the list
function addItem(e) {
  e.preventDefault();
  // Get the input value
  const newItem = itemInput.value.trim();
  if (newItem !== "") {
    // Create a new li element
    const li = document.createElement("li");
    li.className = "list-item";
    li.appendChild(document.createTextNode(newItem));
    // Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    // Add li to the ul
    itemList.appendChild(li);
    // Save to localStorage
    saveItemToStorage(newItem);
    // Clear the input field
    itemInput.value = "";
  }
}

// Function to remove item from the list
function removeItem(e) {
  if (e.target.classList.contains("delete-btn")) {
    if (confirm("Are you sure you want to remove this item?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
      // Remove from localStorage
      removeItemFromStorage(li.textContent);
    }
  }
}

// Function to clear all items from the list
function clearItems() {
  if (confirm("Are you sure you want to clear all items?")) {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    // Clear localStorage
    localStorage.clear();
  }
}

// Function to filter the items
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll(".list-item");
  items.forEach(function (item) {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Function to edit item in the list
function editItem(e) {
  if (e.target.classList.contains("list-item")) {
    // Put item in edit mode
    const li = e.target;
    const itemText = li.textContent;
    item.value = itemText;
    // Remove the li from the list
    itemList.removeChild(li);
    // Remove from localStorage
    removeItemFromStorage(itemText);
  }
}

// Function to save item to localStorage
function saveItemToStorage(item) {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
}

// Function to load items from localStorage
function loadItemsFromStorage() {
  let items;
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  items.forEach(function (item) {});
  // Create a new
}
