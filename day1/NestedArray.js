const nestedArr = [1, 2, 3, [4, 5, 6], 7, 8, 9, []];
console.log('new nested', nestedArr.length);
console.log('hiiii');

// brute force approach

function flattenArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // check its arry or single element
    if (Array.isArray(arr[i])) {
      console.log(arr[i]);
      res = res.concat(flattenArray(arr[i]));
    } else {
      // if its not array directly pushing into res
      res.push(arr[i]);
    }
  }
  return res;
  
  
}

let ddd = flattenArray(nestedArr);
console.log('ddddddd', ddd);
