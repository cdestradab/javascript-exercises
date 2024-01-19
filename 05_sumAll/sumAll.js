const sumAll = function(num1, num2) {
  //Catch wrong inputs as ERROR
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (typeof num1 !== 'number' || typeof num2 !== 'number' ) {
    return "ERROR";
  }

  let firstNumber;
  let secondNumber;
  //Orders the numbers by their value
  if (num2 > num1) {
    firstNumber = num1;
    secondNumber = num2;
  } else if (num1 > num2) {
    firstNumber = num2;
    secondNumber = num1;
  } else {
    return num1;
  }

  let totalSum = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    totalSum += i;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
