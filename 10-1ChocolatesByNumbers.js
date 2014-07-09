function gcd(a,b){
    if(a<b)return gcd(b,a);
    if(a%b===0){
        return b;
    }else return gcd(b,a%b);
}

function solution(N, M) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    return N/gcd(N,M);
}