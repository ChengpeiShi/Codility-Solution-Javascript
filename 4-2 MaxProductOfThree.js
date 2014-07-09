function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n= A.length;
    A.sort(function(a,b){return a-b});
    return Math.max(A[0]*A[1]*A[n-1],A[n-3]*A[n-2]*A[n-1]);
}
