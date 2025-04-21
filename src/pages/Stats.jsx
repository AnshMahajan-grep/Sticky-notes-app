import { useState, useEffect } from 'react';

function Stats() {
  const [stats, setStats] = useState({
    total: 0,
    pinned: 0,
    unpinned: 0,
    avgLength: 0,
  });

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    
    const pinned = notes.filter(note => note.pinned).length;
    const totalContentLength = notes.reduce((sum, note) => sum + note.content.length, 0);
    const avgLength = notes.length > 0 ? Math.round(totalContentLength / notes.length) : 0;

    setStats({
      total: notes.length,
      pinned,
      unpinned: notes.length - pinned,
      avgLength,
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Notes Statistics</h2>
      
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Total Notes</h3>
          <p style={styles.statValue}>{stats.total}</p>
        </div>
        
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Pinned Notes</h3>
          <p style={styles.statValue}>{stats.pinned}</p>
        </div>
        
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Unpinned Notes</h3>
          <p style={styles.statValue}>{stats.unpinned}</p>
        </div>
        
        <div style={styles.statCard}>
          <h3 style={styles.statTitle}>Avg. Content Length</h3>
          <p style={styles.statValue}>{stats.avgLength} chars</p>
        </div>
      </div>
      
      <div style={styles.chartContainer}>
        <h3 style={styles.chartTitle}>Notes Distribution</h3>
        <div style={styles.chart}>
          {stats.pinned > 0 && (
            <div 
              style={{
                ...styles.chartBar,
                width: `${(stats.pinned / stats.total) * 100}%`,
                backgroundColor: '#FFD700'
              }}
            >
              {stats.pinned > 0 && `${Math.round((stats.pinned / stats.total) * 100)}%`}
            </div>
          )}
          {stats.unpinned > 0 && (
            <div 
              style={{
                ...styles.chartBar,
                width: `${(stats.unpinned / stats.total) * 100}%`,
                backgroundColor: '#95a5a6'
              }}
            >
              {stats.unpinned > 0 && `${Math.round((stats.unpinned / stats.total) * 100)}%`}
            </div>
          )}
        </div>
        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <div style={{...styles.legendColor, backgroundColor: '#FFD700'}}></div>
            <span>Pinned</span>
          </div>
          <div style={styles.legendItem}>
            <div style={{...styles.legendColor, backgroundColor: '#95a5a6'}}></div>
            <span>Unpinned</span>
          </div>
        </div>
      </div>
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
    fontSize: '1.8rem',
    marginBottom: '2rem',
    color: '#333',
    textAlign: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  statCard: {
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  statTitle: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 0 0.5rem 0',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
  },
  chartContainer: {
    marginTop: '2rem',
    padding: '1.5rem',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  chartTitle: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#333',
    textAlign: 'center',
  },
  chart: {
    display: 'flex',
    height: '40px',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '1rem',
  },
  chartBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'width 0.5s ease',
  },
  legend: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '2px',
  }
};

export default Stats;
