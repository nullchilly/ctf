from Crypto.Util.number import *
from tqdm import tqdm
from sage.all import pari

p1 = 401327687854144602104262478345650053155149834850813791388612732559616436344229998525081674131271
p2 = 500233813775302774885494989064149819654733094475237733501199023993441312997760959607567274704359
p3 = 969568679903672924738597736880903133415133378800072135853678043226600595571519034043189730269981
e1 = 398119
e2 = 283609
e3 = 272383
c = 892667108084822942574085001670057651402487058709981041256372719207904533151775763099024121500637

def mod_nth_root(x, e, n):
    r, z = pari(f"r = sqrtn(Mod({x}, {n}), {e}, &z); [lift(r), lift(z)]")
    r, z = int(r), int(z)
    roots = [r]
    if z == 0:
        return roots
    t = r
    while (t := (t*z) % n) != r:
        roots.append(t)
    return roots

for r3 in tqdm(mod_nth_root(c, e3, p3)):
    for r2 in mod_nth_root(r3, e2, p2):
        for flag in mod_nth_root(r2, e1, p1):
            flag = long_to_bytes(flag)
            if b'Flag{' in flag:
                print(flag)
