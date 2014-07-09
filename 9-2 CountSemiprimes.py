def solution(N, P, Q):
    # write your code in Python 2.7
    from math import sqrt 
    table=[0]*(N+1)
    table[0]=table[1]=1
    i=2
    while(i*i<=N):
        if table[i]==0:
            k=i*i
            while k<=N:
                table[k]=i
                k+=i
        i+=1
    
    semiPrime1=[0]*(N+1)

    for index in xrange(1,N+1):
        semiPrime1[index]=semiPrime1[index-1]
        if table[index]==0:
            continue
        else:
            if table[index/table[index]]==0:
                semiPrime1[index]+=1
    
    answer=[]
    for x in xrange(0,len(P)):
        answer.append(semiPrime1[Q[x]]-semiPrime1[P[x]-1])
    
    return answer