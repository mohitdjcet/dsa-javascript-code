// function fibo(n){
//     if(n <= 1){
//         return n;
//     }
//     return fibo(n-1)+ fibo(n-2);
// }
// console.log(fibo(6));

// function fibo(n, memo={}){
//     if(n <= 1){
//         return n;
//     }
//     if(memo[n]){
//         return memo[n]
//     }
//     memo[n] = fibo(n-1,memo)+ fibo(n-2, memo);
//     return memo[n];
// }
// console.log((fibo(6)));

// function fibo(n) {
//   if (n <= 1) {
//     return n;
//   }
//   let dp = [0,1];
//   for(let i=2; i<=n; i++){
//     dp[i]= dp[i-1]+dp[i-2];
//   }
//   return dp[n]
// }
// console.log(fibo(6));

function fibo(n){
 if (n <= 1) {
    return n;
  } 
  let prev2 = 0;
  let prev1 = 1;
  for(let i =2;i<=n; i++){
    let current = prev1+prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
console.log(fibo(6));
