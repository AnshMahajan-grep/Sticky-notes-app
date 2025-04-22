// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import About from './pages/About';
import Stats from './pages/Stats';
import PinnedNotes from './pages/PinnedNotes';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route path="/pinned" element={<PinnedNotes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
