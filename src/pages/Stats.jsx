import React from 'react';

function Stats({ notes }) {
  // Compute Stats
  const totalNotes = notes.length;
  const pinnedNotes = notes.filter(note => note.pinned).length;
  const unpinnedNotes = totalNotes - pinnedNotes;

  const longestNote = notes.reduce((longest, current) => {
    const longestLength = longest.title.length + longest.content.length;
    const currentLength = current.title.length + current.content.length;
    return currentLength > longestLength ? current : longest;
  }, { title: '', content: '' });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Stats Overview</h2>
      <ul style={styles.list}>
        <li>Total Notes: {totalNotes}</li>
        <li>Pinned Notes: {pinnedNotes}</li>
        <li>Unpinned Notes: {unpinnedNotes}</li>
        <li>Longest Note: {longestNote.title || 'No notes yet'}</li>
        <li>Longest Note Length: {longestNote.title.length + longestNote.content.length}</li>
      </ul>
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
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '1.2rem',
    fontFamily: 'Arial, sans-serif',
  },
};

export default Stats;
