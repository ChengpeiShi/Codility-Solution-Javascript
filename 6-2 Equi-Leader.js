function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=A.length;
    var leader;
    var result_count=0;
    var result=-1;
    var leader_num=0;
    var leader_count=0;
    var equi_num=0;
    for(var i=0;i<n;i++){
        if(result_count===0){
            leader=A[i];
            result_count++;
            result=i;
        }
        else {
            if(A[i]===leader) result_count++;
            else result_count--;
        }
    }
    
    for(i=0;i<n;i++){
        if(A[i]===leader) {leader_num++;}
    }
    if(leader_num<=n/2)
    return 0;

    for(i=0;i<n;i++){
        if(A[i]===leader){
            leader_count++;
        }
        if(leader_count>(i+1)/2&&(leader_num-leader_count)>((n-i-1)/2)){
            equi_num++;
        }
    }
    
    return equi_num;
    
}
