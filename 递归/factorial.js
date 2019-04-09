//阶乘 
const factorial = number => {
  if (number === 1) {
    return number;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(6));
//累加
const accumulation = number => {
    if (number === 1) {
      return number;
    } else {
      return number + accumulation(number - 1);
    }
  };
  
  console.log(accumulation(6));
  