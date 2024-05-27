####    Factorisation by Bases Algorithm (FBA)
####    A factorisation algorithm developed by
####    Bracely Magombedze in 2023
####    
####    It works by converting a number into a
####    quadratic polynomial and then try to 
####    solve it in that form

from sympy import poly, solve, symbols
from sympy.solvers.diophantine import diophantine
from sympy.abc import k,h,m,y,z,t
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
print("\n x = ", x)

k = int(input("\n\n insert value for k \n\n"))

ListHM = list(diophantine(9 * m ** 2 - 12 * (A - k) * (C + x * h)))
#print(ListHM[0])

solnHM = ListHM[0]
h = solnHM[0]
m = solnHM[1]
#print(h,"\n", m)

#substituting h and m into the discriminant to get value of t

T = poly((B + x * k - h) ** 2 - 4 * (A - k) * (C + x * h) - m ** 2)
print("\n\n", T ,"\n\n")

#for some unknown reason, declaring 
#ListT = list(solve(T))
#is not working but if we do it manually, it gives us some solutions

Tvar = input("enter value of T above\n\n")
ListT = list(solve(Tvar))
#print(ListT)

solnT = ListT[0]
#print(solnT)

#updating h and m
hvar = str.replace(str(h), "t", str(solnT))
mvar = str.replace(str(m), "t", str(solnT))
print("\n h is\n\n ", hvar, "\n\n m is\n\n", mvar)

h = eval(input("\n\n enter value of h above\n"))
m = eval(input("\n\n enter value of m above\n"))

_sl = str.split(str(solnT), "/", 2)
#print(_sl)

t_denom = int(_sl[1])
#print(t_denom)

#we now find the factor of N

x_num = (int)(t_denom ** 2 * ( - (B + x * k - h) + m))
x_denom = int(t_denom ** 2 * 2 * (A - k))

print(x_num, "\n", x_denom)

#xfac = gcd(x_num, x_denom)
#x1 = x_num // xfac
#x2 = x_denom // xfac

p0 = x_denom * x - x_num
p = gcd(p0, N)

print("\nthe prime factor is \n\n ", p)
