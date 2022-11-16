const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function(arr) {

	let total = 0;

  arr.forEach(element => {
    total += element;
  });

  return total;
};

const multiply = function(arr) {

  let total = 1;
  arr.forEach(element => {
    total *= element;
  });

  return total;
};

const power = function(number, exponent) {
  return Math.pow(number, exponent);
};

const factorial = function(num) {

  total = 1;

  for (num; num > 1; num--) {
    total *= num;
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
