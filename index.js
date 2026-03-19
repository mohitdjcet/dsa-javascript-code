// function subArrSum(arr,k){
//   for(let i =0; i < arr.length; i++){
//     let sum = 0;
//     for(let j =i; j < arr.length; j++){
//       sum += arr[j];

//       if(sum === k){
//         return true;
//       }
//     }
//   }
//   return false;
// }

function subArrSum(arr,k){
  let map = new Map();
  let sum = 0;

  map.set(0,1);

  for(let num of arr){
    sum +=num;
    
    if(map.has(sum-k)){
      return true;
    }
    map.set(sum,(map.get(sum) || 0)+1);
  }
  return false;
}

console.log(subArrSum([1,2,3,4],6))