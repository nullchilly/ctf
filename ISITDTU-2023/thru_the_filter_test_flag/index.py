with open('lol.txt') as p:
    check = p.read()
for index,value in enumerate(check.split(',')):
    if "<class 'subprocess.Popen'>" in value:
        print(index)
