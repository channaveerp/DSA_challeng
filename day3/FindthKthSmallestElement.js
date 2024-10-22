const arr = [11, 12, 45, 2, 10, 3, 4];
let k = 3;

// find th e kth smallest element
// by using bubble sort
function FindthNthElelemnet(arr, k) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap array
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr[k - 1];
}

console.log(FindthNthElelemnet(arr, k));
