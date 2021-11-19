/*Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number.
Repeat that process if needed and return the result.*/

function findDigitsSum(num) {
  if(num % 10 === num) return num;
  
  const sum = String(num).split('').reduce((acc, item) => {
    return acc + +item;
  }, 0);
  
  return findDigitsSum(sum);
  
};

console.log(findDigitsSum(98858));