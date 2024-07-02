### FBA ALGORITHM
### AS OF 27 MARCH 2024
### WORKS BY 
### BRACELY MAGOMBEDZE

from sympy import poly, solve, Symbol, Eq
from math import gcd, isqrt, sqrt, log, log10
from sympy.solvers.diophantine import diophantine
from sympy.abc import A, B, C, D, E, x, y, z, d, e, k, h, r, u, H

N = int(input('\n\nenter number \n\n'))

eq1 = (A * x ** 2 + B * x + C - N)
eq2 = (A * y ** 2 + B * y + C - N)
eq3 = (A * z ** 2 + B * z + C)

eq4 = (A * x + A * y + B)
eq5 = (B ** 2 - 4 * A * C - d ** 2)
eq6 = (B ** 3 - 6 * A * B * C - 6 * e * A ** 2)

eq8 = (B ** 2 - 4 * A * (C - N) - D ** 2)
eq9 = (B ** 3 - 6 * A * B * (C - N) - 6 * E * A ** 2)

### setting initial values

_x_0 = int(input('\n\nenter initial value for x\n\n'))
_B_0 = int(input('\n\nenter initial value for B\n\n'))

# we can set y=10 and B=24 since they were more probable
#equations = [eq1, eq2, eq3, eq4, eq5, eq6, eq8, eq9, x - _x_0, B - _B_0, E - e]

#soln_1 = solve(equations, [A, B, C, D, E, N, x, y, z, d, e], dict=True)

#print(soln_1)

#soln_2 = solve([A*x**2+B*x+C-N,A*y**2+B*y+C-N,A*z**2+B*z+C,A*x+A*y+B,B**2-4*A*C-d**2,B**3-6*A*B*C-6*e*A**2,B**2-4*A*(C-N)-D**2,B**3-6*A*B*C-6*E*A**2,E-e,y-10,B-24])

#soln_2 = solve([A*x**2+B*x+C-N, A*y**2+B*y+C-N, A*z**2+B*z+C, A*x+A*y+B, B**2-4*A*C-d**2, B**3-6*A*B*C-6*e*A**2, B**2-4*A*(C-N)-D**2, B**3-6*A*B*C-6*E*A**2, h*z-k, A*k**2+B*h*k+C*h**2, k**2-h*k*(x+y)+h**2*x*y+N, 2*k-h*(x+y)-H, D**2-d**2-N*r, A-4, d-12])

#this one is faster

#soln_2 = solve([A*x**2+B*x+C-N, A*y**2+B*y+C-N, A*z**2+B*z+C, A*x+A*y+B, B**2-4*A*C-d**2, B**3-6*A*B*C-6*e*A**2, B**2-4*A*(C-N)-D**2, B**3-6*A*B*(C-N)-6*E*A**2, D**2-d**2-N*r, E-e-N*u, x-_x_0, B-_B_0])

#soln_2 = solve([A*x**2+B*x+C-N, A*y**2+B*y+C-N, A*z**2+B*z+C, B**2-4*A*C-d**2, B**3-6*A*B*C-6*e*A**2, B**2-4*A*(C-N)-D**2, B**3-6*A*B*(C-N)-6*E*A**2, 2*A*x+B-D, 2*A*y+B+D, 2*A*z+B-d,D**2-d**2-N*r, E-e-N*u, x-_x_0, B-_B_0])

soln_2 = solve([A*x**2+B*x+C-N, A*y**2+B*y+C-N, A*z**2+B*z+C, B**2-4*A*C-d**2, B**3-6*A*B*C-6*e*A**2, B**2-4*A*(C-N)-D**2, B**3-6*A*B*(C-N)-6*E*A**2, 2*A*x+B-D, 2*A*y+B+D, 2*A*z+B-d,2*A*x**3+3*B*x**2+6*(C-N)*x+2*A*y**3+3*B*y**2+6*(C-N)*y-6*E,D**2-d**2-N*r, E-e-N*u, x-_x_0, B-_B_0])

print(soln_2)