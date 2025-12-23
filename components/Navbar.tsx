"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-5 py-2 rounded-[49px] transition-colors duration-200
     ${pathname === path 
        ? "bg-white text-black" 
        : "text-white hover:bg-white/20"}`;

  return (
    <nav
      className="
        flex gap-4 border border-white 
        rounded-[49px] p-1 
        w-fit mx-auto mt-4
      "
    >
      <Link href="/homepage" className={linkClass("/homepage")}>Home</Link>
      <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
      <Link href="/aboutus" className={linkClass("/aboutus")}>About Us</Link>
      <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
    </nav>
  );
}
