// I/P = [10,20,30,40,50]
// O/P = 30

// function linerSearch(str,target){
//  for(let i=0; i< str.length; i++){
//     if(str[i]=== target){
//         return i
//     }
//  }
//  return -1;
// }
// console.log(linerSearch(["Rohit","Mohit","Anil"], "Mohit"));

// function firstOccur(arr,target){
//  for(let i = arr.length-1; i>=0; i--){
//     if(arr[i]=== target){
//         return i
//     }
//  }
//  return -1;
// }
// console.log(firstOccur([10,20,30,20,40],20));

function countOccur(arr,target){
    let count = 0;
    for(let num of arr){
        if(num === target){
            count++
        }
    }
    return count
}
console.log(countOccur([10,20,30,20,40],20));

