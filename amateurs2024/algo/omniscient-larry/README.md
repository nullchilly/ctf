![](./omniscient-larry.png)

# Problem

Given a string s of length n `(n <= 1e5)` only contains `o, z, l, y`

Initially there is a string t = `o || z || l || y`, in one step you can change any character according to the following rule:

```
o -> lo, o -> oy
z -> yz, z -> zl
l -> ll, l -> oz
y -> yy, y -> zo
```
Count number of strings that can be reached from t and is a permutation of s mod `1e9 + 9`

### Input

```
4
olozy
ollzy
oozzlllyyyyy
ooozzzzllllyyy
```

### Output

```
4
5
144
700
```

### Explanation

In the first test case

```
o -> lo -> llo -> ozlo -> oyzlo
o -> lo -> llo -> ozlo -> ozloy
o -> lo -> llo -> lozo -> loyzo
o -> lo -> llo -> lozo -> lozoy
```

In the second test case
```
l -> ll -> lll -> ozll -> oyzll
l -> ll -> loz -> lozl -> loyzl
l -> ll -> lll -> lloz -> lloyz
z -> zo -> zlo -> zloy -> zlloy
y -> zo -> yzo -> yzlo -> yzllo
```

# Solution

Define `o, z, l, y` as the count of `'o'`, `'z'`, `'l'` and `'y'`.  Notice that t is a permutation of s if `s.{o, z, l, y} = t.{o, z, l, y}`

After running [brute.rs](./brute.rs) on `s = oozlyy`

```
oyyzlo
oyzloy
ozloyy
loyyzo
loyzoy
lozoyy
Result: 6
```

And on `s = oozzlyy`
```
oyyzozl
oyyzloz
oyzoyzl
oyzloyz
ozoyyzl
ozloyyz
loyyzoz
loyzoyz
lozoyyz
zlozoyy
zloyzoy
zloyyzo
zozloyy
zoyzloy
zoyyzlo
yzlozoy
yzloyzo
yzozloy
yzoyzlo
yyzlozo
yyzozlo
Total: 21
```

I found this pattern

```py
if abs(z - o) > 1:
  ans = 0
else if o == z:
  - ...o...z...o...z...
  - ...z...o...z...o...
else
  - ...z...o...z...
  - ...o...z...o...
```

Where a box `...` is either `empty` or `l..l` or `y...y`. The count of boxes with l is within one unit of the count of boxes with y

Then just do [stars and bars](https://cp-algorithms.com/combinatorics/stars_and_bars.html). The number of ways to put n  identical objects into  k  labeled boxes is `C(n - k + 1, n)`

Think of `z, o` as bars and `l, y` as stars. There are 3 cases:

- `o = z`
    - `...z...o...z...o...`
        - Number of boxes is `o * 2 + 1`
        - Number of ways to put l into `o` boxes is `C(l + o - 1, l)`
        - Number of ways to put y into `o + 1` boxes is `C(y + o, y)`
        - ➜ ans = `C(l + o - 1, l) * C(y + o, y)`
    - `...o...z...o...z...`
        - Number of boxes is `o * 2 + 1`
        - Number of ways to put y into `o` boxes is `C(y + o - 1, y)`
        - Number of ways to put l into `o + 1` boxes is `C(l + o, l)`
        - ➜ ans = `C(y + o - 1, y) * C(l + o, l)`
- `o > z`
    - `...o...z...o...`
        - Number of boxes is `o * 2`
        - Number of ways to put y into `o` boxes is `C(y + o - 1, y)`
        - Number of ways to put l into `o` boxes is `C(l + o - 1, l)`
        - ➜ ans = `C(y + o - 1, y) * C(l + o - 1, l)`
- `o < z`
    - `...z...o...z...`
        - Number of boxes is `z * 2`
        - Number of ways to put y into `z` boxes is `C(y + z - 1, y)`
        - Number of ways to put l into `z` boxes is `C(l + z - 1, l)`
        - ➜ ans = `C(y + z - 1, y) * C(l + z - 1, l)`

```py
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
        return (C(y + o, y) * C(l + o - 1, l) +
                C(y + o - 1, y) * C(l + o, l)) % MOD
    elif o > z:
        return C(y + o - 1, y) * C(l + o - 1, l) % MOD
    else:
        return C(y + z - 1, y) * C(l + z - 1, l) % MOD

for s in arrs:
    nc.sendline(str(solve(s)).encode())
nc.interactive()

```

```sh
> python solve.py
[+] Opening connection to chal.amt.rs on port 1411: Done
[*] Switching to interactive mode
Yay! Good job, here's your flag and remember to orz larry: amateursCTF{orz-larry-how-is-larry-so-orz-5318bfae97e201a66dc12069058e1b11d971ac7b24a8c87b2aec826dd39098d4}
```