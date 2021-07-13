import { useState } from "react";

export default function Home() {
  const [leftMenu, setLeftMenu] = useState(false);
  const [rightMenu, setRightMenu] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);
  const [subNav, setSubNav] = useState(false);
  const [theme, setTheme] = useState(false);
  const [search, setSearch] = useState(false);
  const [links, setLinks] = useState(false);

  const changeTheme = () => {
    document.documentElement.setAttribute(
      "data-theme",
      !theme ? "dark" : "light"
    );
    setTheme(!theme);
  };
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
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-server gds-nav__link-icon" />
              <div className="gds-nav__link-text">A Tag List Item</div>
            </a>
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
              <i className="fas fa-fw fa-server gds-nav__link-icon" />
              <span className="gds-nav__link-text">Advertiser</span>
            </button>
            <ul className="gds-nav__links-sub">
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas fa-fw fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas fa-fw fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
              <li>
                <a className="gds-nav__link-sub" href="#">
                  <i className="fas fa-fw fa-server gds-nav__link-icon" />
                  <span className="gds-nav__link-text">
                    Sub Item This One Is A Bit Longer
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-server gds-nav__link-icon" />
              <span className="gds-nav__link-text">A Tag List Item</span>
            </a>
          </li>
          <li>
            <div className="gds-nav__link">
              <span className="gds-nav__link-text">Div List Item No Icon</span>
            </div>
          </li>
        </ul>

        {/* <div className="gds-form-group">
          <div className="gds-form-group__input-group">
            <input
              className="gds-form-group__text-input gds-form-group__text-input--xs"
              type="text"
              placeholder="Search"
            />
          </div>
        </div> */}

        {/* <div className="gds-form-group">
          <div
            className={`gds-search-select ${
              search ? "gds-search-select--open" : ""
            }`}
            open-gds-search-select="single"
          >
            <div className="gds-search-select__control">
              <input
                id="searcchselect-input-0"
                type="text"
                placeholder="Choose a State..."
                className="gds-search-select__input gds-search-select__input--sm"
                autoComplete="off"
              />
              <button
                className="gds-search-select__toggle-button"
                onClick={() => setSearch(!search)}
              >
                {search ? (
                  <i className="fas fa-fw fa-times-circle"></i>
                ) : (
                  <i className="fas fa-fw fa-search "></i>
                )}
              </button>
            </div>
            <div className="gds-search-select__menu">
              <ul className="gds-search-select__menu-items">
                <li className="gds-search-select__menu-item">Alaska</li>
                <li className="gds-search-select__menu-item">Arizona</li>
                <li className="gds-search-select__menu-item">Arkansas</li>
                <li className="gds-search-select__menu-item">California</li>
                <li className="gds-search-select__menu-item">Colorado</li>
                <li className="gds-search-select__menu-item">Connecticut</li>
                <li className="gds-search-select__menu-item">Deleware</li>
              </ul>
            </div>
          </div>
        </div> */}

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
        <a href="#" className="gds-nav__logo"></a>
        {/* Global Nav Link */}
        <ul className="gds-nav__links">
          <li>
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-home gds-nav__link-icon" />
              <span className="gds-nav__link-text">A Tag List Item</span>
            </a>
          </li>
          <li>
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-home gds-nav__link-icon" />
              <span className="gds-nav__link-text">A Tag List Item</span>
            </a>
          </li>
          <li>
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-home gds-nav__link-icon" />
              <span className="gds-nav__link-text">A Tag List Item</span>
            </a>
          </li>
          <li>
            <button
              className="gds-nav__link"
              onClick={() => setLeftCollapsed(!leftCollapsed)}
            >
              <i className="fas fa-fw fa-server gds-nav__link-icon" />
              <span className="gds-nav__link-text">Collapse Menu</span>
            </button>
          </li>
          <li>
            <button
              className="gds-nav__link"
              onClick={() => setLeftMenu(!leftMenu)}
            >
              <i className="fas fa-fw fa-times gds-nav__link-icon" />
              <span className="gds-nav__link-text">Close</span>
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
                  Home
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  About
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a
                  className="gds-breadcrumb__link"
                  href="#"
                  aria-current="location"
                >
                  This one is way too long so lets cut it off
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  Too Deep
                </a>
              </li>
              <li className="gds-breadcrumb__item">
                <a className="gds-breadcrumb__link" href="#">
                  Keep Adding On
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
            minHeight: "100vh",
            background: "#fff",
            borderRadius: ".5rem",
            padding: ".5rem",
          }}
        >
          <p className="tester">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum animi
            quasi autem nam placeat repudiandae corrupti quo est error molestiae
            deleniti esse ipsam perferendis vitae quis quam eius, veritatis
            harum.
          </p>
          <button onClick={changeTheme}>Change Theme</button>
          <button
            className="gds-button gds-button--primary gds-button--xs menu-btn"
            onClick={() => setLeftMenu(!leftMenu)}
          >
            LEFT MENU
          </button>
          {/* <button
            className="gds-button gds-button--primary gds-button--xs menu-btn"
            onClick={() => setRightMenu(!rightMenu)}
          >
            RIGHT MENU
          </button> */}
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
      {/* <aside
        className={`gds-app-layout__right gds-nav__side ${
          rightMenu ? "gds-app-layout__right--open" : ""
        }
        ${rightCollapsed ? "gds-nav__side--collapsed" : ""}
        `}
      >
        <ul>
          <li>
            <a href="#" className="gds-nav__link">
              <i className="fas fa-fw fa-home gds-nav__link-icon" />
              <span className="gds-nav__link-text">A Tag List Item</span>
            </a>
          </li>
          <li>
            <button
              className="gds-nav__link"
              onClick={() => setRightCollapsed(!rightCollapsed)}
            >
              <i className="fas fa-fw fa-server gds-nav__link-icon" />
              <span className="gds-nav__link-text">Collapse Menu</span>
            </button>
          </li>
          <li>
            <button
              className="gds-nav__link"
              onClick={() => setRightMenu(!rightMenu)}
            >
              <i className="fas fa-fw fa-times gds-nav__link-icon" />
              <span className="gds-nav__link-text">Close</span>
            </button>
          </li>
        </ul>

        <div className="outer">
          Hello
          <div className="inner">Hi</div>
        </div>
      </aside>
    */}
      {/* <div
        className="gds-app-layout__bottom gds-nav__bottom"
        style={{ background: "green" }}
      >
        Bottom
      </div> */}
    </div>
  );
}
