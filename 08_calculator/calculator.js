const add = function(num1,num2) {
  return parseInt(num1) + parseInt(num2);
};

const subtract = function(num1,num2) {
  return parseInt(num1) - parseInt(num2);
	
};

const sum = function(array) {

  return array.reduce((total,current) => total + current, 0);
  
  }

;

const multiply = function(...args) {
    let product = 1;
    for (i = 0; i < args.length; i++){
      product *= args[i];
    }
    return product;
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(n) {
  if (n === 0) return 1;
    let product = 1;
  for (let i = n; i > 0; i--){
    product *= i;
  } return product;
	
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
