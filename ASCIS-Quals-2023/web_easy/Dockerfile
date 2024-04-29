# Use an official Python runtime as a base image
FROM python:3

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run python -m http.server with the port specified
CMD ["python", "-m", "http.server", "8000"]
