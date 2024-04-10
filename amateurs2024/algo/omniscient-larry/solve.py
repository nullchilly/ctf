from pwn import *

MOD = 10**9 + 9

nc = remote('chal.amt.rs', 1411)
n = int(nc.recvline().decode())
arrs = [nc.recvline().strip().decode() for _ in range(n)]

# https://github.com/cheran-senthil/PyRival/blob/master/pyrival/combinatorics/nCr_mod.py
def make_nCr_mod(max_n=3 * 10**5, mod=MOD):
    max_n = min(max_n, mod - 1)

    fact, inv_fact = [0] * (max_n + 1), [0] * (max_n + 1)
    fact[0] = 1
    for i in range(max_n):
        fact[i + 1] = fact[i] * (i + 1) % mod

    inv_fact[-1] = pow(fact[-1], mod - 2, mod)
    for i in reversed(range(max_n)):
        inv_fact[i] = inv_fact[i + 1] * (i + 1) % mod

    def nCr_mod(n, r):
        res = 1
        while n or r:
            a, b = n % mod, r % mod
            if a < b:
                return 0
            res = res * fact[a] % mod * inv_fact[b] % mod * inv_fact[a - b] % mod
            n //= mod
            r //= mod
        return res

    return nCr_mod

C = make_nCr_mod()

def solve(s):
    o, z, l, y = 0, 0, 0, 0
    for i in range(len(s)):
        if s[i] == 'o': o += 1
        if s[i] == 'z': z += 1
        if s[i] == 'l': l += 1
        if s[i] == 'y': y += 1
    if abs(o - z) > 1:
        return 0
    if o == z:
        return (C(l + o - 1, l) * C(y + o, y) +
                C(y + o - 1, y) * C(l + o, l)) % MOD
    elif o > z:
        return C(y + o - 1, y) * C(l + o - 1, l) % MOD
    else:
        return C(y + z - 1, y) * C(l + z - 1, l) % MOD

for s in arrs:
    nc.sendline(str(solve(s)).encode())
nc.interactive()