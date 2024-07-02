### FBA ALGORITHM
### AS OF 26 APRIL 2024
### WORKS BY 
### BRACELY MAGOMBEDZE

from sympy import poly, solve, Symbol, Eq
from math import gcd, isqrt, sqrt, log, log10
from sympy.solvers.diophantine import diophantine
from sympy.abc import A, B, C, D, E, x, y, z, d, e, u, r

import time

_start = time.time()

N = int(input('\n\nenter number \n\n'))

_z_0 = int(input('\n\nenter initial value for z\n\n'))
_d_0 = int(input('\n\nenter initial value for d\n\n'))

ListUC = list(diophantine(u * C + _z_0 * _d_0 * u + 2 * _z_0 * C + 4 * _z_0 * _d_0))
#print(ListUC, "\n\n")

for i in range(len(ListUC)):
    tempUC = list(ListUC[i])
    _C_0 = tempUC[0]
    _u_0 = tempUC[1]
    ListSOLN = list(solve([A*x**2+B*x+C-N, A*y**2+B*y+C-N, A*z**2+B*z+C, B**2-4*A*C-d**2, B**3-6*A*B*C-6*e*A**2, B**2-4*A*(C-N)-D**2, B**3-6*A*B*(C-N)-6*E*A**2, 2*A*x+B-D, 2*A*y+B+D, 2*A*z+B-d,2*A*x**3+3*B*x**2+6*(C-N)*x+2*A*y**3+3*B*y**2+6*(C-N)*y-6*E,D**2-d**2-N*r, E-e-N*u, z-_z_0, d-_d_0, C-_C_0]))
    tempSOLN = ListSOLN[0]
    print(tempSOLN, "\n\n")


_end = time.time()

print(f"Time taken is \t {_end - _start} \t seconds")
