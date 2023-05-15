// const list = document.querySelector("#todo-list");
// const input = document.querySelector("#title");
// const btn = document.querySelector("button");

// // Get post
// function getPost() {
//   fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then((res) => res.json())
//     .then((data) => {
//       for (i = 0; i < 10; i++) {
//         const div = document.createElement("div");
//         div.innerHTML = `${data[i].title}`;
//         list.appendChild(div);
//       }
//     });
// }
// getPost();

// // // add post

// function createPost({ title }) {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       token: "abc123", //fake token
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data)); //return of the promise
// }

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (input.value == "") {
//     alert("Please input your entry");
//     return;
//   }
//   createPost({ title: `${input.value}` });
//   const div = document.createElement("div");
//   div.innerHTML = `${input.value}`;
//   list.appendChild(div);
//   input.value = "";
// });

// function remove(e) {
//   if (e.target == list) {
//   } else e.target.remove();
// }
// function done(e) {
//   if (e.target !== list) {
//     if (e.target.className !== "done") {
//       e.target.className = "done";
//       console.log(e);
//     } else {
//       e.target.className = "";
//     }
//   }
// }

// function createPost({ title }) {
//   fetch("https://jsonplaceholder.typicode.com/posts/", {
//     method: "DELETE",
//     body: JSON.stringify({
//       title,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       token: "abc123", //fake token
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data)); //return of the promise
// }
// list.addEventListener("dblclick", remove);
// list.addEventListener("click", done);

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// // Event listener for form submission
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the input value
  const titleInput = document.getElementById("title");
  const title = titleInput.value;

  // Create a new todo object
  const todo = {
    title: title,
    completed: false,
  };

  // //   // Make a POST request to create the todo
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => {
      // Display the title of the created post
      const newTodo = document.createElement("div");
      newTodo.textContent = data.title;

      // Double-click event listener for deleting todo
      newTodo.addEventListener("dblclick", () => {
        // Remove the todo from the DOM
        todoList.removeChild(newTodo);
      });

      todoList.appendChild(newTodo);

      // Reset the input value
      titleInput.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
//https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos?_limit=10

//#####################################
//outputting it to the console
// const apiUrl = "https://jsonplaceholder.typicode.com/todos";

// const getTodos = () => {
//   fetch(apiUrl + "?_limit=5")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// getTodos();

//#####################################
//displaying the items at the DOM
//
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

const getTodos = () => {
  fetch(apiUrl + "?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(todo.title));

        document.getElementById("todo-list").appendChild(div);
      });
    });
};

getTodos();

//
//#####################################
// to cater the completed activity by adding the class done
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//#####################################
// putting attributes for each task (ID)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => {
//         const div = document.createElement('div');
//         div.appendChild(document.createTextNode(todo.title));

//         div.setAttribute('data-id', todo.id);

//         if (todo.completed) {
//           div.classList.add('done');
//         }

//         document.getElementById('todo-list').appendChild(div);
//       });
//     });
// };

// getTodos();
//

//#####################################
//addTodoToDOM
//we can reuse the function (DRY)
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// getTodos();

//
//#####################################
//createToDo
// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// const getTodos = () => {
//   fetch(apiUrl + '?_limit=5')
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute('data-id', todo.id);

//   if (todo.completed) {
//     div.classList.add('done');
//   }

//   document.getElementById('todo-list').appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();
//   console.log(e.target.firstElementChild.value);
//   const newTodo = { title: e.target.firstElementChild.value, completed: false };

//   fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(newTodo),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
//   console.log(e.target.firstElementChild.value);
// };

// const init = () => {
//   document.addEventListener('DOMContentLoaded', getTodos);
//   document.querySelector('#todo-form').addEventListener('submit', createTodo);
// };

// init();
//
//#####################################
//
// const apiUrl = "https://jsonplaceholder.typicode.com/todos";

// const getTodos = () => {
//   fetch(apiUrl + "?_limit=5")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((todo) => addTodoToDOM(todo));
//     });
// };

// const addTodoToDOM = (todo) => {
//   const div = document.createElement("div");
//   div.classList.add("todo");
//   div.appendChild(document.createTextNode(todo.title));
//   div.setAttribute("data-id", todo.id);

//   if (todo.completed) {
//     div.classList.add("done");
//   }

//   document.getElementById("todo-list").appendChild(div);
// };

// const createTodo = (e) => {
//   e.preventDefault();
//   //   console.log(e.target.firstElementChild.value);
//   const newTodo = { title: e.target.firstElementChild.value, completed: false };

//   fetch(apiUrl, {
//     method: "POST",
//     body: JSON.stringify(newTodo),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => addTodoToDOM(data));
//   //   console.log(e.target.firstElementChild.value);
// };

// const toggleCompleted = (e) => {
//   if (e.target.classList.contains("todo")) {
//     e.target.classList.toggle("done");
//     // console.log(e.target.dataset.id);
//     updateTodo(e.target.dataset.id, e.target.classList.contains("done"));
//   }
// };

// const updateTodo = (id, completed) => {
//   fetch(`${apiUrl}/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({ completed }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// };

// const deleteTodo = (e) => {
//   if (e.target.classList.contains("todo")) {
//     // console.log('delete');
//     const id = e.target.dataset.id;

//     fetch(`${apiUrl}/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then(() => e.target.remove());
//   }
// };

// const init = () => {
//   document.addEventListener("DOMContentLoaded", getTodos);
//   document.querySelector("#todo-form").addEventListener("submit", createTodo);
//   document
//     .querySelector("#todo-list")
//     .addEventListener("click", toggleCompleted);
//   document.querySelector("#todo-list").addEventListener("dblclick", deleteTodo);
// };

// init();
//
//#####################################
//#####################################
//#####################################
