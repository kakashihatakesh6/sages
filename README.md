# 🛍️ Shop-Vista (E-Commerce)

![Shop-Vista Logo](./logo-shop-round.png)

## 🚀 Introduction
Welcome to **Shop-Vista**, a modern and seamless **E-Commerce** platform designed for an interactive online shopping experience. Built with **Next.js**, **MongoDB**, and **Node.js**, it ensures secure transactions with **Razorpay** payment integration, providing a smooth and reliable checkout process.

---

## 📌 Table of Contents
- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [⚡ Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features
- 🎨 **Frontend Development** - Intuitive, interactive, and responsive UI using **Next.js**.
- ⚡ **Backend Implementation** - API handling with **Node.js** and **Express.js**.
- 🗄️ **Database Management** - **MongoDB** for scalable product and user data storage.
- 💳 **Payment Integration** - Seamless **Razorpay** payment gateway.
- 🔒 **User Authentication** - **JWT & NodeMailer** for secure authentication & authorization.
- 📦 **Order & Cart Management** - Smooth checkout and order tracking.

---

## 🛠 Technologies Used
### 🌐 **Frontend**
- ⚛️ **Next.js**, **React.js**, **Redux**, **JavaScript**

### ⚙️ **Backend**
- 🟢 **Node.js**, **Express.js**, **Next.js**, **JavaScript**

### 🛢 **Database**
- 📂 **MongoDB**, **Mongoose**

### ☁️ **DevOps & Deployment**
- 🐳 **Docker**
- ▲ **Vercel**, 🌍 **Netlify**

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/kakashihatakesh6/shop-vista.git
cd shop-vista
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Application
```sh
npm run dev
```

---

## 📂 Project Structure
```
shop-vista/
│── pages/               # Contains all Next.js routes
│   ├── api/             # API routes for backend logic
│   ├── admin/           # Admin panel files
│   ├── homeproduct/     # Dynamic product pages by slug
│   ├── product/         # Static product category pages
│── components/          # Reusable UI components
│   ├── OrderList.js     # Displays list of orders
│   ├── OrderDetails.js  # Displays details of a specific order
│   ├── Navbar.js        # Navigation bar
│   ├── Footer.js        # Footer component
│   ├── CartButton.js    # Button for shopping cart
│   ├── NewCart.js       # Component to manage cart items
│── models/              # Mongoose models for MongoDB
│── middleware/          # Middleware for MongoDB connection
│── public/              # Static assets (logos, images)
│── .env                 # Environment variables
│── docker-compose.yml   # Docker setup
│── README.md            # Project documentation
```

---

## 🚀 Deployment
Easily deploy **Shop-Vista** using:
- ▲ **Vercel**
- 🌍 **Netlify**

```sh
npm run build
npm start
```
For Docker Deployment:
```sh
docker-compose up --build
```

---

## 🤝 Contributing
Want to contribute? Follow these steps:

1️⃣ **Fork the repository**
2️⃣ Create a new branch: `git checkout -b feature/your-feature`
3️⃣ Make your changes and commit: `git commit -m 'Added feature X'`
4️⃣ Push to your branch: `git push origin feature/your-feature`
5️⃣ Open a **Pull Request** 🚀

---

## 📜 License
This project is licensed under the **MIT LICENSE**. See the [LICENSE](LICENSE) file for details.

---

## ✍ Author
👤 **Nikhil Dasar**
- GitHub: [@kakashihatakesh6](https://github.com/kakashihatakesh6)
- LinkedIn: [Nikhil Dasar](https://www.linkedin.com/in/nikhildasar/)
This project is licensed under the **MIT License**.