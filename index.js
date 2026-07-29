function sunsets(nums){
    let result = [];

    function backtrack(index,current){
        result.push([...current])
        for(let i = index; i<nums.length; i++){
            current.push(nums[i]);
            backtrack(i+1,current);
            current.pop();
        }
    }
    backtrack(0,[]);
    return result;
}
console.log(sunsets([1,2]));
