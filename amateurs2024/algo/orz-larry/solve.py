from pwn import *

nc = remote('chal.amt.rs', 1412)

MOD = 10**9 + 9

t = int(nc.recvline().decode())
arrs = [nc.recvline().strip().decode() for _ in range(t)]

for s in arrs:
    dp = [1]
    last = {}
    for i, x in enumerate(s):
        dp.append(dp[-1] * 2)
        if x in last:
            dp[-1] -= dp[last[x]]
        last[x] = i

    nc.sendline(str(dp[-1] % MOD).encode())
nc.interactive()