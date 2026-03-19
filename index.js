// let set = new Set([1,2,3,3,4]);

// set.add(5);
// set.delete(2);
// set.clear();
// console.log(set);

// for( let val of set){
//     console.log(val);
// }

// let arr = [...set];
// console.log(arr);


// function remDub(arr){
//     return [...new Set(arr)]
// }
// console.log(remDub([1,2,2,3,4]))

// function hasDup(arr){
//     let set = new Set();

//     for(let num of arr){
//         if(set.has(num)) return true;
//         set.add(num);
//     }
//     return false;
// }
// console.log(hasDup([1,2,3]))

function uniqCount(arr){
    return new Set(arr).size;
}
console.log(uniqCount([1,2,2,3]))