function charFre(str){
    let freq = {};
    str = str.toLowerCase().replace(/\s+/g,"");

    for(let ch of str){
        freq[ch]= (freq[ch] || 0)+1;
    }
    return freq;
}

console.log(charFre("Hello World"));
