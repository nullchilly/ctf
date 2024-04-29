#!/bin/bash
chal="${CHAL:-svatt2016-web-curl}"
docker rm -f "$chal"
docker build --tag="$chal" .
docker run -p 1337:1337 --rm --name="${chal}" "${chal}"