function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n =A.length;
    var up=[];
    var low=[];
    var count=0;
    var j=0;
    for(var i =0;i<n;i++){
        up.push(i+A[i]);
        low.push(i-A[i]);
    }
    up.sort(function(a,b){return a-b});
    low.sort(function(a,b){return a-b});
    for(i=0;i<n;i++){
        while(j<n&&up[i]>=low[j]) j++;
        count=count+j-i-1;
    }
    if(count>10000000)return -1;
    return count;
}
