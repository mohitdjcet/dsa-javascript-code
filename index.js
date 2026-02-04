let arr = [10,5,20,8];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    } else if(arr[i]> secondLargest && arr[i] !== largest){
        secondLargest = arr[i];
    }
}

if(secondLargest === -Infinity){
    console.log("No Second Largest Element in Arr");
} else{
    console.log("Second Largest:",secondLargest);
    
}