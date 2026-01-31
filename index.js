//1 to n-Print

// function printNumbers(n) {
//     if( n===0) return;

//     printNumbers(n-1);
//     console.log(n);
    
// }
// printNumbers(3);

// function sumDigit(n){
//     if( n===0 ) return 0;

//     return (n%10)+ sumDigit(Math.floor(n/10))
// }

// console.log(sumDigit(123));


//Power of n

function power(a,b){
    if(b === 0) return 1;

    return a*power(a,b-1);
}
console.log(power(2,3));
