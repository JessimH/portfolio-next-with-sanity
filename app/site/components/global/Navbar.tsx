import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";

export default function Navbar() {
  return (
    <header className="py-6 md:px-16 px-6 border-b z-30 md:mb-28 mb-20 b-0 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/site">
          <Image src={Logo} width={25} height={25} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/site/about"
                className="hover:text-emerald-400 duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/site/projects"
                className="hover:text-emerald-400 duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}