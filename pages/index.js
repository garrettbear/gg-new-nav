import Link from "next/link";

export default function Home() {
  return (
    <div className="gds-app-layout__container">
      <header className="gds-app-layout__top">
        <p className="-text-center gds-text--body-sm -p-a-4">TOP CONTAINER</p>
      </header>
      <nav className="gds-app-layout__left">
        <p className="-text-center gds-text--body-sm -p-a-4">LEFT CONTAINER</p>
      </nav>

      <main className="gds-app-layout__main">
        <p className="-text-center gds-text--body-sm ">MAIN CONTAINER</p>
        <ul>
          <li>
            <Link href="/">
              <a className="gds-button gds-button--sm gds-button--link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/full">
              <a className="gds-button gds-button--sm gds-button--link">
                Full Nav Example
              </a>
            </Link>
          </li>
          <li>
            <Link href="/left">
              <a className="gds-button gds-button--sm gds-button--link">
                Left Nav Example
              </a>
            </Link>
          </li>
          <li>
            <Link href="/top">
              <a className="gds-button gds-button--sm gds-button--link">
                Left Nav Example
              </a>
            </Link>
          </li>
        </ul>
      </main>
      <aside className="gds-app-layout__right">
        <p className="-text-center gds-text--body-sm -p-a-4">RIGHT CONTAINER</p>
      </aside>

      <div className="gds-app-layout__bottom">
        <p className="-text-center gds-text--body-sm -p-a-4">RIGHT CONTAINER</p>
      </div>
    </div>
  );
}
