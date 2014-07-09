function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n = A.length;
    var B=[];
    var C=[];
    var end_temp=0;
    var begin_temp=0;
    var result=0;
    for(var i=1;i<n-1;i++){
        end_temp=Math.max(0,end_temp+A[i]);
        B[i]=end_temp;
    }
    for(i=n-2;i>0;i--){
        begin_temp=Math.max(0,begin_temp+A[i]);
        C[i]=begin_temp;
    }
    
    B[0]=B[n-1]=C[0]=C[n-1]=0;
    
    for(i=0;i<n-2;i++){
        result=Math.max(result,B[i]+C[i+2]);
    }

    return result;
}
