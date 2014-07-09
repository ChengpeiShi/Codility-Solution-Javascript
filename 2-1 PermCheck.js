function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var count = [];
    var n=A.length;
    for (var i=0;i<n;i++){
        if (count[A[i]-1]===0){
        count[A[i]-1]=count[A[i]-1]+1;
        }
        else {
            count[A[i]-1]=0;
        }
    }
    // console.log(count);
    for (var j=0;j<count.length;j++){
        if (count[j]!==0){
            return 0;
        }
    }
    return 1;
}