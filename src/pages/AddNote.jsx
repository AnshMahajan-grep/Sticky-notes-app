import { useState } from 'react';

function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pinned, setPinned] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      id: Date.now(),
      title,
      content,
      pinned,
    };

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...existingNotes, newNote];

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setTitle('');
    setContent('');
    setPinned(false);

    alert('Note added successfully!');
  };

  return (
    <div style={styles.container}>
      <h2>Add New Note</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          style={styles.textarea}
          placeholder="Note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <label style={styles.checkbox}>
          <input
            type="checkbox"
            checked={pinned}
            onChange={(e) => setPinned(e.target.checked)}
          />
          Pin this note
        </label>
        <button type="submit" style={styles.button}>Add Note</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    height: '100px',
  },
  checkbox: {
    fontSize: '0.9rem',
  },
  button: {
    padding: '0.5rem',
    fontSize: '1rem',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default AddNote;
