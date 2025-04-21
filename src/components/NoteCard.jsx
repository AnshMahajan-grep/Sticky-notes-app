import { useState } from "react";

function NoteCard({ note, onDelete, onPinToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    onUpdate(note.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <div style={{ ...styles.card, background: note.pinned ? "#ffeb3b" : "#fff8c6" }}>
      <button style={styles.delete} onClick={() => onDelete(note.id)}>❌</button>

      {isEditing ? (
        <>
          <input
            style={styles.input}
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            style={styles.textarea}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3 style={styles.title}>{note.title}</h3>
          <p style={styles.content}>{note.content}</p>
        </>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style={styles.pin} onClick={() => onPinToggle(note.id)}>
          {note.pinned ? '📍 Unpin' : '📌 Pin'}
        </button>
        {isEditing ? (
          <button style={styles.edit} onClick={handleSave}>💾 Save</button>
        ) : (
          <button style={styles.edit} onClick={() => setIsEditing(true)}>✏️ Edit</button>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "relative",
    minHeight: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  title: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  content: {
    fontSize: "0.95rem",
    color: "#333",
    flexGrow: 1,
  },
  delete: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "28px",
    textAlign: "center",
  },
  pin: {
    background: "#00bcd4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.4rem 0.8rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px",
  },
  edit: {
    background: "#ffa500",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "0.4rem 0.8rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "13px",
  },
  input: {
    fontSize: "1rem",
    padding: "0.4rem",
    borderRadius: "5px",
    marginBottom: "0.5rem",
    border: "1px solid #ccc",
  },
  textarea: {
    fontSize: "0.95rem",
    padding: "0.4rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "vertical",
    minHeight: "60px",
  },
};

export default NoteCard;
