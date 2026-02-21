import logo from "../assets/logo.png";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="nav">
        <div className="logo-container">
        <img src={logo} alt="Swasthya Suraksha Logo" />
        <h2>Swasthya Suraksha</h2>
        </div>
        <div className="hamburger" onClick={() => setOpen(true)}>
         Menu&nbsp;☰
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={closeMenu}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>
          <span></span>
          <span></span>
        </div>

        <ul>
          <li><a href="#hero" onClick={closeMenu}>Overview</a></li>
          <li><a href="#problem" onClick={closeMenu}>Problem</a></li>
          <li><a href="#solution" onClick={closeMenu}>Solution</a></li>
          <li><a href="#architecture" onClick={closeMenu}>Architecture</a></li>
          <li><a href="#stats" onClick={closeMenu}>Impact</a></li>
          <li><a href="#dashboard" onClick={closeMenu}>Dashboard</a></li>
          <li><a href="#future" onClick={closeMenu}>Future Scope and Feedback</a></li>
        </ul>
      </div>
    </>
  );
}