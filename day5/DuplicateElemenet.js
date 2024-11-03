const arr = [1, 2, 1, 1, 4, 5, 6, 7, 8, 2, 4, 3];
// bruter force
// const duplicateArr = function (arr) {
//   let dub = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] == arr[j]) {
//         dub.push(arr[i]);
//       }
//     }
//   }
//   return dub.join();
// };

// console.log(duplicateArr(arr));
// tc o(n2) spc o(n)

// optimize solution is

function dublicate(arr) {
  const seen = new Set();
  const dub = new Set();
  for (let num of arr) {
    if (seen.has(num)) {
      dub.add(num);
    } else {
      seen.add(num);
    }
  }
  return Array.from(dub).join();
}
console.log(dublicate(arr));
