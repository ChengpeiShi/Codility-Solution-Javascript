def solution(A):
    # write your code in Python 2.6
    days=len(A)
    
    if days<2:
        return 0
    
    max_temp=A[days-1]
    max_profit=0
    for index in xrange(days-2,-1,-1):
        max_profit=max(max_profit,max_temp-A[index])
        max_temp=max(max_temp,A[index])
    return max_profit