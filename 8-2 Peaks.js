function solution(A) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var N=A.length;
    var peaks=[];
    
    for (i=1;i<N-1;i++){
        if(A[i]>A[i-1] && A[i]>A[i+1]) peaks.push(i)
    }
    
    var peak_number=peaks.length;

    for (i=1;i<=N;i++){
        if (N%i !== 0) continue;
        var find = 0;
        var group_number = N/i;
        var result = true;
		
		for (var index in peaks){
		    var b=Math.floor(peaks[index]/i);
			if (b > find) {result = false;break;}
			if (b == find) find=find+1;
		}
		if (find!=group_number) result = false;
		if(result) return group_number;
		}
	return 0;
}
