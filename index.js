let num =121;
let original = num;
let reverse = 0;

while( num>0){
    let lastDigit = num%10;
    reverse = reverse*10 +lastDigit;
    num = Math.floor(num/10);
}

if( original === reverse){
    console.log("Palindrome Number");
}else{
    console.log("Not a Palindrome Number");
    
}