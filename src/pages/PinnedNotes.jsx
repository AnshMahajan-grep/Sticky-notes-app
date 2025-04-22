import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

function PinnedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const pinnedNotes = storedNotes.filter(note => note.pinned);
    setNotes(pinnedNotes);
  }, []);

  const handleDelete = (id) => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updated = allNotes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updated));
    
    // Update the local state to show only pinned notes
    const updatedPinned = updated.filter(note => note.pinned);
    setNotes(updatedPinned);
  };

  const handlePinToggle = (id) => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updated = allNotes.map(note =>
      note.id === id ? { ...note, pinned: !note.pinned } : note
    );
    
    localStorage.setItem('notes', JSON.stringify(updated));
    
    // Update the local state to show only pinned notes
    const updatedPinned = updated.filter(note => note.pinned);
    setNotes(updatedPinned);
  };

  const handleUpdateNote = (id, newTitle, newContent) => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updated = allNotes.map(note =>
      note.id === id ? { ...note, title: newTitle, content: newContent } : note
    );
    
    localStorage.setItem('notes', JSON.stringify(updated));
    
    // Update the local state to show only pinned notes
    const updatedPinned = updated.filter(note => note.pinned);
    setNotes(updatedPinned);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Pinned Notes</h2>

      {notes.length === 0 ? (
        <p style={styles.empty}>No pinned notes yet. Pin a note to see it here!</p>
      ) : (
        <div style={styles.grid}>
          {notes.map((note) => (
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
    padding: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#333',
    borderBottom: '2px solid #FFD700',
    paddingBottom: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  empty: {
    fontStyle: 'italic',
    color: '#777',
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px dashed #ddd',
  },
};

export default PinnedNotes;
