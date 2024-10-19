const arr = [1, -1100, 1, 2, 2, 2, 5, 4, 8];

function minMaxArra(arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}
console.log(minMaxArra(arr));
