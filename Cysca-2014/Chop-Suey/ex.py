import socket
while True:
  clisock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  clisock.connect(("112.137.129.250",1337))
  respdict = dict()
#Recv Key Reset message and Banner
  clisock.recv(1024)
  clisock.recv(1024)
  while len(respdict) < 10000:
    #Send encrypt
    clisock.send("E,"+"A"*25+"\n")
    resp = clisock.recv(1024).strip()
    parts = resp.split(":")
    respdict[parts[0]] = parts[1]
    # print parts
    # if len(respdict) % 200 == 0:
    #   print str(len(respdict))+"/10000"

#Dump the service secret
  clisock.send("D\n")
  secretdata = clisock.recv(1024).strip()
  parts = secretdata.split(":")

#Look for the IV in the dict
  if parts[0] in respdict:
    print "Found secret iv in dict. Dumping responses"
    print " A's response:",respdict[parts[0]]
    print "Secret response:",parts[1]
  else:
    print "Didn't find secret iv in dict. Try again"
