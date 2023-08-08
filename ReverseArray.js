let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let revarr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  revarr.push(arr[i]);
  console.log(revarr, 'rev');
}
