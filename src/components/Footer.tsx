import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-5 pt-5 text-muted text-center text-small">
      <p className="mb-1">All rights reserved. &copy; 2021-2023. Kusuri.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link href="/privacy">Privacy</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/terms">Terms</Link>
        </li>
        <li className="list-inline-item">
          <Link href="/support">Support</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
