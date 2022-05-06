const $buttonsNumbers = document.querySelectorAll(
  ".calculator__buttons--number"
);
const $buttonsOperator = document.querySelectorAll(
  ".calculator--button--operator"
);
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator--button--result");
const $clean = document.querySelector(".clean");

let calculate = "";
let n1 = null;
let n2 = null;
let operation = null;

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
    if (n1 === null) {
      n1 = Number($button.textContent);
    } else {
      n2 = Number($button.textContent);
    }
  });
});

$buttonsOperator.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
    if (operation === null) {
      operation = $button.textContent;
    }
  });
});

$buttonResult.addEventListener("click", function () {
  // calculate = calculate.replaceAll("x", "*");
  // calculate = calculate.replaceAll("÷", "/");
  // $result.textContent = eval(calculate);
  let result = null;
  if (operation.includes("+")) {
    result = n1 + n2;
  }
  if (operation.includes("-")) {
    result = n1 - n2;
  }
  if (operation.includes("x")) {
    result = n1 * n2;
  }
  if (operation.includes("÷")) {
    result = n1 / n2;
  }
  if (operation.includes("%")) {
    result = n1 % n2;
  }
  $result.textContent = result;
});

$clean.addEventListener("click", function () {
  $inputGetNumbers.value = "";
  $result.textContent = "";
  calculate = "";
  n1 = null;
  n2 = null;
});
