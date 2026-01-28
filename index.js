// function fcIterative(n){
//     let result = 1;

//     for(let i =1; i<=n; i++){
//         result = result*i;
//     }
//     return result;
// }
// console.log(fcIterative(5));


function fcRecursion(n){
    if(n ===1){
        return 1;
    }

    return n*fcRecursion(n-1);
}
console.log(fcRecursion(5));
