const $buttonsNumbers = document.querySelectorAll(
  ".calculator__buttons--number"
);
const $buttonsOperator = document.querySelectorAll(
  ".calculator--button--operator"
);
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $buttonResult = document.querySelector(".calculator--button--result");

let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener("click", function () {
    // alert(`clicado: ${$button.textContent}`);
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$buttonsOperator.forEach(function ($button) {
  $button.addEventListener("click", function () {
    // alert(`clicado: ${$button.textContent}`);
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$buttonResult.addEventListener("click", function () {
  $result.textContent = eval(calculate);
});

