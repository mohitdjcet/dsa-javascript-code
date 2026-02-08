// function isAnagram(s,t){
//    s = s.toLowerCase().replace(/\s+/g,"");
//    t = t.toLowerCase().replace(/\s+/g,"");

//    if(s.length !== t.length) return false;

//    let freq = {};

//    for(let ch of s){
//     freq[ch] = (freq[ch] || 0) +1;
//    }

//    for(let ch of t){
//     if(!freq[ch]) return flase;
//     freq[ch]--;
//    }

//    return true;
// }

// console.log(isAnagram("Listen t","silent t"));

function isAnagram(s,t){
   s = s.toLowerCase().replace(/\s+/g,"");
   t = t.toLowerCase().replace(/\s+/g,"");

   return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(isAnagram("Listen t","silent t"));