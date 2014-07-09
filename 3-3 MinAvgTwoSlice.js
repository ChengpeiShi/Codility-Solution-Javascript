function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var min = (A[0]+A[1])/2;
    var minPos = 0;
    var n = A.length;
    for (var i =0; i<n-2;i++){
        var minTem1 = (A[i]+A[i+1])/2;

        if (minTem1<min){
            min=minTem1;
            minPos=i;
        }
        var minTem2 = (A[i]+A[i+1]+A[i+2])/3;
        if (minTem2<min){
            min=minTem2;
            minPos=i;
        }
        
    }

    if ((A[n-1]+A[n-2])/2<min){  //last 2 slice
            min=A[n-1]+A[n-2]/2;
            minPos=n-2;
    }
    
    return minPos;

}