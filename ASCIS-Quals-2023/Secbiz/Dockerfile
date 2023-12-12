FROM alpine:3.18
VOLUME /usr/src/app/public
WORKDIR /usr/src/app
RUN apk add --no-cache \
        uwsgi-python3 \
        python3 \
        cmd:pip3
COPY . .
RUN rm -rf public/*
RUN pip3 install --no-cache-dir -r requirements.txt
# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV BASE_DIR=.

# Run app.py when the container launches
CMD [ "uwsgi", "uwsgi.ini" ]
