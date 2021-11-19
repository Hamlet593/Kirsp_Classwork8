/*Write a recursive function to determine whether all digits of the number are odd or not.*/

function addOrNot(number){
  let eachDigit = number % 10;
  if(eachDigit % 2 === 0) return false;
  if(number < 10 && eachDigit % 2 !== 0) return true;
  else return addOrNot(Math.floor(number / 10))
}

console.log(addOrNot(4211133))
console.log(addOrNot(7791))
console.log(addOrNot(5))