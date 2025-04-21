// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import About from './pages/About';
import Stats  from './pages/Stats';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
