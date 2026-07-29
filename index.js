function coinChnage(amount){
    const coins = [10,5,2,1];
    let result = [];

    for(let coin of coins){
        while(amount >= coin){
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}
console.log(coinChnage(28));
