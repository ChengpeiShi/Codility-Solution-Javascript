function solution(X, Y, D) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    if ((Y-X)%D===0){
        return Math.floor((Y-X)/D);
    }
    else {
        return Math.floor((Y-X)/D)+1;
    }
