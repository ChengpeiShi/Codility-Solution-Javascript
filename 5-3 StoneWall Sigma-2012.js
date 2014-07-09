function solution(H) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=H.length;
    var result=0;
    var stack=[];
    for(var i=0;i<n;i++){
        result++;
        while(stack.length&&stack[stack.length-1]>=H[i]){
            if(stack[stack.length-1]===H[i]){
                result--;
            }
            stack.pop();
        }
        stack.push(H[i]);
    }
    return result;
}
