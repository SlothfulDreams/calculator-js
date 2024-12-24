const digit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".buttons");

let numberStack = [];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      console.log(e.target);
    }
  });
};

addNumOperation();
