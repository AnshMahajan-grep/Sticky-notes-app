import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

function Home() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    const updated = notes.filter(note => note.id !== id);
    setNotes(updated);
    localStorage.setItem('notes', JSON.stringify(updated));
  };

  const handlePinToggle = (id) => {
    const updated = notes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    );
  
    const sortedNotes = updated.sort((a, b) => b.pinned - a.pinned);  
  
    setNotes(sortedNotes);
    localStorage.setItem('notes', JSON.stringify(sortedNotes));
  };
  const handleUpdateNote = (id, newTitle, newContent) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  
  

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          padding: "0.8rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem"
        }}
      />

      <h2 style={styles.heading}>All Notes</h2>

      {notes.length === 0 ? (
        <p style={styles.empty}>No notes yet. Go add one!</p>
      ) : (
        <div style={styles.grid}>
          {filteredNotes.map((note) => (
            <NoteCard
            key={note.id}
            note={note}
            onDelete={handleDelete}
            onPinToggle={handlePinToggle}
            onUpdate={handleUpdateNote}
          />
          
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
  },
  empty: {
    fontStyle: 'italic',
    color: '#777',
  },
};

export default Home;
