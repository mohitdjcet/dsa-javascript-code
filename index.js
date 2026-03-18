// // let map ={};

// // map["name"]="Mohit";
// // map["age"]= 28;

// // console.log(map["age"])

// let map = new Map();

// map.set("name","Mohit");
// map.set("age",28);


// // console.log(map.get("age"))

// // console.log(map.has("city"));
// // console.log(map.delete("age"));
// // console.log(map.get("age"))

// console.log(map.size)

function twoSum(arr,target){
  let map = {};

  for(let i =0; i<arr.length;i++){
    let comp = target-arr[i];

    if(map[comp] != undefined){
      return [map[comp],i]
    }
    map[arr[i]]= i;
  }
  return [];
}

console.log(twoSum([2,7,11,15],13))