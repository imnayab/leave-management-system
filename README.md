# 🧾 Leave Management System
## Live link 
http://16.176.2.233:5173
## 📌 Overview
A simple full-stack Leave Management System where employees can apply for leave and employers can approve or reject requests.

---

## 🚀 Features

### 👨‍💻 Employee
- Signup & Login
- Apply for leave
- View leave status

### 👨‍💼 Employer
- Signup & Login
- View all leave requests
- Approve or Reject leave

---

## 🛠 Tech Stack

- Frontend: Vue.js + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas
- Deployment: AWS EC2

---

## 📂 Project Structure

leave-management/
│
├── backend/
├── frontend/
├── README.md

---

## 🔌 API Endpoints

### Auth
- POST /api/auth/signup
- POST /api/auth/login

### Leave
- POST /api/leave/apply
- GET /api/leave/all
- POST /api/leave/update/:id

---

## ⚙️ Setup Instructions

### Backend
```bash
cd backend
npm install
node server.js
---
cd frontend
npm install
npm run dev

🌐 Deployment

Hosted on AWS EC2

MongoDB Atlas used as cloud database

🎯 Future Improvements

JWT Authentication

Better UI/UX

Role-based dashboards
