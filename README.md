# 📌 Task Manager REST API

A secure and scalable RESTful API built using Node.js, Express.js, MongoDB, and JWT authentication.  
This project demonstrates backend development with authentication and full CRUD operations.

---

## 🚀 Features

- User Registration & Login system
- JWT-based Authentication
- Protected Routes (Middleware)
- Full CRUD operations for Tasks
- MongoDB database integration (Mongoose)
- MVC Architecture
- Error handling middleware
- Tested using Postman

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- bcryptjs
- Postman

---

## 📁 Project Structure

task-manager-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── utils/
│   └── generateToken.js
│
├── server.js
├── .env
├── package.json

---
## ⚙️ Environment Variables

Create a `.env` file:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

---

## ▶️ Run Project

npm install  
npm run dev  

---

## 📡 API Endpoints

### Auth

POST /api/auth/register  
POST /api/auth/login  

---

### Tasks (Protected)

Authorization: Bearer TOKEN  

POST /api/tasks  
GET /api/tasks  
GET /api/tasks/:id  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

---

## 🔐 Flow

1. Register user  
2. Login user  
3. Get token  
4. Use token in headers  
5. Access tasks API  

---

## 📦 Example Request

POST /api/tasks  

{
  "title": "Learn Node.js",
  "description": "Build REST API project"
}

---

## 📤 Example Response

{
  "_id": "64abc123...",
  "title": "Learn Node.js",
  "description": "Build REST API project",
  "status": "pending",
  "user": "userId"
}

---

## 🧪 Testing

All APIs tested using Postman:
- Register
- Login
- Create Task
- Get Tasks
- Update Task
- Delete Task

---

## 📌 Future Improvements

- Role-based authentication
- Pagination
- Refresh token
- Frontend (React)
- Deployment

---

## 👨‍💻 Author

Shamim Alam  
GitHub:https://github.com/shamim-01/task-manager-api/

---

## ⭐ If you like this project, give a star
