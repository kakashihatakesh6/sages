# 🎓 SAGES - Smart Academic & General Education System

## 🚀 Overview
**SAGES** is a modern school management system designed to streamline academic and administrative workflows. Built with **AWS, Node.js, and Next.js**, it provides an intuitive interface for students, teachers, and administrators to manage educational activities efficiently.

## ✨ Features
- 🏫 **School Management** - Organize student records, classes, and staff details.
- 📚 **Course & Curriculum** - Manage syllabus, lessons, and assignments.
- 🎓 **Student Dashboard** - Track progress, attendance, and grades.
- 🧑‍🏫 **Teacher Panel** - Assign tasks, schedule classes, and communicate with students.
- 💳 **Fees & Payments** - Secure payment gateway for fee collection.
- 🔔 **Notifications** - Instant updates via email & SMS.
- 📊 **Reports & Analytics** - Insights into student performance & attendance.
- 🔒 **Role-Based Access Control** - Secure access management for different users.

---

## 🏗️ Tech Stack
### 🖥️ **Frontend:**
- ⚛️ **Next.js** (React-based framework)
- 🎨 **Tailwind CSS** (Modern UI styling)

### ⚙️ **Backend:**
- 🟢 **Node.js** (Server-side scripting)

### ☁️ **Cloud & Deployment:**
- 🌍 **AWS** (Cloud services & hosting)
- 🐳 **Docker** (Containerization)
- ☸️ **Kubernetes** (Orchestration)

### 🗄️ **Database:**
- 🛢 **PostgreSQL** (Relational database)
- 📂 **MongoDB** (For flexible data storage)

---

## 📂 Project Structure
```
SAGES/
│── components/          # React components for the frontend
│   ├── Navbar.js       # Navigation bar component
│   ├── Footer.js       # Footer component
│   ├── Carousel.js     # Image carousel component
│   ├── Layout.js       # Layout component for page structure
│── middleware/         # Middleware for API handling
│   ├── mongoose.js     # MongoDB connection middleware
│── models/             # Database models
│   ├── User.js         # User model
│   ├── Event.js        # Event model
│   ├── Faculty.js      # Faculty model
│   ├── Gallery.js      # Gallery model
│   ├── Notice.js       # Notice model
│   ├── Upload.js       # Upload model
│── pages/              # Next.js pages
│   ├── index.js        # Home page
│   ├── about.js        # About page
│   ├── contact.js      # Contact page
│   ├── academic/       # Academic-related pages
│   ├── activities/     # Activities-related pages
│── public/             # Static assets (images, logos)
│── styles/             # CSS styles
│   ├── globals.css     # Global styles
│   ├── Home.module.css # Home page-specific styles
│── .env                # Environment variables
│── docker-compose.yml  # Docker setup
│── README.md           # Project documentation
```

---

## 🚀 Installation & Setup
### 🔹 Prerequisites
Ensure you have the following installed:
- 🟢 **Node.js** (16+)
- 🛢 **PostgreSQL / MongoDB**
- 🐳 **Docker** (for containerized deployment)

### 📥 Clone the Repository
```sh
git clone https://github.com/your-username/SAGES.git
cd SAGES
```

### 📌 Set Up Environment Variables
Create a `.env` file in the root directory and configure the required environment variables:
```sh
PORT=8000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
AWS_ACCESS_KEY=your_aws_key
AWS_SECRET_KEY=your_aws_secret
```

### 🔧 Install Dependencies
```sh
cd frontend
npm install

cd ../backend
npm install
```

### ▶️ Start the Application
#### **Option 1: Local Development**
Run frontend and backend separately:
```sh
# Start backend (Node.js API)
cd backend
npm run dev

# Start frontend (Next.js)
cd ../frontend
npm run dev
```

#### **Option 2: Using Docker**
```sh
docker-compose up --build
```

---

## 🌍 API Endpoints
### ✅ Health Check
- `GET /api/health` - Check if the server is running.

### 🔗 Core API Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/students`  | Fetch all students |
| POST   | `/api/students`  | Add a new student |
| GET    | `/api/teachers`  | Fetch all teachers |
| POST   | `/api/teachers`  | Add a new teacher |
| GET    | `/api/courses`   | Retrieve course list |
| POST   | `/api/payments`  | Process fee payments |

---

## 🎯 Deployment
For production, ensure `ENV=production` in your `.env` file and set up a release build:
```sh
npm run build --prefix frontend
npm run build --prefix backend
```
Run the compiled application:
```sh
node backend/server.js
```
Or deploy using Docker:
```sh
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🤝 Contributing
We welcome contributions! 🚀
1. 🍴 Fork the repository.
2. 🌱 Create a new branch (`git checkout -b feature-branch`).
3. ✨ Commit your changes (`git commit -m "Add new feature"`).
4. 🚀 Push to the branch (`git push origin feature-branch`).
5. 📩 Open a Pull Request.

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✍ Author
👤 **Nikhil Dasar**
- GitHub: [@kakashihatakesh6](https://github.com/kakashihatakesh6)
- LinkedIn: [Nikhil Dasar](https://www.linkedin.com/in/nikhildasar/)
This project is licensed under the **MIT License**.

