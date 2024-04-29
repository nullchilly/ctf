from dpkt import pcap
import base64
text = []
for ts, pkt in pcap.Reader(open('frames.pcap', 'rb')):
    # the SSID has fixed offset
    text.append(base64.b64decode(pkt[15 + 0x20 - 1: -(0x20 - 6)]).decode())

with open("text.txt", "w") as f:
    f.write("\n".join(text))
