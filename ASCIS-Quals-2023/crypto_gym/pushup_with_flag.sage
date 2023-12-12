from Crypto.Util.number import *

flag = b"Flag{wE1l_doNE_hitT1NG_7He_cRYP70_9Ym}"
p = random_prime(2^64,False,2^63)
k = 100
N = p^k
R.<x> = PolynomialRing(Zmod(N), implementation="NTL")

pol = R([getrandbits(303) for _ in range(8)])
rem = pol(bytes_to_long(flag))
pol2 = pol - rem

print(p)
print(pol2)
