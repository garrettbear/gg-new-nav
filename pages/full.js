import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [subNav, setSubNav] = useState(false);
  const [links, setLinks] = useState(false);

  return (
    <div className="gds-app-layout__container">
      <header className="gds-app-layout__top gds-nav__top">
        <button
          className="gds-nav__menu gds-nav__auto-hide"
          onClick={() => setLinks(!links)}
        ></button>
        <a href="#" className="gds-nav__logo"></a>

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
        {/* <a href="#" className="gds-nav__logo"></a> */}
        {/* Global Nav Link */}
        <ul className="gds-nav__links -m-t-3">
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
          <button
            className="gds-button gds-button--primary gds-button--xs -m-r-2"
            onClick={() => setLeftMenu(!leftMenu)}
          >
            LEFT MENU TOGGLE
          </button>
          <button
            className="gds-button gds-button--primary gds-button--xs"
            onClick={() => setRightMenu(!rightMenu)}
          >
            RIGHT MENU TOGGLE
          </button>
        </div>
        <footer>
          <p className="-text-center gds-text--body-sm -color-tx-lt-3">
            New Nav Demo ©{new Date().getFullYear()}
          </p>
        </footer>
      </main>
      <aside
        className={`gds-app-layout__right gds-nav__side ${
          rightMenu ? "gds-app-layout__right--open" : ""
        }
        ${rightCollapsed ? "gds-nav__side--collapsed" : ""}
        `}
      >
        <div className="gds-nav__close-wrapper">
          <button
            className="gds-nav__close"
            onClick={() => setRightMenu(!rightMenu)}
          ></button>
        </div>
        {/* Global Nav Link */}
        <ul className="gds-nav__links -m-t-3">
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
              onClick={() => setRightCollapsed(!rightCollapsed)}
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
      </aside>

      <div className="gds-app-layout__bottom gds-nav__bottom -p-a-2">
        <p className="-text-center gds-text--body-sm">
          Bottom container created, but currently no use case/need for this
          component.
        </p>
      </div>
    </div>
  );
}
