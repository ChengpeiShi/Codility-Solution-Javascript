function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n = A.length,
        i = 0,
        sum = 0; 
    sum = (2+n)*(n+1)/2;
    for(i;i<n;i++){
        sum = sum-A[i];
    }
    return sum;
}
