function solution(N, A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var m = A.length;
    var max=0,b=0,count=[];
    for (var j=0; j<N;j++ ){
        count[j]=0;
    }
    for (var i=0;i<m;i++){
        if(A[i]>=1&&A[i]<=N){
            count[A[i]-1]=Math.max(b,count[A[i]-1])+1;
            max = Math.max(count[A[i]-1],max);
        }
        else{
            b=max;
        }
    }
    for (var k=0;k<N;k++){
        count[k]=Math.max(count[k],b);
    }
    return count;
}