let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// brute force solution TC o(n)
// const rev = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//   rev.push(arr[i]);
// }
// console.log('hellooo',rev);

// otimizesolution TC o(n)
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}
function optimizesolution(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
   swap(arr,i,j)
    i++;
    j--;
  }
}
optimizesolution(arr);

console.log('hellooo', arr);
