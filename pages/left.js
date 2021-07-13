import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);

  return (
    <div className="gds-app-layout__container">
      <header className="gds-app-layout__top gds-nav__top gds-nav__auto-hide">
        <button
          className="gds-nav__menu gds-nav__auto-hide"
          onClick={() => setLeftMenu(!leftMenu)}
        ></button>
        <a href="#" className="gds-nav__logo"></a>
      </header>
      <nav
        className={`gds-app-layout__left gds-nav__side ${
          leftMenu ? "gds-app-layout__left--open" : ""
        }
        ${leftCollapsed ? "gds-nav__side--collapsed" : ""}
        `}
      >
        <div className="gds-nav__close-wrapper">
          <button
            className="gds-nav__close"
            onClick={() => setLeftMenu(!leftMenu)}
          ></button>
        </div>
        <a href="#" className="gds-nav__logo"></a>
        {/* Global Nav Link */}
        <ul className="gds-nav__links">
          <li>
            <Link href="/">
              <a className="gds-nav__link">
                <i className="fas  fa-home gds-nav__link-icon" />
                <span className="gds-nav__link-text">App Layout</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/left">
              <a className="gds-nav__link">
                <i className="fas  fa-arrow-left gds-nav__link-icon" />
                <span className="gds-nav__link-text">Left Nav</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/top">
              <a className="gds-nav__link">
                <i className="fas  fa-arrow-up gds-nav__link-icon" />
                <span className="gds-nav__link-text">Top Nav</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/full">
              <a className="gds-nav__link">
                <i className="fas  fa-arrows-alt gds-nav__link-icon" />
                <span className="gds-nav__link-text">Full Nav</span>
              </a>
            </Link>
          </li>
          <li>
            <button
              className="gds-nav__link"
              onClick={() => setLeftCollapsed(!leftCollapsed)}
            >
              <i className="fas  fa-server gds-nav__link-icon" />
              <span className="gds-nav__link-text">Collapse Menu Example</span>
            </button>
          </li>
        </ul>
        <ul className="gds-nav__icons gds-nav__item--grow-0">
          <li>
            <button className="gds-nav__icon">
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li>
            <a href="#" className="gds-nav__icon">
              <i className="fas fa-user"></i>
            </a>
          </li>
          <li>
            <div className="gds-nav__icon ">
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </li>
        </ul>
      </nav>

      <main className="gds-app-layout__main">
        <div className="gds-nav__main -p-t-4">
          <nav className="gds-breadcrumb" aria-label="Breadcrumb">
            <ol className="gds-breadcrumb__list">
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  Campaigns
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a
                  className="gds-breadcrumb__link"
                  href="#"
                  aria-current="location"
                >
                  Coca-Cola USA
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  Campaign #349902
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  Ad #012844
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div
          style={{
            minHeight: "120vh",
            background: "#fff",
            borderRadius: ".5rem",
            padding: ".5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>left menu toggle is up top for tablet and below with autohide</p>
        </div>
        <footer>
          <p className="-text-center gds-text--body-sm -color-tx-lt-3">
            New Nav Demo ©{new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}
