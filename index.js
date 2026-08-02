function knapsack(weight,values,capacity){
  const n = weight.length;

  const dp = Array.from({length: n+1},()=> Array(capacity+1).fill(0));

  for(let i =1;i<=n; i++){
    for(let w=1; w<=capacity; w++){
      if(weight[i-1] <= w){
        dp[i][w]= Math.max(
          values[i-1]+
          dp[i-1][w-weight[i-1]],
          dp[i-1][w]
        )
      }else{
        dp[i][w]= dp[i-1][w];
      }
    }
  }
  return dp[n][capacity]
}
const weight = [10,20,30];
const values = [60,100,120];
console.log(knapsack(weight,values,50));
