function isPaindrome(str){
    let s = str.toLowerCase().replace(/[^a-z0-9]/g,"");

    let start = 0;
    let end = s.length -1;

    while(start < end){
        if(s[start] !== s[end]){
            return false
        }
        start++;
        end--;
    }
    return true
}

console.log(isPaindrome("mad:am"));
