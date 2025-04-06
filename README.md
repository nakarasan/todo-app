# todo-app


Todo App - Setup Instructions

This is a full-stack Todo application that includes a React frontend, .NET Core backend, and MySQL database. Everything is containerized using Docker.

Step 1: Clone the repository
Use the following command to clone the project:
git clone https://github.com/nakarasan/todo-app.git

Step 2: Navigate to the project directory
Once cloned, go into the project folder:
cd todo-app

The project contains:
- A frontend directory with the React app
- A backend directory with the .NET Core Web API
- A docker-compose.yml file to orchestrate all services

Step 3: Build and run the Docker containers
Run the following command to build the Docker images and start the containers in the background:
docker-compose up --build -d

Step 4: Verify that containers are running
Use the following command to check that all containers are up and running:
docker ps

You should see the following containers listed:
- todo-app-frontend
- todo-app-backend
- mysql:8.0

Step 5: Open the application
Open your browser and visit the following URL:
http://localhost:3000/

This will load the frontend of the Todo application.

Technologies Used:
- React
- TypeScript
- .NET Core Web API
- MySQL
- Docker and Docker Compose
