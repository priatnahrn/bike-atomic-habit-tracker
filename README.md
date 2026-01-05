# BIKE - Ride Your Habits 🚲

> **Live Demo:** [bebike.online](https://bebike.online)

**BIKE** is a modern, gamified habit tracking application designed to help users build and maintain consistent daily routines. By visualizing progress and providing insightful analytics, BIKE empowers users to "ride" their way to a better version of themselves.

## ✨ Features

- **🎯 Robust Habit Tracking**
  - Create daily, weekly, and monthly habits.
  - mark habits as complete with a satisfying interaction.
  - Track streaks to build momentum.

- **📊 Visual Analytics & Reports**
  - View detailed progress reports.
  - Analyze completion rates and streaks over time.
  - Dashboard overview with daily goals.

- **🌍 Bilingual Support (ID/EN)**
  - Fully localized for **Indonesian** and **English** users.
  - Instantly switch languages without reloading.

- **🔐 Secure Authentication**
  - User registration and login protected by JWT (JSON Web Tokens).
  - Secure password hashing with bcrypt.

- **💬 User Feedback System**
  - Integrated feedback form for collecting user suggestions and bug reports.

## 🛠️ Tech Stack

This project is a Full Stack application built with modern web technologies:

### Frontend
- **React.js (Vite)**: For a fast, responsive, and dynamic user interface.
- **Tailwind CSS**: For clean, utility-first styling and responsive design.
- **Context API**: For lightweight global state management (Language, Auth).
- **Lucide React**: For beautiful, consistent iconography.

### Backend
- **Node.js & Express.js**: RESTful API to handle business logic and data flow.
- **Prisma ORM**: For type-safe database interactions and schema management.
- **PostgreSQL**: Robust relational database for storing user and habit data.
- **JSON Web Tokens (JWT)**: For stateless, secure user authentication.

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v18+)
- PostgreSQL (Local or Cloud URL)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/bike-habit-tracker.git
    cd bike-habit-tracker
    ```

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory:
        ```env
        DATABASE_URL="postgresql://user:password@localhost:5432/bike_db"
        JWT_SECRET="your_super_secret_key"
        PORT=3000
        FRONTEND_URL="http://localhost:5173"
        ```
    *   Run migrations:
        ```bash
        npx prisma migrate dev --name init
        ```
    *   Start the server:
        ```bash
        npm start
        ```

3.  **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```
    *   Create a `.env` file in the `frontend` directory:
        ```env
        VITE_API_URL="http://localhost:3000/api"
        ```
    *   Start the development server:
        ```bash
        npm run dev
        ```

4.  **Open the App**
    Visit `http://localhost:5173` in your browser.

## 📂 Project Structure

```
bike/
├── frontend/          # React Vite application
│   ├── src/
│   │   ├── components/
│   │   ├── context/   # Language and Auth contexts
│   │   ├── pages/     # Route pages
│   │   └── utils/     # Translations and helpers
│   └── ...
├── backend/           # Express API
│   ├── prisma/        # Database schema
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── routes/
│   └── ...
└── README.md
```

## 🛡️ License

This project is licensed under the MIT License.

---
*Built with SPIRIT by Herlin Priatna using React & Express.*
