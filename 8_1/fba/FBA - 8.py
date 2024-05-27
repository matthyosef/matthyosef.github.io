####    Factorisation Algorithm (FA)
####    A factorisation algorithm developed by
####    Bracely Magombedze in 2023
####    #######################################

from sympy import poly, solve, symbols
from sympy.solvers.diophantine import diophantine
from sympy.abc import A,B,C,D,E,N,M,X,Y,Z,a,b,c,d,e,h,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z
from math import log, log10, sqrt, isqrt, gcd

####    prompts user to insert a number

N = int(input(" enter number to factorise \n\n"))

#numdig = log10(N) + 1

#x = 10
#x = int(10**(numdig/3))
#x = int(0.5*isqrt(N))
#x = int(input(" enter x \n"))

x = int(0.5*(isqrt(N)-isqrt(isqrt(N)))) #liked this one

C = N % x
rem = N // x
B = rem % x
A = rem // x

print("\n", A, " x2 + " , B , " x + " , C)
print("\n x = ", x, "\n\n")
A=4
B=24
C=27

ListSR = list(diophantine((6*A*B**2)**2 - 24*A**2*B*(B**3 - 6*s*A**2) - r**2, 0))
print(ListSR, "\n\n")

ListDE = list(diophantine((6*A*B**2)**2 - 24*A**2*B*(B**3 - 6*N*A*B - 6*e*A**2) - d**2, 0))
print(ListDE, "\n\n")

solve([(6*B*X**2-6*E)*A**2+(6*B**2*X)*A+B**3-M,(6*B*Y**2-6*E)*A**2+(6*B**2*Y)*A+B**3-M,2*(6*B*X**2+6*B*Y**2-12*E)*A+6*B**2*X-6*B**2*Y,B**2-4*A*N+4*A**2*X**2+4*A*B*X-d**2,B**3-6*A*B*N+6*A**2*B*X**2+6*A*B**2*X-6*e*A**2,N-667,B-18,A-4,d-12])

solve([(6*B*X**2-6*E)*A**2+(6*B**2*X)*A+B**3-M,(6*B*Y**2-6*E)*A**2+(6*B**2*Y)*A+B**3-M,2*(6*B*X**2+6*B*Y**2-12*E)*A+6*B**2*X-6*B**2*Y,B**2-4*A*N+4*A**2*X**2+4*A*B*X-d**2,2*A*X+2*A*Y+2*B,N-667,X-10,Y+16,d-12])

solve([(6*B*X**2-6*E)*A**2+(6*B**2*X)*A+B**3-M,(6*B*Y**2-6*E)*A**2+(6*B**2*Y)*A+B**3-M,2*(6*B*X**2+6*B*Y**2-12*E)*A+6*B**2*X-6*B**2*Y,B**2-4*A*N+4*A**2*X**2+4*A*B*X-d**2,2*A*X+2*A*Y+2*B,(2*A*X+B)**2-d**2-N*u,(2*A*Y+B)**2-d**2-N*u,N-667,d-12])

solve([(6*B*X**2-6*E)*A**2+(6*B**2*X)*A+B**3-M,(6*B*Y**2-6*E)*A**2+(6*B**2*Y)*A+B**3-M,B**2-4*A*N+4*A**2*X**2+4*A*B*X-d**2,B**2-4*A*N+4*A**2*Y**2+4*A*B*Y-d**2,2*A*X+2*A*Y+2*B,N-667,A-4,B-24])

solve([A*X**2+B*X-A*Y**2-B*Y,B**3+6*A**2*B*X**2+6*A*B**2*X-6*E*A**2-6*N*A*B,B**3+6*A**2*B*Y**2+6*A*B**2*Y-6*E*A**2-6*N*A*B,2*A*X+2*A*Y+2*B,B**2-4*A*N+4*A**2*X**2+4*A*B*X-d**2,B**2-4*A*N+4*A**2*Y**2+4*A*B*Y-d**2,A*Z**2+B*Z+N-A*X**2-B*X,A*Z**2+B*Z+N-A*Y**2-B*Y,B**3+4*A**2*Z**2+4*A*B*Z-d**2,N-667,d-12,A-4])

for i in range(0, len(ListSR) - 1):
    setSR = ListSR[i]
    for j in range(0, len(ListDE) - 1):
        setDE = ListDE[j]
        if (setDE[0] == setSR[0] or setDE[0] != 0):
            #when d = r ignoring that
            #d1 = setDE[1]
            #d2 = setSR[1]
            #prime = gcd(d1 - d2, N)
            #print(prime)
            #exit(0)
            print('d = ', setDE[0], '\t e = ', setDE[1], '\t s = ', setSR[1])
            d1 = setDE[0]
            e1 = setDE[1]
            s1 = setSR[1]
            #n1 = -6*A*B**2 + d1
            #_d1 = 2*6*A**2*B
            #_c1 = gcd(n1, _d1)

            soln1 = solve([(6*A**2*B)*a**2+(6*A*B**2)*a+(B**3-6*s1*A**2)])
            print(soln1)

            soln2 = solve([(6*A**2*B)*a**2+(6*A*B**2)*a+(B**3-6*e1*A**2)])
            print(soln2, "\n")
            #let a be rational for soln2, ie must not have I or sqrt
            
