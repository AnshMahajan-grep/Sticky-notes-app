import { useState, useRef, useEffect } from "react";

function NoteCard({ note, onDelete, onPinToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const [isHovered, setIsHovered] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const titleInputRef = useRef(null);

  // Focus on title input when editing starts
  useEffect(() => {
    if (isEditing && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isEditing]);

  // Reset edited content when canceling edit
  const handleCancelEdit = () => {
    setEditedTitle(note.title);
    setEditedContent(note.content);
    setIsEditing(false);
  };

  const handleSave = () => {
    // Don't save empty notes
    if (editedTitle.trim() === "" && editedContent.trim() === "") {
      onDelete(note.id);
      return;
    }
    
    onUpdate(note.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (confirmDelete) {
      onDelete(note.id);
    } else {
      setConfirmDelete(true);
      // Auto-reset confirm state after 3 seconds
      setTimeout(() => setConfirmDelete(false), 3000);
    }
  };

  return (
    <div 
      style={{ 
        ...styles.card, 
        background: note.pinned ? "#fffacd" : "#fff8f0",
        boxShadow: note.pinned 
          ? "0 4px 8px rgba(255, 215, 0, 0.2)" 
          : isHovered 
            ? "0 6px 12px rgba(0, 0, 0, 0.15)" 
            : "0 2px 5px rgba(0, 0, 0, 0.1)",
        transform: isHovered ? "translateY(-3px)" : "translateY(0)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isEditing && (
        <button 
          style={{
            ...styles.delete,
            background: confirmDelete ? "#ff0000" : "#ff4d4d",
            transform: confirmDelete ? "scale(1.1)" : "scale(1)"
          }} 
          onClick={handleDeleteClick}
          title={confirmDelete ? "Click again to confirm" : "Delete note"}
        >
          {confirmDelete ? "✓" : "×"}
        </button>
      )}

      {isEditing ? (
        <div style={styles.editContainer}>
          <input
            ref={titleInputRef}
            style={styles.input}
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Note title"
          />
          <textarea
            style={styles.textarea}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            placeholder="Note content"
          />
          <div style={styles.editActions}>
            <button style={styles.cancelButton} onClick={handleCancelEdit}>
              Cancel
            </button>
            <button style={styles.saveButton} onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.contentContainer}>
          {note.pinned && <div style={styles.pinnedIndicator}>📌</div>}
          <h3 style={styles.title}>{note.title}</h3>
          <p style={styles.content}>{note.content}</p>
          
          <div style={styles.actions}>
            <button 
              style={{
                ...styles.actionButton,
                ...styles.pinButton,
                background: note.pinned ? "#f8c200" : "#00bcd4"
              }} 
              onClick={() => onPinToggle(note.id)}
            >
              {note.pinned ? 'Unpin' : 'Pin'}
            </button>
            <button 
              style={{
                ...styles.actionButton,
                ...styles.editButton
              }} 
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
          
          {note.createdAt && (
            <div style={styles.timestamp}>
              {new Date(note.createdAt).toLocaleDateString()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    padding: "1.25rem",
    borderRadius: "10px",
    position: "relative",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "1rem",
    border: "1px solid rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  title: {
    marginTop: "0.25rem",
    marginBottom: "0.75rem",
    fontWeight: "600",
    color: "#333",
    fontSize: "1.1rem",
    wordBreak: "break-word",
  },
  content: {
    fontSize: "0.95rem",
    color: "#555",
    flexGrow: 1,
    wordBreak: "break-word",
    lineHeight: "1.5",
    marginBottom: "1rem",
  },
  delete: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    zIndex: "1",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
    gap: "0.5rem",
  },
  actionButton: {
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "0.85rem",
    transition: "all 0.2s ease",
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  pinButton: {
    background: "#00bcd4",
    "&:hover": {
      background: "#00a0b7",
    },
  },
  editButton: {
    background: "#ff9800",
    "&:hover": {
      background: "#e68a00",
    },
  },
  editContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  input: {
    fontSize: "1.1rem",
    padding: "0.6rem",
    borderRadius: "6px",
    marginBottom: "0.75rem",
    border: "1px solid #ddd",
    fontFamily: "inherit",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  },
  textarea: {
    fontSize: "0.95rem",
    padding: "0.6rem",
    borderRadius: "6px",
    border: "1px solid #ddd",
    resize: "vertical",
    minHeight: "80px",
    flexGrow: "1",
    marginBottom: "0.75rem",
    fontFamily: "inherit",
    lineHeight: "1.5",
    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
  },
  editActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem",
  },
  saveButton: {
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background 0.2s ease",
    "&:hover": {
      background: "#43a047",
    },
  },
  cancelButton: {
    background: "#f5f5f5",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "background 0.2s ease",
    "&:hover": {
      background: "#e0e0e0",
    },
  },
  pinnedIndicator: {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "1rem",
  },
  timestamp: {
    fontSize: "0.75rem",
    color: "#999",
    textAlign: "right",
    marginTop: "0.5rem",
    fontStyle: "italic",
  }
};

export default NoteCard;
