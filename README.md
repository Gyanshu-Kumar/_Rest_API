# REST API with Node.js and Express

This project is a RESTful API built using Node.js and Express. It provides endpoints to manage various resources and supports CRUD operations. The API is designed to be efficient, scalable, and easy to use.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete resources.
- **Authentication**: Secure endpoints using JWT authentication.
- **Validation**: Input validation using Joi.
- **Error Handling**: Robust error handling mechanisms.
- **Logging**: Logging requests and errors using Morgan.

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps to Setup

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Environment variables**:

    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-db-name
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the server**:
    ```sh
    npm run dev
    ```

    The server will start on `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login and get a token

### Users

- **GET /api/users**: Get all users
- **GET /api/users/:id**: Get a single user by ID
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

### Example Usage

1. **Register a new user**:
    ```sh
    POST /api/auth/register
    Content-Type: application/json

    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "yourpassword"
    }
    ```

2. **Login a user**:
    ```sh
    POST /api/auth/login
    Content-Type: application/json

    {
        "email": "john.doe@example.com",
        "password": "yourpassword"
    }
    ```

3. **Get all users**:
    ```sh
    GET /api/users
    Authorization: Bearer your_jwt_token
    ```

## Project Structure

```
.
├── config
│   └── db.js           # Database connection configuration
├── controllers
│   ├── authController.js
│   └── userController.js
├── middleware
│   ├── authMiddleware.js
│   └── errorMiddleware.js
├── models
│   └── User.js
├── routes
│   ├── authRoutes.js
│   └── userRoutes.js
├── utils
│   └── validate.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Contributing

We welcome contributions to enhance this REST API. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using this REST API. We hope it meets your needs and simplifies your development process. If you have any questions or feedback, please feel free to contact us.

Happy Coding!
