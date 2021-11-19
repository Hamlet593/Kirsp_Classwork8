/*Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.*/

function violatedOrder(arr){
  if(arr[arr.length - 1] >= arr[arr.length - 2]){
    arr.pop();
    return violatedOrder(arr)
  }
  else{
    return arr.length === 1 ? -1 : arr.indexOf(arr[arr.length - 1]);
  }
}

console.log(violatedOrder([2, 12, 15, 48, 64] ))
console.log(violatedOrder([-9, -4, -4, 3, 12, 4, 5]))