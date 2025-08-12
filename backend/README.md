# Data Drive System (Backend)

A Google Drive-like backend built with Node.js, Express, MongoDB, and Mongoose. This project provides a RESTful API for file and folder management, user authentication, and file uploads, supporting nested folders and a modern frontend.

---

## 🚀 Features
- User registration and login (JWT-based authentication)
- CRUD operations for files and folders
- Nested folders (any depth, like Google Drive)
- File upload and retrieval
- RESTful API endpoints
- Secure password hashing (bcryptjs)
- CORS enabled for frontend integration

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v20+
- MongoDB (local or remote)

### Installation
1. Clone the repository and navigate to the backend folder:
   ```bash
   cd backend
   npm install
   ```
2. Set up your `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/datadrive
   JWT_SECRET=your_jwt_secret
   ```
3. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT
- `POST /api/drive/folder` — Create folder
- `POST /api/drive/file` — Upload file
- `GET /api/drive/items?parent=<folderId>` — List items in a folder
- `DELETE /api/drive/:id` — Delete file/folder
- `PUT /api/drive/:id` — Rename file/folder

## Notes
- All `/api/drive/*` endpoints require a Bearer token in the `Authorization` header.
- File uploads are stored in the `uploads/` directory.
