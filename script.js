const display = document.querySelector(".display");
let numberStack = [];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      display.textContent = e.target.textContent;
      numberStack.push(e.target.textContent);
      console.log(numberStack);
    }
  });
};

const add = (num1, nums2) => {
  return Number(num1) + Number(num2);
};

const subtract = (num1, nums2) => {
  return Number(num1) - Number(num2);
};

const multiply = (num1, nums2) => {
  return Number(num1) * Number(num2);
};

const divide = (num1, nums2) => {
  return Number(num1) / Number(num2);
};

const operate = (num1, num2) => {
  // Takes two numbers then calls one of the above functions
};

const clear = () => {
  numberStack.length = 0;
};

addNumOperation();
