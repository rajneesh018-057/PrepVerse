🚀PrepVerse

AI-powered mock interview platform built with MERN stack, Redis caching, Docker, and Google Authentication.

✨ Features
🔐 Google Authentication
🤖 AI-powered Interview Question Generation
📄 Resume-based Interview Analysis
⚡ Redis Caching for Fast Responses
💳 Razorpay Payment Integration
👤 JWT Authentication & Authorization
🧠 AI-based Interview Evaluation
🐳 Fully Dockerized System (Client + Server + DB + Cache)
📦 Optimized Backend Performance
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Router DOM
Backend
Node.js
Express.js
MongoDB
Mongoose
Authentication
JWT
Google OAuth
Caching & Performance
Redis
Docker
Payments
Razorpay
📂 Folder Structure
InterviewIQ/
│
├── client/        # Frontend (React)
│
├── server/        # Backend (Node + Express)
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── models/
│   ├── config/
│
├── docker-compose.yml
└── README.md
🔑 Environment Variables
Server .env
PORT=8000

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

REDIS_HOST=redis
REDIS_PORT=6379

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
⚙️ Installation (Manual Setup)
Clone Repository
git clone httpsz//github.com/rajneesh018-057/Interview.ai.git
cd Interview.ai
Install Dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
🐳 Docker Setup (Recommended)

This project is fully dockerized and includes:

React frontend
Node.js backend
MongoDB database
Redis cache
🚀 Run Entire Project with Docker

From project root:

docker-compose up --build
🌐 Access Application
Service	URL
Frontend	http://localhost:3000
Backend API	http://localhost:8000
MongoDB	mongodb://localhost:27017
Redis	localhost:6379
🛑 Stop Containers
docker-compose down
🐳 Docker Architecture
Client (React)
     ↓
Backend (Node.js + Express)
     ↓
Redis (Cache Layer)
     ↓
MongoDB (Database)
⚡ Redis Caching

Redis is used for:

AI-generated interview questions caching
Faster API response time
Reduced database load
Improved performance

Example flow:

Request → Backend → Redis Check → MongoDB / AI → Response → Cache Store
📦 Redis Setup (Docker Service)
redis:
  image: redis:7
  container_name: redis
  ports:
    - "6379:6379"
Backend connects via:

REDIS_HOST=redis
REDIS_PORT=6379
🚀 Run Without Docker (Optional)
Start Backend
cd server
npm run dev
Start Frontend
cd client
npm run dev
🔮 Future Improvements
Voice-based AI Interviews 🎤
WebSocket real-time interviews ⚡
Advanced analytics dashboard 📊
AI scoring improvements 🧠
Admin panel 👨‍💻
👨‍💻 Author

Rajneesh Kumar

GitHub:
https://github.com/rajneesh018-057
