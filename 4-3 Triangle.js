function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=A.length;
    A.sort(function(a,b){return a-b});
    for(var i=0;i<n-2;i++){
        if(A[i]>0&&A[i]>A[i+2]-A[i+1]){
            return 1;
        }
    }
    return 0;
}
