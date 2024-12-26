const display = document.querySelector(".display");
let numberStack = [];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      if (numberStack.length < 0) {
        display.textContent = e.target.textContent;
        numberStack.push(e.target.textContent);
      }
    }
  });
};

const add = () => {
  // adds the numbers
};

const substract = () => {
  // substracts
};

const division = () => {
  // Division
};

const multiply = () => {
  // multiply
};

const operate = () => {
  // Takes two numbers then calls one of the above functions
};
addNumOperation();
