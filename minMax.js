// https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1
const arr = [0,-1,-100,8, 12, 10, 6, 15];

let min = Infinity;
let max = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
  console.log('min: ' + min, max);
}
