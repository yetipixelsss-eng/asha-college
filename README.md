# Asha School / College Website

A full-stack React + Node.js website for **Asha School/College, Kathmandu-31, Nepal**.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### 1. Start the Backend Server

```bash
cd server
npm install
npm run dev      # development (nodemon)
# OR
npm start        # production
```
Server runs on **http://localhost:5000**

### 2. Start the React Frontend

```bash
cd client
npm install
npm start
```
App runs on **http://localhost:3000**

---

## 📁 Project Structure

```
ashacollege/
├── client/                     # React frontend
│   └── src/
│       ├── assets/logo.png     # Asha logo
│       ├── components/
│       │   ├── Navbar.jsx/.css        # Responsive navbar with dropdown
│       │   ├── Hero.jsx/.css          # Hero slider section
│       │   ├── About.jsx/.css         # About us with animated counters
│       │   ├── Events.jsx/.css        # Events & blog with filtering
│       │   ├── SchoolCollege.jsx/.css # School and College sections
│       │   ├── Aiesec.jsx/.css        # AIESEC section
│       │   ├── Contact.jsx/.css       # Contact form + map
│       │   └── Footer.jsx/.css        # Site footer
│       ├── App.js              # Main app
│       └── index.css           # Global styles & CSS variables
│
└── server/                     # Node.js / Express backend
    └── index.js               # API routes
```

## 🎨 Features

- **Responsive navbar** with School/College dropdown
- **Hero slider** with auto-play and Ken Burns effect
- **Animated counters** in About section
- **Events & Blog** with category filtering
- **School section** with programs and facilities
- **College (+2) section** with tabbed programs (Science, Management, Humanities)
- **AIESEC section** with opportunities
- **Contact form** with validation and API submission
- **Scroll-to-top** button
- **Fully responsive** (mobile, tablet, desktop)

## 🌈 Color Scheme

| Color | Hex |
|-------|-----|
| Maroon (primary) | `#8B1A1A` |
| Gold (accent) | `#C9A84C` |
| Navy (dark) | `#1A2340` |
| Cream (background) | `#FDF8F0` |

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/about` | About Us content |
| GET | `/api/events` | Events and blog posts |
| GET | `/api/school` | School info and programs |
| GET | `/api/college` | College info and programs |
| GET | `/api/aiesec` | AIESEC info |
| GET | `/api/contact` | Contact information |
| POST | `/api/contact/submit` | Submit contact form |

