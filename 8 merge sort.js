/*Implement merge sort*/

function merge(left, right){
  let sortedArray = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      sortedArray.push(left.shift());
    }
    else{
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([5, 4, 3, 2, 1, 9]))