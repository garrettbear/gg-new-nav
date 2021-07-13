import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [subNav, setSubNav] = useState(false);
  const [links, setLinks] = useState(false);

  return (
    <div className="gds-app-layout__container">
      <header className="gds-app-layout__top gds-nav__top">
        <button
          className="gds-nav__menu gds-nav__auto-hide"
          onClick={() => setLinks(!links)}
        ></button>
        <Link href="/">
          <a className="gds-nav__logo"></a>
        </Link>
        <ul
          className={`gds-nav__links gds-nav__auto-hide ${
            links ? "gds-nav__auto-hide--active" : ""
          }`}
        >
          <li className="gds-nav__close-wrapper">
            <button
              className="gds-nav__close"
              onClick={() => setLinks(!links)}
            ></button>
          </li>
          <li>
            <Link href="/">
              <a className="gds-nav__link">
                <i className="fas  fa-home gds-nav__link-icon" />
                <div className="gds-nav__link-text">App Layout</div>
              </a>
            </Link>
          </li>
          <li
            className={`gds-nav__links--sub-wrapper ${
              subNav ? "gds-nav__links--sub-wrapper--active" : ""
            }`}
          >
            <button
              onClick={() => setSubNav(!subNav)}
              className="gds-nav__link"
            >
              <i className="fas  fa-subway gds-nav__link-icon" />
              <span className="gds-nav__link-text">Submenu Demo</span>
            </button>
            <ul className="gds-nav__links-sub">
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas  fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas  fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas  fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
            </ul>
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
            <Link href="/left">
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
        </ul>

        <div className="gds-nav__icons gds-nav__item--grow-0">
          <button className="gds-nav__icon">
            <i className="fas fa-search"></i>
          </button>
          <a href="#" className="gds-nav__icon">
            <i className="fas fa-user"></i>
          </a>
          <div className="gds-nav__icon ">
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </header>

      <main className="gds-app-layout__main">
        <div className="gds-nav__main">
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
          links menu autohides for tablet down and menu button will appear to
          toggle links as a left side
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
