import Link from "next/link";
import Logo from "./Logo";

export const Navbar = () => (
  <nav className="navbar flex">
    <div className="wrapper">
      <Link href="/">
        <a className="logo">
          Logo Mario Parra
          <Logo />
        </a>
      </Link>

      <div className="link flex justify-end">
        <Link href="/">
          work
        </Link>
        <Link href="/about">
          about
        </Link>
      </div>
    </div>
  </nav>
);
