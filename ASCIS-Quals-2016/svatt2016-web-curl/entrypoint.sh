#!/bin/bash

# Secure entrypoint
chmod 600 /entrypoint.sh
FLAG=`cat /flag.txt`
sed "s|FLAG_HERE|$FLAG|g" -i /www/flag.php

echo "" > /flag.txt
exec "$@"