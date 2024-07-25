// **********
// **********
// **********
// **********
// **********

// print pattern 10*5

// for (let i = 0; i < 5; i++) {
//   let stars = '';
//   for (let j = 0; j < 10; j++) {
//     stars += '*' + ' ';
//     console.log(stars);
//   }
// }

for (let i = 0; i < 5; i++) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*' + ' ';
  }

  console.log(stars); // This will print each row of 10 stars
//   console.log('========');  
}
