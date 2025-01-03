const display = document.querySelector(".display");
let num = "";
const numberStack = [];
const operations = ["/", "-", "+", "*"];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.className == "digit") {
      if (numberStack.length < 13) {
        if (num.length == 0) {
          num += e.target.textContent;
          display.textContent = num;
          numberStack.push(e.target.textContent);
          console.log(numberStack);
        } else {
          const lastDigit = numberStack.pop();
          const inputNumber = e.target.textContent;
          display.textContent = lastDigit + inputNumber;
          numberStack.push(lastDigit + inputNumber);
          console.log(numberStack);
        }
      }
    }

    if (e.target.className == "operator") {
      num = "";
      if (operations.includes(numberStack.at(-1))) {
        display.textContent = NaN;
        numberStack.length = 0;
        console.log(numberStack, "bnasdsadas");
      } else {
        numberStack.push(e.target.textContent);
        console.log(numberStack, "pushing");
      }
    }

    if (e.target.className == "clear") {
      num = "";
      numberStack.length = 0;
      display.textContent = 0;
    }

    if (e.target.className == "equals") {
      // Calculate everything
    }
  });
};

const add = (num1, nums2) => {
  return num1 + num2;
};

const subtract = (num1, nums2) => {
  return num1 - num2;
};

const multiply = (num1, nums2) => {
  return num1 * num2;
};

const divide = (num1, nums2) => {
  return num1 / num2;
};

const operate = (num1, num2, operation) => {
  // Takes two s then calls one of the above functions
};

addNumOperation();
