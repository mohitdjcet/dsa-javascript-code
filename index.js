//Input = [1,2,2,3,1,4,2]
//Output = {1:2,2:3,3:1,4:1}

// function freqCount(arr){
//   let map = {};

//   for(let num of arr){
//     map[num] = (map[num] || 0)+1;
//   }
//   return map;
// }
// console.log(freqCount([1,2,2,3,1,4,2]))

//Input = [1,2,2,3,1,4,2]
//Output = 2

// function mostFreq(arr){
//   let map = {};
//   let maxCount = 0;
//   let result = null;

//   for(let num of arr){
//     map[num] = (map[num] || 0)+1;

//     if(map[num]> maxCount){
//       maxCount = map[num];
//       result = num;
//     }
//   }
//   return result;
// }
// console.log(mostFreq([1,2,2,3,1,4,2]))

// function firstUniq(str) {
//   let map = {};
//   for (let ch of str) {
//     map[ch] = (map[ch] || 0) + 1;
//   }

//   for(let ch of str){
//     if(map[ch]=== 1){
//       return ch
//     }
//   }
//   return null;
// }

// console.log(firstUniq("aabbcdde"));


function contDup(arr){
  let set = new Set();

  for(let num of arr){
    if(set.has(num)){
      return true;
    }
    set.add(num);
  }
  return false;
}
console.log(contDup([1,2,3]));
