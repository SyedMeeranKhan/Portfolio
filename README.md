# Animated Portfolio – Syed Meeran Khan

A modern, fully animated, professional portfolio website built with **React (Vite)** for the frontend and **PHP + MySQL** for the backend. Features include smooth scroll animations (AOS), responsive dark theme, modular code structure, and a working contact form that saves messages to your MySQL database.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), CSS (custom dark theme), AOS (Animate On Scroll), Axios
- **Backend:** PHP (REST endpoint), MySQL
- **Other:** XAMPP/WAMP/LAMP for local PHP/MySQL development

---

## 🚀 Features

- ⚡ **Animated Scroll:** All portfolio sections animate smoothly as you scroll.
- 👤 **Hero, About, Projects, Contact, Footer:** Modular, professional sections.
- 📨 **Contact Form:** Sends messages to your database (with error handling).
- 🌙 **Sleek Dark Theme:** Modern, accessible, and fully responsive.
- 💼 **Project Cards:** Stylish, animated, with external links.
- 🔒 **Secure Backend:** CORS enabled, input validation, prepared SQL.
- 📱 **Mobile Friendly:** Works great on all screen sizes.

---

## 📁 Directory Structure

```
ANIMATED_PORTFOLIO/
│
├── beckend/                   # PHP + MySQL backend (XAMPP/WAMP/LAMP)
│   ├── db.php                 # Database connection config
│   ├── submit-form.php        # Endpoint to handle contact POST
│   └── uploads/               # (Optional, for file uploads)
│
├── prot-react-app/            # React frontend (Vite)
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── assets/            # Images, icons, etc.
│       ├── App.jsx            # Main app component
│       ├── App.css            # Global styles (dark theme)
│       ├── main.jsx           # ReactDOM rendering
│       ├── Navbar.jsx         # Navigation bar
│       ├── Hero.jsx           # Hero section
│       ├── About.jsx          # About section
│       ├── Projects.jsx       # Projects showcase
│       ├── Contact.jsx        # Contact form
│       └── Footer.jsx         # Footer
│   ├── package.json
│   └── README.md
└── README.md                  # (This file)
```

---

## 🖥️ Local Setup Instructions

### 1. **Backend (PHP + MySQL)**
- Place the `beckend/` folder inside your XAMPP/WAMP `htdocs` directory.
- Create a MySQL database named `portfolio_db`.
- Run this SQL to create the contact form table:
    ```sql
    CREATE TABLE contact_form (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```
- Adjust your database credentials in `beckend/db.php` as needed.

### 2. **Frontend (React)**
- Open a terminal and navigate to `prot-react-app/`.
- Install dependencies:
    ```bash
    npm install
    ```
- Start the development server:
    ```bash
    npm run dev
    ```
- Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. **Connecting Frontend to Backend**
- Update the `BACKEND_URL` in `Contact.jsx` to match your local PHP endpoint, e.g.:
    ```js
    const BACKEND_URL = "http://localhost/ANIMATED_PORTFOLIO/beckend/submit-form.php";
    ```

---

## 🌟 Customization

- Update your personal info, bio, and project details in `Hero.jsx`, `About.jsx`, and `Projects.jsx`.
- Add or replace images/icons in `src/assets/`.
- Modify color schemes, fonts, and layout in `App.css` for further personalization.
- Add more sections or components as desired!

---

## 📝 License

This project is open-source and free to use for personal or educational purposes.