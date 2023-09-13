const num = [0, 2, 1, 2, 2, 2, 0, 1, 0, 1, 0, 0, 0, 2];

let l = 0;
let h = num.length - 1;
let i = 0;

while (i <= h) {
  if (num[i] === 0) {
    [num[i], num[l]] = [num[l], num[i]];
    i++;
    l++;
  } else if (num[i] === 2) {
    [num[i], num[h]] = [num[h], num[i]];
    h--;
  }else if (num[i] === 3) {
    [num[i], num[h]] = [num[h], num[i]];
    h--;
  }
  {
    i++;
  }
}
console.log(num);
