/*Given an array and a number N. Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())*/

function rotate(arr, number){
  if(number < 0){
    number = number + arr.length;
  }
  while(number){
    arr[arr.length] = arr[0];
    arr.shift();
    --number;
    return rotate(arr, number)
  }
  return arr;
}

console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));