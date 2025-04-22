import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pinned, setPinned] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newNote = {
      id: Date.now(),
      title,
      content,
      pinned,
      createdAt: new Date().toISOString(),
    };

    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...existingNotes, newNote];

    // Sort notes with pinned ones at the top
    updatedNotes.sort((a, b) => b.pinned - a.pinned);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/');
    }, 500);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Note</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            id="title"
            style={styles.input}
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="content" style={styles.label}>Content</label>
          <textarea
            id="content"
            style={styles.textarea}
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <label style={styles.checkbox}>
          <input
            type="checkbox"
            checked={pinned}
            onChange={(e) => setPinned(e.target.checked)}
          />
          <span style={styles.checkboxText}>Pin this note</span>
        </label>

        <div style={styles.buttonGroup}>
          <button 
            type="button" 
            onClick={() => navigate('/')}
            style={styles.cancelButton}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Note'}
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '700px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1.5rem',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '1rem',
    color: '#555',
    fontWeight: '500',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    transition: 'border 0.3s ease',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '150px',
    resize: 'vertical',
    transition: 'border 0.3s ease',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  checkboxText: {
    fontSize: '1rem',
    color: '#555',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '1rem',
  },
  submitButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cancelButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#f1f1f1',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

export default AddNote;
