function reverse(arr, start,end){
    //Two Pointer
    while(start < end){
        let temp = arr[start];
        arr[start]= arr[end];
        arr[end]= temp;

        start++;
        end--;
    }
}

let arr = [1,2,3,4,5];
let k=2;
k = k%arr.length; //Edge Case Handle


// reverse(arr,0,k-1);
// reverse(arr,k,arr.length-1);
// reverse(arr,0,arr.length-1);

reverse(arr,0,arr.length-1);
reverse(arr,0,k-1);
reverse(arr,k,arr.length-1);

console.log(arr);
