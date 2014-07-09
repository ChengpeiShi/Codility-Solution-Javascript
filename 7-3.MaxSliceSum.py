def solution(A):
    # write your code in Python 2.6
    max_slice_temp=A[0]
    max_slice=A[0]
    
    for x in A[1:]:
        max_slice_temp=max(x,max_slice_temp+x)
        max_slice=max(max_slice,max_slice_temp)
    return max_slice