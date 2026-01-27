// Input: 45678
// Output:5

// let num = 45678;
// let count = 0;

// while( num>0){
//     num = Math.floor(num/10);
//     count++
// }

// console.log(count);



//Reverse a Number
//Input:1234
//Output:4321

let num = 1234;
let reverse = 0;

while( num>0){
    let lastDigit = num % 10;
    reverse = reverse*10 +lastDigit;
    num = Math.floor(num/10);
}

console.log(reverse);
