FROM ubuntu:18.04

RUN apt-get update \
 && apt-get install -y libc6-dev-i386 python python-pip build-essential socat \
 && pip install nclib \
 && useradd -ms /bin/bash --uid 31337 ctf \
 && useradd -u 31338 -ms /bin/bash chall

RUN chmod 755 /home/chall
USER chall
WORKDIR /home/chall

CMD cd service/rw && socat -v tcp-l:7777,reuseaddr,fork exec:"python -u ../ro/main.py"
