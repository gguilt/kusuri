import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          Kusuri
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link href="/" className="nav-link px-2 link-dark">
              Medicine List
            </Link>
          </li>
          <li>
            <Link href="/week" className="nav-link px-2 link-dark">
              Weekly Usage
            </Link>
          </li>
          <li>
            <Link href="/add" className="nav-link px-2 link-dark">
              Add Medicine
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link
            href="/logout"
            className="btn btn-outline-primary me-2"
            role="button"
          >
            Logout
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
