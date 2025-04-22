import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';

function Home() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchNotes = () => {
      setLoading(true);
      const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
      setNotes(storedNotes);
      setLoading(false);
    };

    fetchNotes();
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
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
        />
        {searchText && (
          <button 
            onClick={() => setSearchText('')}
            style={styles.clearButton}
          >
            ×
          </button>
        )}
      </div>

      <h2 style={styles.heading}>All Notes</h2>

      {loading ? (
        <div style={styles.loading}>Loading notes...</div>
      ) : notes.length === 0 ? (
        <div style={styles.emptyContainer}>
          <p style={styles.empty}>No notes yet. Go add one!</p>
          <button 
            onClick={() => window.location.href = '/add'} 
            style={styles.addButton}
          >
            Create Your First Note
          </button>
        </div>
      ) : filteredNotes.length === 0 ? (
        <p style={styles.empty}>No notes match your search.</p>
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
    padding: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  searchInput: {
    width: '100%',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
  },
  clearButton: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#999',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#333',
    borderBottom: '2px solid #4a90e2',
    paddingBottom: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px dashed #ddd',
  },
  empty: {
    fontStyle: 'italic',
    color: '#777',
    marginBottom: '1rem',
  },
  addButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  loading: {
    textAlign: 'center',
    padding: '2rem',
    color: '#777',
  }
};

export default Home;
