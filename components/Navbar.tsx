import Link from "next/link";

export default function Navbar() {
  const linkClass = "text-white hover:bg-white/20 px-5 py-2 rounded-[49px] transition-colors duration-200";

  return (
    <nav
      className="
        flex gap-4 border border-white 
        rounded-[49px] p-1 
        w-fit mx-auto mt-4
      "
    >
      <Link href="/#home" className={linkClass}>Home</Link>
      <Link href="/#projects" className={linkClass}>Projects</Link>
      <Link href="/#aboutus" className={linkClass}>About Us</Link>
      <Link href="/#contact" className={linkClass}>Contact</Link>
    </nav>
  );
}

