####    Factorisation Algorithm (FA)
####    A factorisation algorithm developed by
####    Bracely Magombedze in 2023
####    #######################################

from sympy import poly, solve, symbols
from sympy.solvers.diophantine import diophantine
from sympy.abc import A,B,C,D,N,a,b,c,d,e,h,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z
from math import log, log10, sqrt, isqrt, gcd

####    prompts user to insert a number

N = int(input(" enter number to factorise \n\n"))

#numdig = log10(N) + 1

x = 10
#x = int(10**(numdig/3))
#x = int(0.5*isqrt(N))
#x = int(input(" enter x \n"))

#x = int(0.5*(isqrt(N)-isqrt(isqrt(N)))) #liked this one

C = N % x
rem = N // x
B = rem % x
A = rem // x

print("\n", A, " x2 + " , B , " x + " , C)
print("\n x = ", x, "\n\n")

ListDE = list(diophantine((6*A*B**2)**2 - 24*A**2*B*(B**3 - 6*N*A*B - 6*e*A**2) - d**2, 0))
#print(ListDE, "\n\n")

for i in range(0, len(ListDE) - 1):
    _DE = list(ListDE[i])
    _d = _DE[0]
    _e = _DE[1]
    for j in range(0, len(ListDE) - 1):
        _DE_ = list(ListDE[j])
        _d_ = _DE_[0]
        _e_ = _DE_[1]

        _n = _d - _d_
        _m = _e - _e_

        if (gcd(_n, N)!= 1 and gcd(_n, N)!= N):
            print('d = ', _d, "\t and \t d = ", _d_)
            print('factor is \t', gcd(_n, N), "\n")
