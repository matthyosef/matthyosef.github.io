####    Factorisation Algorithm (FA)
####    A factorisation algorithm developed by
####    Bracely Magombedze in 2023
####    #######################################

from sympy import poly, solve, symbols
from sympy.solvers.diophantine import diophantine
from sympy.abc import A,B,C,D,E,N,M,R,X,Y,Z,a,b,c,d,e,h,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z
from math import log, log10, sqrt, isqrt, gcd

####    prompts user to insert a number

N = int(input(" enter number to factorise \n\n"))
x = int(input(" enter number to factorise \n\n"))

C = N % x
rem = N // x
B = rem % x
A = rem // x

print("\n", A, " x2 + " , B , " x + " , C)
print("\n x = ", x, "\n\n")

#eq1 = (B+x*k-h)**2 - 4*(A-k)*(C+x*h) - m**2
#eq2 = 4*m**2-16*x*k*h+16*A*C+16*A*x*h-16*C*k-o**2
#R = 2*m + o
#eq3 = (B)**2 - 4*(A)*(C-N) - n**2
#x*k + h + n - sqrt(eq3)

solve([(B+x*k-h)**2 - 4*(A-k)*(C+x*h) - m**2,4*m**2-16*x*k*h+16*A*C+16*A*x*h-16*C*k-o**2, 2*m+o-R, (B)**2 - 4*(A)*(C-N) - n**2,k-2])