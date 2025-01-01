const display = document.querySelector(".display");
let num = "";

const addNumOperation = () => {
  document.addEventListener("click", (e) => {
    if (e.target.className == "digit") {
      if (num.length < 13) {
        num += e.target.textContent;
        display.textContent = num;
      }
    }
    if (e.target.className == "operation") {
      num = "";
    }

    if (e.target.className == "clear") {
      num = "";
      display.textContent = 0;
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

// Wait for user to hit a different operation that is not a number
// Store the number after that operation then
// when user hits = total tyhe operation up
