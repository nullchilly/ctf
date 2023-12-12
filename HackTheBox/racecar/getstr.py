import re

def rev_str(dump):
  list = dump.split()[:-1]
  for hex in list:
    str = ""
    # print(hex)
    arr = re.findall("..", hex)
    for c in arr:
      if c != "0x":
        # print(chr(int(c, 16)),end='')
        cur = chr(int(c, 16))
        if ord(cur) < 128:
          str += cur
    print(str[::-1], end='')
rev_str("0x565b31a4 0xffffffff 0x41cb1810 0x414141 0xbcf61b00 0xffbed000 0xf7ee8e34 0xf7cc8b09")
# print(chr(int("41", 16)))
