# Docker Compose Setup for Redis, Node.js, and MongoDB

This repository provides a Docker Compose setup for running Redis, Node.js with Express, and MongoDB. By using Docker Compose, you can easily set up the entire stack with a single command.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

- [Docker](https://docs.docker.com/get-docker/)

## Usage

1.  Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repo.git

    ```

2.  Navigate to the repository directory:

    ```bash
    cd your-repo

3.  Create a .env file in the root directory with the following content:

        
        PORT=8000
        REDIS_HOST=redisdb
        MONGO_HOST=mongodb

    Adjust the values as needed. This file provides environment variables for the services defined in the Docker Compose file.

4.  Start the Docker containers using Docker Compose:
    ```bash
    docker-compose up
    ```
    
    This command will pull the necessary Docker images (if not already present) and start the containers for Redis, Node.js with Express, and MongoDB.

5. Once the containers are up and running, you can access the Node.js application at http://localhost:8000.

## Services and Ports

- Redis: Port `6379`
- Node.js with Express: Port `8000`
- MongoDB: Port `27017`

## Notes

- This setup assumes that you're using the default ports for Redis, MongoDB, and Node.js. If you need to customize the ports or service names, make sure to update the .env file and docker-compose.yml accordingly.

- Docker Compose creates a default network for all services defined in the docker-compose.yml file. The services can communicate with each other using their service names specified in the docker-compose.yml.
