import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? styles.activeLink : styles.link;
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>📝</span>
          <span style={styles.logoText}>Sticky Notes</span>
        </div>
        
        <nav style={styles.nav}>
          <Link to="/" style={isActive('/')}>Home</Link>
          <Link to="/add" style={isActive('/add')}>Add Note</Link>
          <Link to="/pinned" style={isActive('/pinned')}>Pinned</Link>
          <Link to="/stats" style={isActive('/stats')}>Stats</Link>
          <Link to="/about" style={isActive('/about')}>About</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(to right, #4a90e2, #63b3ed)',
    color: 'white',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    fontSize: '1.5rem',
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease',
    borderBottom: '2px solid transparent',
    fontWeight: '500',
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    borderBottom: '2px solid white',
    fontWeight: '700',
  },
};

export default Header;
