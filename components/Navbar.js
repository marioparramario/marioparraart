import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";

export const Navbar = () => {

  const router = useRouter();

  return (
    <nav className="navbar flex">
      <div className="wrapper">
        <Link href="/">
          <a className="logo">
            Logo Mario Parra
          <Logo />
          </a>
        </Link>

        <div className="link flex justify-end">
          <div className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              work
            </Link>
          </div>
          <div className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">
              about
            </Link>
          </div>

        </div>
      </div>
    </nav>


    // <ul>
    //   <li className={router.pathname == "/" ? "active" : ""}>
    //     <Link href="/">home</Link>
    //   </li>
    //   <li className={router.pathname == "/about" ? "active" : ""}>
    //     <Link href="/about">about</Link>
    //   </li>
    // </ul>
  );

  // <nav className="navbar flex">
  //   <div className="wrapper">
  //     <Link href="/">
  //       <a className="logo">
  //         Logo Mario Parra
  //         <Logo />
  //       </a>
  //     </Link>

  //     <div className="link flex justify-end">
  //       <Link className={router.pathname == "/" ? "active" : ""} href="/">
  //         work
  //       </Link>
  //       <Link className={router.pathname == "/about" ? "active" : ""} href="/about">
  //         about
  //       </Link>
  //     </div>
  //   </div>
  // </nav>
  // );
};
