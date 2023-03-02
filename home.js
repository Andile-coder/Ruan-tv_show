let h1 = document.getElementById("header_1");
h1.innerHTML = "<em>I am italic</em>, i am not";
let container = document.getElementById("container");
//   querySelectors
let pTag = document.querySelector("#para_1");
let pTags = document.querySelectorAll(".para");

//create tag
let readMoreBtn = document.createElement("button");
readMoreBtn.innerText = "read more";
container.appendChild(readMoreBtn);

let italic = document.createElement("em");
italic.innerText = "Italic";
pTag.appendChild(italic);
pTag.prepend(italic);

//delete
//   h1.remove();
//delete child node
//container.removeChild(pTag);

//manupulating styles
// pTag.style.color = "blue";

//addEventListner

let user = { first_name: "", last_name: "", Email: "" };

let submit_btn = document.getElementById("submit_btn");
let form = document.getElementById("form_1");
const onSubmit = (e) => {
  e.preventDefault();
  console.log("user", user);
};
readMoreBtn.addEventListener("click", () => {
  pTag.style.color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
});

form.addEventListener("submit", onSubmit);
let formInputs = document.querySelectorAll("input");
//when input changes

const updateUser = (n) => {
  if (n.target.name == "first_name") {
    user.first_name = n.target.value;
  } else if (n.target.name == "last_name") {
    user.last_name = n.target.value;
  } else if (n.target.name == "Email") {
    user.Email = n.target.value;
  }
};
formInputs.forEach((n) => n.addEventListener("change", updateUser));

//switch cases

let day = "Mondays";

switch (day) {
  case "Monday": // if day=="Monday"
    console.log("its the first day of the week");
    break;
  case "Tuesday":
    console.log("2nd day of the week.");
    break;
  default:
    console.log("no case statement");
}

//switch cases

// formInputs.forEach((n) =>
//   n.addEventListener("change", (e) => {
//     user[e.target.name] = e.target.value;
//   })
// );
