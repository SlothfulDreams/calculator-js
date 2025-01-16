const display = document.querySelector(".display");
let x = "";
let operator = "";
let y = "";
let resetDisplay = true;

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

const operate = (num1, num2, calc) => {
  return calc(num1, num2);
};

document.addEventListener("click", (e) => {
  if (e.target.className == "digit") {
    if (resetDisplay) {
      display.textContent = e.target.textContent;
      resetDisplay = false;
      if (operator) {
        y = display.textContent;
      } else {
        x = display.textContent;
      }
    } else {
      display.textContent += e.target.textContent;
      if (operator) {
        y += e.target.textContent;
      } else {
        x += e.target.textContent;
      }
    }
  } else if (e.target.className == "operator" && x && !y) {
    operator = e.target.textContent;
    resetDisplay = true;
  } else if (x && operator && y && e.target.className == "equals") {
    display.textContent = switchOperator(operator);
    resetDisplay = true;
    x = display.textContent;
  } else if (e.target.className == "operator" && x && y) {
    display.textContent = switchOperator(operator);
    x = display.textContent;
    operator = e.target.textContent;
    y = "";
    resetDisplay = true;
  }
  if (e.target.className == "clear") {
    x = "";
    y = "";
    operator = "";
    resetDisplay = true;
    display.textContent = 0;
  }
});

function switchOperator(operator) {
  const num1 = Number(x);
  const num2 = Number(y);

  switch (operator) {
    case "/":
      return operate(num1, num2, divide);
    case "*":
      return operate(num1, num2, multiply);
    case "+":
      return operate(num1, num2, add);
    case "-":
      return operate(num1, num2, subtract);
  }
}
