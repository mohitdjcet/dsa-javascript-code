//Input n=5
//Output=5

function fibonacci(n){
    if ( n===0) return 0;
    if ( n===1 ) return 1;

    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(5));
