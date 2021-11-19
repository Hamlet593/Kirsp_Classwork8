/*Given an array. Write a recursive function that removes the first element and returns the given array. (without usingarr.shift())*/

function removeFirst(arr) {
  let index = 0;
  return function innerRemove(){
    if(arr.length === 1) {
      return []
    }
    arr[index] = arr[index + 1];
    index++;
    if(index !== arr.length - 1){
      return innerRemove();
    }
    arr.pop();
    return arr;
  }
}
const call1 = removeFirst([6, 78, 'n', 0, 1]);
const call2 = removeFirst([5]);
const call3 = removeFirst([]);

console.log(call1())
console.log(call2())
console.log(call3())