function About() {
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>About Sticky Notes App</h2>
        
        <div style={styles.card}>
          <h3 style={styles.subheading}>What is Sticky Notes?</h3>
          <p style={styles.text}>
            Sticky Notes is a simple, intuitive application for creating and managing digital notes. 
            It's designed to help you organize your thoughts, ideas, reminders, and to-dos in a user-friendly interface.
          </p>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subheading}>Features</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Create notes with titles and content</li>
            <li style={styles.listItem}>Pin important notes to keep them at the top</li>
            <li style={styles.listItem}>Edit and delete notes</li>
            <li style={styles.listItem}>Search through your notes</li>
            <li style={styles.listItem}>View statistics about your notes</li>
            <li style={styles.listItem}>Data is saved locally in your browser</li>
          </ul>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subheading}>How to Use</h3>
          <ol style={styles.list}>
            <li style={styles.listItem}>Click "Add Note" to create a new note</li>
            <li style={styles.listItem}>Fill in the title and content</li>
            <li style={styles.listItem}>Check "Pin this note" if it's important</li>
            <li style={styles.listItem}>Use the search bar on the home page to find specific notes</li>
            <li style={styles.listItem}>Click "Edit" on any note to modify it</li>
            <li style={styles.listItem}>Visit the Stats page to see information about your notes</li>
          </ol>
        </div>
        
        <div style={styles.card}>
          <h3 style={styles.subheading}>Privacy</h3>
          <p style={styles.text}>
            All your notes are stored locally in your browser's localStorage. 
            No data is sent to any server, ensuring your notes remain private and accessible only on your device.
          </p>
        </div>
        
        <footer style={styles.footer}>
          <p>© 2025 Sticky Notes App. All rights reserved.</p>
          <p>Version 1.0.0</p>
        </footer>
      </div>
    );
  }
  
  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#333',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    subheading: {
      fontSize: '1.3rem',
      color: '#444',
      marginTop: 0,
      marginBottom: '1rem',
      borderBottom: '2px solid #f0c14b',
      paddingBottom: '0.5rem',
    },
    text: {
      lineHeight: '1.6',
      color: '#555',
      margin: 0,
    },
    list: {
      paddingLeft: '1.5rem',
      margin: 0,
    },
    listItem: {
      marginBottom: '0.5rem',
      color: '#555',
      lineHeight: '1.5',
    },
    footer: {
      marginTop: '3rem',
      textAlign: 'center',
      color: '#777',
      fontSize: '0.9rem',
    }
  };
  
  export default About;
  