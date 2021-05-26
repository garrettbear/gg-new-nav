import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <div className="static-left">
        <header>
          {/* Hamburger Menu for mobile */}
          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i class="fas fa-bars"></i>
          </button>
          <div className="menu-title">Publisher Center</div>
          <img
            className="menu-logo"
            src="https://gumgum-design-system.s3.amazonaws.com/logo.svg"
            alt="GumGum Logo"
          />
        </header>
        <aside className={`${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li className="nav-item">
                <span className="nav-item--icon">
                  <i className="fas fa-home"></i>
                </span>
                <p className="nav-item--text">
                  Hello My World This Will Be Long
                </p>
              </li>
              <li className="nav-item">Hello World</li>
              <li className="nav-item">Hello World</li>
            </ul>
          </nav>
        </aside>
      </div>
      <div className="main">
        <p>main content</p>
      </div>
    </div>
  );
}
