
# Sticky Notes App

A modern, responsive web application for creating and managing digital notes, built with React.

![Sticky Notes App](ScreenShots/HomePage.png)

## 📋Project Description

The **Sticky Notes App** is a simple, modern, and responsive web application built with **React** that allows users to create, edit, delete, and pin digital notes. It’s designed to be a lightweight productivity tool, ideal for managing thoughts, tasks, and reminders—all stored locally in your browser with no backend required.

## 🎯 Key Highlights

- **Add, update, and remove notes** with ease
- **Pin important notes** to keep them prioritized
- **Search functionality** for quick access to specific content
- **Stats page** to track your note-taking habits
- **Responsive layout** works great on both desktop and mobile
- **Built with React**, styled with CSS, and uses **localStorage**

## 🚀 Live Demo

[View the live demo](https://sticky-notes-app-chi.vercel.app/)

## 🛠 Installation and Setup

### Prerequisites

- Node.js (v14.0.0 or later)  
- npm (v6.0.0 or later)  

### Steps to Run Locally

```bash
git clone https://github.com/yourusername/sticky-notes-app.git
cd sticky-notes-app
npm install
npm run dev
```

Then open your browser and navigate to:  
**http://localhost:5173**

## 📁 Project Structure

```
sticky-notes-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── NoteCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AddNote.jsx
│   │   ├── PinnedNotes.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   └── ...
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## 💡 Usage

- **View Notes:** The home page displays all your notes, with pinned notes at the top.  
- **Add a Note:** Click "Add Note" in the navigation bar to create a new note.  
- **Search:** Use the search bar on the home page to find specific notes.  
- **Edit/Delete:** Each note has options to edit or delete it.  
- **Pin/Unpin:** Toggle the pin status to prioritize important notes.  
- **View Stats:** Check the Stats page to see information about your notes.  
- **View Pinned Notes:** See only pinned notes on the dedicated Pinned Notes page.  

## 🧰 Technologies Used

- React  
- React Router  
- localStorage for data persistence  
- Standard CSS for styling    

## 🔮 Future Enhancements

- Dark mode  
- Note categories/tags  
- Export/import notes  
- Markdown support  
- Customizable note colors  
- Reminder functionality  

## 🙏 Acknowledgements

- [React](https://reactjs.org)  
- [React Router](https://reactrouter.com)  
- [Font Awesome](https://fontawesome.com) for icons  
- [Google Fonts](https://fonts.google.com) for typography  
