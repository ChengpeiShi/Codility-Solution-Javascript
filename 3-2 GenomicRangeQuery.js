function solution(S, P, Q) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var s = S.length;
    var p= P.length;

    var answer = [];
    var sub = 0;
    var i;
    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
           arr[i] = [];
        }
    return arr;
    }
    var result = Create2DArray(s);
    
    for (i=0;i<s;i++){
        for (var j = 0;j<4;j++){
            result[i][j]=0;
            // console.log(i+"/:"+ result);
        }
    }
    
    
    for (i =0 ;i<s;i++){
        switch(S[i]){
            case "A": result[i][0]=1;
                break;
            case "C": result[i][1]=1;
                break;
            case "G": result[i][2]=1;
                break;
            case "T": result[i][3]=1;
                break;
        }
    }
    
    for (i=1;i<s;i++){
        for (j = 0;j<4;j++){
            // if(result[0][j]!==1)result[0][j]=0;
            result[i][j]=result[i][j]+result[i-1][j];
            
        }
    }
    
    for (i =0 ;i<p;i++){
        for (j = 0;j<4;j++){
            if (P[i]>0){
                sub = result[P[i]-1][j];
            }
            if (result[Q[i]][j]-sub>0){
                answer[i]=j+1;
                break;
            }
        }
    }
    return answer;
}
