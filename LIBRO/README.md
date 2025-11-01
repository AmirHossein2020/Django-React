![1000016835](https://github.com/user-attachments/assets/7feba1f6-5fa9-421c-8cc2-2f180fe90a44)

# 📚 LIBRO – Online Book Library System

A modern **Full Stack Library Management & Book Ordering Platform** built with **Django REST Framework + React.js**, designed and prototyped entirely in **Figma** 🎨  

---

## 🌟 Overview

**LIBRO** is a sleek, user-friendly platform that allows users to browse, search, and order books online.  
The project integrates a **powerful Django backend** with a **responsive React frontend** — ensuring fast performance, clear structure, and elegant design.

> 💡 The entire UI/UX of LIBRO was designed in **Figma**, emphasizing clean layouts, color harmony, and consistent typography across all pages.

---

## 🧱 Project Structure
---

## 🧩 Main Features

### 🖥 Frontend (React)
- 💫 Designed entirely based on a **custom Figma prototype**
- ⚡ Single Page Application (SPA) with **React Router**
- 🎨 Consistent header and footer with modern glass-style overlays
- 📚 Book categories with clean grid layout
- 🔍 Real-time book search functionality
- 📬 Book Order form connected to Django API
- 📞 Contact and About pages
- 🔗 Axios integration for API communication

### ⚙️ Backend (Django REST Framework)
- Models:
  - `Book`
  - `Category`
  - `BookOrder`
  - `Contact`
  - `About`
- RESTful API with endpoints for books, categories, orders, and more
- CORS enabled for React frontend
- JSON-based API responses

---

## 🚀 Installation Guide

### 🧠 Backend Setup (Django)

```bash
# Clone the repository
git clone https://github.com/yourusername/LIBRO.git
cd LIBRO/backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # on Windows
# source venv/bin/activate  # on Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start backend server
python manage.py runserver
