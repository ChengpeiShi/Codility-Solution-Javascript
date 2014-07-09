function solution(S) {
    // you can use console.log for debugging purposes, i.e.
    // console.log('this is debug message');
    // write your code in JavaScript (ECMA-262, 5th edition)
    var n=S.length;
    var matched={"]":"[","}":"{",")":"("};
    var checked=["[","{","("];
    var stack=[];
    
    function in_array(stringToSearch, arrayToSearch) {
	for (s = 0; s < arrayToSearch.length; s++) {
		thisEntry = arrayToSearch[s].toString();
		if (thisEntry === stringToSearch) {
			return true;
		}
	}
	return false;
    }
    for(var i=0;i<n;i++){
        if(in_array(S[i],checked)){
            stack.push(S[i]);
            //console.log(stack);
        }
        else{
            if(stack.length===0)return 0;
            else if(matched[S[i]]!==stack.pop())return 0;
        }
    }
    if(stack.length===0)return 1;
    else return 0;
}
