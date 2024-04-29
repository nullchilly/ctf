import os
from Crypto.Cipher import AES
from Crypto.Util import Counter
import zlib

# The actual AES key used (16 bytes)
AESKey = os.urandom(16)

ctr = Counter.new(128)

# Create a new AES object that uses the above details. CTR mode makes it a stream cipher.
aes = AES.new(AESKey, AES.MODE_CTR, counter=ctr)

# The banner that the players are greeted with
BANNER = "\t\tWelcome to the Keygen server.\n\t\t"
BANNER += "=" * 30
BANNER += "\n[+] All access is monitored and any unauthorized access will be treated as CRIME\n"

SECRET = 'Key:'  # You should replace this with the actual secret

# While the client continues to send us stuff
while True:
    data = input()
    data = zlib.compress((SECRET + data).encode())

    # Encrypt the data using AES stream mode
    data = aes.encrypt(data)
