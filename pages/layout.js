import { useState } from "react";

export default function Home() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  return (
    <div className="gds-app-layout__container">
      <header className="gds-app-layout__top gds-nav-top">
        <div className="gds-nav-logo">
          {/* <img
            src="https://gumgum-design-system.s3.amazonaws.com/mark.svg"
            alt="GumGum Icon"
            className="gds-nav-logo__icon"
          /> */}
          <img
            src="https://gumgum-design-system.s3.amazonaws.com/logo.svg"
            alt="GumGum Logo"
            className="gds-nav-logo__logo"
          />
        </div>
        <ul className="gds-nav-top__links">
          <li className="gds-nav-top__link gds-nav-top__link--sub">
            <a href="/layout">Advertisers</a>
            <ul className="gds-nav-top__sub-links">
              <li className="gds-nav-top__link">
                <a href="/layout">Sub Item 1</a>
              </li>
              <li className="gds-nav-top__link">
                <a href="/layout">Sub Item 2</a>
              </li>
              <li className="gds-nav-top__link">
                <a href="/layout">Sub Item 3</a>
              </li>
            </ul>
          </li>
          <li className="gds-nav-top__link">
            <a href="/layout">Campaigns</a>
          </li>
          <li className="gds-nav-top__link">
            <a href="/layout">3rd Party Reporting</a>
          </li>
        </ul>
        <button className="menu-btn" onClick={() => setLeftMenu(!leftMenu)}>
          LEFT MENU
        </button>
        <button className="menu-btn" onClick={() => setRightMenu(!rightMenu)}>
          RIGHT MENU
        </button>
      </header>
      <nav
        className={`gds-app-layout__left gds-side-nav ${
          leftMenu ? "gds-app-layout__left--open" : ""
        }`}
      >
        <button className="menu-btn" onClick={() => setLeftMenu(!leftMenu)}>
          close
        </button>
        Left
      </nav>
      <main className="gds-app-layout__main">
        <div
          style={{
            minHeight: "100vh",
            background: "#fff",
            borderRadius: ".5rem",
            padding: ".5rem",
          }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi
            quasi autem nam placeat repudiandae corrupti quo est error molestiae
            deleniti esse ipsam perferendis vitae quis quam eius, veritatis
            harum.
          </p>
          <div>test</div>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>content</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>content</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>content</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>content</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>content</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
        </div>
        <footer>New Nav ©{new Date().getFullYear()}</footer>
      </main>
      <aside
        className={`gds-app-layout__right gds-side-nav gds-side-nav--collapsed ${
          rightMenu ? "gds-app-layout__right--open" : ""
        }`}
      >
        <button className="menu-btn" onClick={() => setRightMenu(!rightMenu)}>
          close
        </button>
        Right
      </aside>
      <div className="gds-app-layout__bottom gds-nav-bottom">Bottom</div>
    </div>
    // <div className="gds-app">
    //   <div className="static-left">
    //     <header>
    //       {/* Hamburger Menu for mobile */}
    //       <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    //         <i className="fas fa-bars"></i>
    //       </button>
    //       <img
    //         className="menu-logo"
    //         src="https://gumgum-design-system.s3.amazonaws.com/logo.svg"
    //         alt="GumGum Logo"
    //       />
    //     </header>
    //     <aside className={`${menuOpen ? "open" : ""}`}>
    //       <div className="menu-title">Publisher Center</div>
    //       <nav>
    //         <ul>
    //           <li className="nav-item">
    //             <span className="nav-item--icon">
    //               <i className="fas fa-home"></i>
    //             </span>
    //             <p className="nav-item--text">
    //               Hello My World This Will Be Long
    //             </p>
    //           </li>
    //           <li className="nav-item">Hello World</li>
    //           <li className="nav-item">Hello World</li>
    //         </ul>
    //       </nav>
    //     </aside>
    //   </div>
    //   <div className="main">
    //     <p>main content</p>
    //   </div>
    // </div>
  );
}
