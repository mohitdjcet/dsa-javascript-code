function nextGreEle(arr){
    let n = arr.length;
    let res = new Array(n).fill(-1);
    let stack = [];

    for(let i = n-1; i>=0; i--){
        //POP smaller elements
        while(stack.length >0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
        }
        //Top of stack is next grater(if exist)
        if(stack.length>0){
            res[i] = stack[stack.length -1];
        }

        //Push current element
        stack.push(arr[i]);
    }
    return res;
}
console.log(nextGreEle([4,5,2,10,8]));
