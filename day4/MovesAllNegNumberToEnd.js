const arr = [1, -1, 3, 2, -7, -5, 11, 6];

function MoveAllNegativeArrToEnd(arr) {
  let negativeArr = [];
  let positiveArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negativeArr.push(arr[i]);
    } else {
      positiveArr.push(arr[i]);
    }
  }
  return [...positiveArr, ...negativeArr];
}

console.log(MoveAllNegativeArrToEnd(arr));
