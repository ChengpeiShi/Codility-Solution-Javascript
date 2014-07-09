function solution(A, B) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=A.length;
    var stack=[];
    var comp=0;
    for(var i=0;i<n;i++){
        if(B[i]===1){
            stack.push(A[i]);
        }
        else {
            while(stack.length!==0){
                if(stack[stack.length-1]<A[i]){
                    stack.pop();
                }
                else break;
            }
            if(stack.length===0){
                comp++;
            }
            
        }
    // console.log(i+":"+comp);
    // console.log(stack);
    
    }
    return comp+stack.length;
}

