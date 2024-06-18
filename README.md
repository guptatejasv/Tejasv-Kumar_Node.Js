# Todo App

A simple Todo application with authentication using Node.js, Express, and MongoDB.

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file with the following variables:
   - PORT
   - MONGO_URI
   - JWT_SECRET
4. Run `npm start` to start the server

## API Endpoints

### Auth

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Todos

- `POST /api/todos`: Create a new todo
- `GET /api/todos`: Get all todos with pagination
- `GET /api/todos/:id`: Get a single todo
- `PUT /api/todos/:id`: Update a todo
- `DELETE /api/todos/:id`: Delete a todo
