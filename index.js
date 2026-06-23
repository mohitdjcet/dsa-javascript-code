// function binarySearch(arr,target){
//     let start= 0;
//     let end = arr.length-1;

//     while(start <= end){
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid]=== target){
//             return mid;
//         }
//         if(target < arr[mid]){
//             end = mid -1;
//         } else{
//             start= mid+1;
//         }
//     }
//     return -1
// }
// console.log(binarySearch([10,20,30,40,50,60,70],50));

function binarySer(arr, target, start, end) {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if(target < arr[mid]){
    return binarySer(arr,target,start,mid-1)
  }else{
    return binarySer(arr,target,mid+1,end)
  }
}
console.log(binarySer([10, 20, 30, 40, 50], 40, 0, 4));
