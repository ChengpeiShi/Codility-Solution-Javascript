function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=A.length;
    var temp;
    var result_count=0;
    var result=-1;
    var j=0;
    for(var i=0;i<n;i++){
        if(result_count===0){
            temp=A[i];
            result_count++;
            result=i;
        }
        else {
            if(A[i]===temp) result_count++;
            else result_count--;
        }
    }
    
    for(i=0;i<n;i++){
        if(A[i]===temp) {j++;}
    }
    if(j>n/2)
    return result;
    else return -1;
    
}
