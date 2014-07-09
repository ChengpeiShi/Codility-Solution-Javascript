function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    // var B=[];
    var distinct;
    var n=A.length;
    // B=A.sort(function(a,b){return a-b});
    // console.log(B);
    if(n===0) distinct=0;
    else distinct=1;
    A.sort(function(a,b){return a-b});
    for(var i=1;i<n;i++){
        if(A[i-1]===A[i]){
            continue;
        }
        else distinct = distinct+1;
    }
    return distinct;
}
