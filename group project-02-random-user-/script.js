const btn = document.querySelector("button");

function generateUser() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      const output = document.querySelector(".space-y-3");
      const nameOutput = output.children[0];
      const emailOutput = output.children[1];
      const phoneOutput = output.children[2];
      const residenceOutput = output.children[3];
      const ageOutput = output.children[4];
      const genderOutput = document.body;
      let imageOutput = document.querySelector("img");
      let user = data.results[0];
      let name = `${user.name.first} ${user.name.last}`;
      let email = `${user.email}`;
      let phone = `${user.phone}`;
      let residence = `${user.location.city}, ${user.location.country}`;
      let age = `${user.dob.age}`;
      let image = `"${user.picture.large}"`;
      nameOutput.innerHTML = `<span class="font-bold">Name: </span> ${name}`;
      emailOutput.innerHTML = `<span class="font-bold">Email: </span> ${email}`;
      phoneOutput.innerHTML = `<span class="font-bold">Phone: </span> ${phone}`;
      residenceOutput.innerHTML = `<span class="font-bold">Location: </span> ${residence}`;
      ageOutput.innerHTML = `<span class="font-bold">Age: </span> ${age}`;
      imageOutput.outerHTML = `<img class="w-48 h-48 rounded-full mr-8" src=${image}>`;
      console.log(image);
      let gender = `${user.gender}`;

      if (gender != "female") {
        genderOutput.style.background = `#41c3ea`;
      } else {
        genderOutput.style.background = ``;
      }
    });
}

btn.addEventListener("click", generateUser);
