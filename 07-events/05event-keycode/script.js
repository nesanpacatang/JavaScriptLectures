// https://www.toptal.com/developers/keycode

// https://www.toptal.com/developers/keycode

//Method1
// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//         <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.keyCode}
//             <small>e.key</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
//       `;
// });

//Method 2
function showKeyCodes(e) {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  //im going to create map
  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  //   console.log(keyCodes);
  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText); //key
    div.appendChild(valueText); //actual value
    div.appendChild(small); //append the small element into the div element

    // the div into the DOM
    insert.appendChild(div);
  }
}

window.addEventListener("keydown", showKeyCodes);

// window.addEventListener("keydown", (e) => {
//   const insert = document.getElementById("insert");

//   insert.innerHTML = `
// <div class="key">
//  ${e.key === " " ? "space" : e.key}
//  <small>e.key</small>
// </div>

// <div class="key">
//  ${e.keyCode}
//  <small>e.key</small>
// </div>

// <div class="key">
//   ${e.code}
//   <small>e.code</small>
// </div>
//      `;
// });

// const insert = document.getElementById("#insert");

// document.addEventListener("keydown", insertKey);
// document.addEventListener("keydown", insertKeyCode);
// document.addEventListener("keydown", insertCode);

// function insertKey(e) {
//   const insertEkey = insert.firstElementChild;
//   insertEkey.innerText = e.key;
//   const small = document.createElement("small");
//   small.appendChild(document.createTextNode("e.key"));
//   insertEKey.appendChild(small);
// }

// function insertKeyCode(e) {
//   const insertEkeyCode = insert.child[1];
//   insertEkeyCode.innerText = e.keyCode;
//   const small = document.createElement("small");
//   small.appendChild(document.createTextNode("e.keyCode"));
//   insertEKeyCode.appendChild(small);
// }

// function insertCode(e) {
//   const insertEkey = insert.child[2];
//   insertEkey.innerText = e.code;
//   const small = document.createElement("small");
//   small.appendChild(document.createTextNode("e.code"));
//   insertECode.appendChild(small);
// }
