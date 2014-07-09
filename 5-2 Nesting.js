function solution(S) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var count = 0;
    for(var i=0;i<S.length;i++){
        if(S[i]==="("){
            count++;
        }
        else count--;
           if(count<0)return 0;
    }
    if(count===0)return 1;
    else return 0;
}
