# Netflix Login

A full-stack Netflix-style login page built with **React + Vite** for the frontend and **Node.js + Express** for the backend.

The project demonstrates frontend form handling, validation, API communication, mock authentication, error handling, and successful login navigation to a Dashboard.

## 🚀 Features

- Netflix-inspired responsive login UI
- Email and password input fields
- Frontend validation for empty fields
- Express backend login API
- Mock/static credential authentication
- React Fetch API integration
- Invalid login error handling
- Loading state during login
- Successful login → Dashboard
- Logout functionality
- Responsive design
- GitHub-ready project structure

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- JavaScript
- CSS
- Fetch API

### Backend
- Node.js
- Express.js
- CORS

## 📁 Project Structure

```text
netflix-login/
│
├── backend/
│   ├── package.json
│   └── server.js
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── Dashboard.css
│   ├── Dashboard.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🔐 Test Login Credentials

Use the following mock credentials:

**Email:** `test@gmail.com`

**Password:** `123456`

No database is used. The backend checks the credentials against static mock data.

## ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/JeevithaPaul/Netflix---Login.git
```

```bash
cd Netflix---Login
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

### 4. Install backend dependencies

Open another terminal and move into the backend folder:

```bash
cd backend
```

Then:

```bash
npm install
```

### 5. Start the backend

```bash
node server.js
```

The backend will run at:

```text
http://localhost:5000
```

## 🔄 Login Flow

```text
User enters email and password
            ↓
Frontend validation
            ↓
React sends POST request
            ↓
Express /login API
            ↓
Mock credential validation
            ↓
     ┌───────────────┐
     │               │
  Invalid          Valid
     │               │
     ↓               ↓
Error message     Dashboard
```

## 🧪 Testing

The application supports:

- Empty email/password → frontend validation error
- Incorrect credentials → backend authentication error
- Correct credentials → Dashboard
- Logout → returns to login page

## 🎯 Project Objective

The objective of this project is to demonstrate a complete basic full-stack login flow using React and Node.js/Express, including frontend validation, backend API communication, mock authentication, and error handling.

## 👩‍💻 Author

**Jeevitha Paul**

Built as a Full Stack Development project.