#!/bin/sh
docker build -t thruthefilter .
docker run -p 1338:1338 thruthefilter

