console.log('hi');
const arr = [1, 2, 3, 4, 5, 6];
// brute force approach
// reverse array
let res = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   res.push(arr[i]);
// }
// console.log('res: ', res);
// tmc O(N) becz its iterating n elemnets
// scc O(N) becz its push its required space

// optimize solution

function swapping(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
  swapping(arr, i, j);
}
console.log('optimizeres', arr);
