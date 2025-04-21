import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f0f0f0" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/add" style={{ marginRight: "1rem" }}>Add Note</Link>
        <Link to="/stats" style={{ marginRight: "1rem" }}>Stats</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
