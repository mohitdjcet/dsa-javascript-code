// function maxSubArraySum(arr,k){
//  let windowSum = 0;
//  let maxSum = 0;
// //first window
//  for(let i =0; i<k; i++){
//     windowSum += arr[i]
//  }

//  maxSum = windowSum;
// //Sliding window
// for( let i =k; i<arr.length; i++){
//     windowSum += arr[i]; //add next element
//     windowSum -= arr[i-k]; //remove left element
//     maxSum = Math.max(maxSum, windowSum);
// }
// return maxSum;
// }
// console.log(maxSubArraySum([2,1,5,1,3,2],3));


function longUniqSubString(s){
    let set = new Set();
    let left = 0;
    let maxLen =0;

    for(let right = 0 ; right<s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right-left+1)
    }
    return maxLen;
}
console.log(longUniqSubString("abcabcbb"));
