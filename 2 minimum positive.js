// Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

function minimalPositive(arr) {
  if(arr[0] > arr[1] && arr[1] >= 0 || arr[0] < 0){
    arr.splice(0, 1);
    return minimalPositive(arr)
  }
  if(arr[0] < arr[1] || arr[1] < 0){
    arr.splice(1, 1);
    return minimalPositive(arr);
  }
  return arr[0] >= 0 ? arr[0] : -1
}

console.log(minimalPositive([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(minimalPositive([45, -9, 15, 5, -78] ));
console.log(minimalPositive([-5, -9, -111, -1000, -7]));