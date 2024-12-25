const display = document.querySelector(".display");
let numberStack = [];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      display.textContent = e.target.textContent;
    }
  });
};

addNumOperation();
