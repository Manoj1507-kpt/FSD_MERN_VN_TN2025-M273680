import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MANOJ</h2>
      <div>
        <Link to="/">Form Page</Link>
        <Link to="/cards">Card Page</Link>
      </div>
    </nav>
  );
}

export default Navbar;
