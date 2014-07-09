function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n =A.length;
    var answer = 0;
    var goEast = 0;
    for (var i =0 ; i<n;i++){
        if(A[i]===0){
            goEast = goEast +1;
        }
        else{
            answer = answer+goEast;
            if (answer>1e9){
                return -1;
            }
        }
    }
    return answer;
}