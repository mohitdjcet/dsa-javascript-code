// function findUnique(arr){
//     let map = {};

//     for(let num of arr){
//         map[num] = (map[num] || 0)+1;
//     }

//     let result = [];

//     for(let key in map){
//         if(map[key] === 1){
//             result.push(Number(key));
//         }
//     }
//     return result;
// }
// console.log(findUnique([1,2,2,3,4,4]))

// function firstUnq(arr){
//     let map = {};

//     for(let num of arr){
//         map[num] = (map[num] || 0)+1;
//     }

//     for(let num of arr){
//         if(map[num] === 1) return num;
//     }

//     return -1;

// }
// console.log(firstUnq([2,2,4,2,3,5]))

function isUnq(arr){
    let set = new Set(arr);

    return set.size === arr.length;
}

console.log(isUnq([1,2,3,4])); //True
console.log(isUnq([1,2,2,4])); //False