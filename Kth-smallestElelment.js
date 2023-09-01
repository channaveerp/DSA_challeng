// ffindt kth smallest element
const arr = [7, 10, 4, 3, 20, 15];
const sortedArr = arr.sort((a, b) => a - b);
console.log('sortedArr:', sortedArr);

let k = 3;

console.log(sortedArr[k - 1]);
// i=1,1<5,1==3,false
// i++ ,i=2,2==3,false
// i++ ,i=3,3==3,true , arr[3] = smallest , return smallest = 7
