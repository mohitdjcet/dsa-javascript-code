//Input = [10,20,20,20,50]
// 20

//1st Interview Question- 1st Occurence
// function firstOcc(arr,target){
//     let start = 0;
//     let end = arr.length -1;
//     let answer = -1;

//     while(start<= end){
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid]=== target){
//             answer = mid;
//             end = mid -1; //Left Search
//         } else if(target < arr[mid]){
//             end = mid -1;
//         } else{
//             start= mid +1
//         }
//     }
//     return answer;
// }
// console.log(firstOcc([10,20,20,20,50],20));


//2nd-Last Occurence

// function lastOcc(arr,target){
//     let start = 0;
//     let end = arr.length -1;
//     let answer = -1;

//     while(start<= end){
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid]=== target){
//             answer = mid;
//             start = mid + 1; //Right Search
//         } else if(target < arr[mid]){
//             end = mid -1;
//         } else{
//             start= mid +1
//         }
//     }
//     return answer;
// }
// console.log(lastOcc([10,20,20,20,50],20));


//Count Occurence
// function countOcc(arr,target){
//     let first = firstOcc(arr,target)
//     let last = lastOcc(arr,target)

//     if(first === -1){
//         return 0;
//     }
//     return last-first +1;
// }
// console.log(countOcc([10,20,20,20,50],20));


//Lower Bound
//Input: [10,20,30,40,50]
//Traget: 25
//Output: 2

function lowerBound(arr,target){
    let start =0;
    let end = arr.length -1;
    let answer = arr.length;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] > target){
            answer = mid;
            end = mid -1;
        }else{
            start = mid +1;
        }
    }
    return answer
}
console.log(lowerBound([10,20,20,20,50],20));
