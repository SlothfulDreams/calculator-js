const display = document.querySelector(".display");
let num = "";
const numberStack = ["0"];
const operations = ["/", "-", "+", "*"];

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.className == "digit") {
      if (numberStack.at(-1) === "0") {
        display.textContent = e.target.textContent;
        numberStack.pop();
        num = display.textContent;
      } else if (operations.includes(numberStack.at(-1))) {
        num += e.target.textContent;
        display.textContent = num;
      } else {
        display.textContent += e.target.textContent;
        num = display.textContent;
      }
    }

    if (e.target.className == "operator") {
      if (numberStack.length == 2) {
        numberStack.push(num);
        num = "";
        console.log(numberStack);
      } else if (operations.includes(numberStack.at(-1))) {
        display.textContent = NaN;
        numberStack.length = 0;
      } else {
        numberStack.push(num);
        numberStack.push(e.target.textContent);
        console.log(numberStack, "pushing");
        num = "";
      }
    }

    if (e.target.className == "clear") {
      num = "";
      numberStack.length = 0;
      display.textContent = 0;
      numberStack.push("0");
    }

    if (e.target.className == "equals") {
      switch (numberStack.at(-2)) {
        case "/":
          console.log(operate(numberStack.at(0), numberStack.at(-1), divide));
          console.log("Divide");
          break;

        case "*":
          console.log(operate(numberStack.at(0), numberStack.at(-1), multiply));
          console.log("Mutiply");
          break;

        case "+":
          console.log(operate(numberStack.at(0), numberStack.at(-1), add));
          console.log("Add");
          break;

        case "-":
          console.log(operate(numberStack.at(0), numberStack.at(-1), subtract));
          console.log("Subtract");
          break;
      }
    }
  });
};

// Operations
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return (num1 / num2).toString().slice(0, 13);
};

const operate = (num1, num2, operations) => {
  return operations(num1, num2);
};

addNumOperation();
