import Head from "next/head";
import Link from "next/link";

export default function Old() {
  return (
    <div className="-has-persist-nav">
      <Head>
        <title>New Nav</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="gds-page-header">
        <div className="gds-page-header__product-bar">
          <div className="gds-page-header__product-name">Design System</div>
          <img
            className="gds-page-header__logo gds-page-header__logo--expanded"
            src="https://gumgum-design-system.s3.amazonaws.com/logo.svg"
            alt="GumGum Logo"
          ></img>
        </div>
        <div className="gds-page-header__nav-bar">
          <div className="gds-page-header__primary-nav">
            <button className="gds-page-header__menu">
              <span className="gds-page-header__menu-line"></span>
              <span className="gds-page-header__menu-line"></span>
              <span className="gds-page-header__menu-line"></span>
              <span className="gds-page-header__menu-line"></span>
            </button>
            <h4 className="gds-page-header__page-name -text-tr-cap">Home</h4>
          </div>
          <div className="gds-page-header__breadcrumb-nav">
            <ul className="gds-page-header__breadcrumbs">
              <li className="gds-page-header__breadcrumbs-list-item">Item 1</li>
              <li className="gds-page-header__breadcrumbs-list-item">Item 2</li>
              <li className="gds-page-header__breadcrumbs-list-item">Item 3</li>
            </ul>
          </div>
          <div className="gds-page-header__secondary-nav">
            <div className="gds-page-header__secondary-nav__icon-holder">
              <div className="gds-page-header__secondary-nav__icon">
                <a className="gds-page-header__secondary-nav__icon-link">
                  <i className="btl bt-search" />
                </a>
              </div>
            </div>
          </div>
          <div className="-clear-both"></div>
        </div>
      </header>
      <div className="gds-persist-nav gds-persist-nav--page-header">
        <aside className="gds-persist-nav__sidebar">
          <ul className="gds-persist-nav__top-nav">
            <li className="gds-persist-nav__item">
              <Link href="/layout">
                <p className="gds-persist-nav__link gds-text--regular -cursor-pointer">
                  <i className="gds-persist-nav__icon fa fa-fw fa-cubes -m-r-3"></i>
                  Subatomic
                </p>
              </Link>
            </li>
          </ul>
        </aside>
        <div className="gds-persist-nav__mobile-close"></div>
        <section className="gds-persist-nav__main-content">
          <div className="gds-layout__container main gds-layout__container--full-width -p-t-4">
            This is the default
          </div>
        </section>
      </div>

      <footer>GumGum &copy; {new Date().getFullYear()}</footer>
    </div>
  );
}
