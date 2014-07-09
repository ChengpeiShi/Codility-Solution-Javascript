def solution(N):
    # write your code in Python 2.6
    i=2
    result=(1+N)*2
    while (i*i<=N):
        if N%i==0:
            result=min(result,(i+N/i)*2)
        i+=1
    return result

def solution1(N):
	from math import sqrt

	for i in xrange(int(sqrt(N)),0,-1):
		if N%i==0:
			return (i+N/i)*2