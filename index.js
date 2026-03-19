// let obj = {};

// obj[1] = "Number Key";
// obj["1"]= "String Key";

// console.log(obj)

// let map = new Map();
// map.set(1,"Number Key");
// map.set("1","String Key");

// console.log(map)

// let obj = {a:1,b:2};

// for(let key in obj){
//     console.log(key,obj[key]);
// }

// let map = new Map([
//     ["a",1],
//     ["b",2]
// ])

// for(let [key,value] of map){
//     console.log(key,value);
    
// }

// let obj = {a:1,b:2};
// // console.log(Object.keys(obj).length)
// console.log(delete obj.a)
// console.log(obj)

// let map = new Map([
//     ["a",1],
//     ["b",2]
// ])
// console.log(map.delete("a"))
// console.log(map)

function freq(arr){
    let map = new Map();


    for(let num of arr){
        map.set(num, (map.get(num) || 0)+1);
    }
    return map;
}
console.log(freq([1,2,2,3,3,3,3]))