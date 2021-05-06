import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <div className="static-left">
        <header>
          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i class="fas fa-bars"></i>
          </button>
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://gumgum-design-system.s3.amazonaws.com/logo.svg"
            alt="GumGum Logo"
          />
        </header>
        <aside className={`${menuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li>Hello World</li>
              <li>Hello World</li>
              <li>Hello World</li>
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
