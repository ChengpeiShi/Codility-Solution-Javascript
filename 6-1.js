function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=A.length;
    var result;
    var j=0;
    if(n) var stack=[A[0]];
    else return -1;
    
    for (var i=1;i<n;i++){
        if(stack.length>0&&stack[stack.length-1]!==A[i]){
            stack.pop();
        }
        else stack.push(A[i]);
    }
    
    if(stack.length>0){
        var dominator = stack[0];
    }
    else return -1;
    
    for(i=0;i<n;i++){
        if(A[i]===dominator) {j++;result=i;}
    }
    if(j>n/2)
    return result;
    else return -1;
}