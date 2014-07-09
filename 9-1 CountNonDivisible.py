def solution(A):
    from math import sqrt

    n= len(A)
    count={}
    status={}
    
    for i in A:
        count[i]=count.get(i,0)+1
        status[i]=status.get(i,-1)
    
    #print status
    #print count
    
    for i in A:
        if status[i] == -1:
            status[i] = 0
            #print "status",status[i]
            for j in xrange(1,int(sqrt(i))+1):
                #print "i=:",i
                #print "j=:",j
                if i%j==0 and i/j!=j:
                    #print "status[i]",status[i]
                    #print "count[j]",count[j]
                    #print "count[i/j]",count[i/j]
                    status[i]= status[i]+count,get(j,0)+count.get(i/j,0)  //notice that j may not exeist in count,have to use get() to make sure return cprrect value
                    #print "final status",status[i]
                elif i%j==0 and i/j==j:
                    status[i]+=count.get(j,0)
                    #print "final status j=j", status[i]
    
    result=[]
    for x in A:
        #print status[x]
        result.append(n-status[x])
    
    return result