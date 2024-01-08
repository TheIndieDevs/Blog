# Blog
Version 2 of Blog
## Features
## Setup your local
### Prerequisite
- Install [node](https://nodejs.org/en/download) 18.x.
- Install Docker (if using Docker setup).
- Install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) (if not using Docker for the database).

### Quick Start with Docker
The development environment is dockerized for easy setup. Run the entire app (frontend, backend, db) with this commend:
```
docker compose up
```
or follow the instructions below for a manual setup

### Manual Setup
#### Front-end
- To set up the front-end:
  ```
  cd client
  cp .env_template .env
  npm install
  npm run dev
  ```
- Environment variables for the frontend:
  - `VITE_API_BASE_URL` to specify the base URL for the API

#### Back-end
- To set up the back-end:
- Environment variables for the backend:
