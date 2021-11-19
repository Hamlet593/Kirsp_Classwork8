/*Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).*/

const flattenArr = arr => {
  let res = arr.reduce((acc, item) => {
    Array.isArray(item) ? acc = [...acc, ...item] : acc.push(item)
    return acc;
  }, []);
  if(JSON.stringify(res) === JSON.stringify(arr)){
    return res;
  }
  else{
    return flattenArr(res)
  }
};

console.log(flattenArr([1, [3, 4, [1, 2]], 10]));
console.log(flattenArr([14, [1, [[[3, []]], 1], 0]]));