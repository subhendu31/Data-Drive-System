# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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
