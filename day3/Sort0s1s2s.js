const arr = [2, 2, 1, 0, 1, 0, 1, 2, 0, 0];

let l = 0;
let m = 0;
let h = arr.length - 1;

// douch algorithem method
while (m <= h) {
  if (arr[m] == 0) {
    [arr[l], arr[m]] = [arr[m], arr[l]];
    l++;
    m++;
  } else if (arr[m] == 1) {
    m++;
  } else if (arr[m] == 2) {
    [arr[m], arr[h]] = [arr[h], arr[m]];
    h--;
  }
}
console.log(arr);
