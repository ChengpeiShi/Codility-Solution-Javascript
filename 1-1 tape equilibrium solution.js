function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n =A.length,
        sum = 0,
        
        minTem = 0,
        sumLeft = A[0],
        sumRight = 0,
        i = 0;
    for(i;i<n;i++){
    sum = sum+A[i];
    }
    var min = Math.abs(2*A[0]-sum);
    for(i=1;i<n-1;i++){
        sumLeft = sumLeft+A[i];
        minTem = Math.abs(2*sumLeft-sum);
        if (min>minTem){
            min = minTem;
        }
        // console.log(minTem);
    }
    // console.log(min);
    return min;
}