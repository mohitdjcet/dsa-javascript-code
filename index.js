let arr = [1,2,2,3,4,4,5];

// let uniqeArr = [...new Set(arr)];

// console.log(uniqeArr);

let uniqeArr = [];

for(let i =0; i < arr.length; i++){
    if(!uniqeArr.includes(arr[i])){
        uniqeArr.push(arr[i]);
    }
}

console.log(uniqeArr);
