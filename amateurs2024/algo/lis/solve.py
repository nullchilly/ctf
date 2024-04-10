from pwn import *

nc = remote('chal.amt.rs', 1410)

# Modified https://github.com/cheran-senthil/PyRival/blob/master/pyrival/misc/lis.py to return index instead of value
def lis(nums, cmp=lambda x, y: x < y):
    P = [0] * len(nums)
    M = [0] * (len(nums) + 1)
    L = 0

    for i in range(len(nums)):
        lo, hi = 1, L

        while lo <= hi:
            mid = (lo + hi) // 2
            if cmp(nums[M[mid]], nums[i]):
                lo = mid + 1
            else:
                hi = mid - 1

        newL = lo
        P[i] = M[newL - 1]
        M[newL] = i

        L = max(L, newL)

    S = [0] * L
    k = M[L]

    for i in range(L - 1, -1, -1):
        S[i], k = k, P[k]

    return S

t = int(nc.recvline().decode())
arrs = [list(map(int, nc.recvline().split())) for _ in range(t)]

for a in arrs:
    # negative index is also valid
    ans = [x - len(a) for x in lis(a + a)]

    nc.sendline((' '.join(map(str, ans))).encode())
nc.interactive()