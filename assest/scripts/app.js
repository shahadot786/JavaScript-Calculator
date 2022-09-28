// find all id's
let calcTable = document.getElementById('calcTable');
let result = document.getElementById('result');
let answers;

//all functions
//display the numbers
function displayNumber(value) {
  //check answer is empty or not
  if (answers == '') {
    result.value += value;
  } else {
    answers = '';
    result.value = '';
    result.value += value;
  }
}
//calculate the equation
function calculation() {
  let resultValue = result.value;
  //check user input
  let isNotANumber = parseInt(resultValue);
  if (isNaN(isNotANumber)) {
    alert(
      `(${resultValue}) is not a valid input!! Please enter number for calculation.`
    );
    result.value = '';
  } else {
    answers = eval(resultValue); //javascript built-in math function
    result.value += ` = ${answers}`;
  }
}
// Function that clear the display
function clearInput() {
  result.value = '';
}
