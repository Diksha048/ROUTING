import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      GALAXY
      <div className="navbar-links">
        <Link a="/">Home</Link>
        <Link a="/astronauts">Astronauts</Link>
      </div>
    </div>
  )
}

export default Navbar
