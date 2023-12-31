

# This file was *autogenerated* from the file pushup.sage
from sage.all_cmdline import *   # import sage library

_sage_const_2 = Integer(2); _sage_const_64 = Integer(64); _sage_const_63 = Integer(63); _sage_const_100 = Integer(100); _sage_const_303 = Integer(303); _sage_const_8 = Integer(8)
from Crypto.Util.number import *

flag = b"Flag{}"
p = random_prime(_sage_const_2 **_sage_const_64 ,False,_sage_const_2 **_sage_const_63 )
k = _sage_const_100 
N = p**k
R = PolynomialRing(Zmod(N), implementation="NTL", names=('x',)); (x,) = R._first_ngens(1)

pol = R([getrandbits(_sage_const_303 ) for _ in range(_sage_const_8 )])
rem = pol(bytes_to_long(flag))
pol2 = pol - rem

print(p)
print(pol2)

