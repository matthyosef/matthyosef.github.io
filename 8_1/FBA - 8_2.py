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

B = 24
ListRS = list(diophantine((-9*B**2)**2 - 54*B**4 + 4*B**3* 6*s - r**2, 0))
#print(ListRS, "\n\n")

ListDE = list(diophantine((6*x*B**2 - 6*N*B)**2 - 4*B**3*(6*x**2*B - 6*e) - d**2, 0))
#print(ListDE, "\n\n")

for i in range(0, len(ListRS) - 1):
    tempRS = list(ListRS[i])
    r1 = tempRS[0]
    s1 = tempRS[1]
    _A1 = solve(a**2*(6*x**2*B - 6*s1) + a*(6*x*B**2) + B**3)
    print(_A1)

print('\n\n\n')

for j in range(0, len(ListDE) - 1):
    tempDE = list(ListDE[i])
    d1 = tempDE[0]
    e1 = tempDE[1]
    _A2 = solve(a**2*(6*x**2*B - 6*e1) + a*(6*x*B**2 - 6*N*B) + B**3)
    print(_A2)

for i in range(0, len(ListRS) - 1):
    for j in range(0, len(ListDE) - 1):
        _RS = ListRS[i]
        _DE = ListDE[j]
        #if r = d then
        if (_RS[0] == _DE[0]):
            print('r = d is \t ', _RS[0], '\n')
        if (_RS[1] == _DE[1]):
            print('s = e is \t ', _RS[1], '\n')  

