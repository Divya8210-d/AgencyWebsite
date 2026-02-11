"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";

// Simple Portal Component
const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = "text-white hover:bg-white/20 px-6 py-2 rounded-[49px] transition-colors duration-200 font-medium tracking-wide text-sm font-poppins";
  const mobileLinkClass = "text-white text-2xl font-medium py-2 font-poppins";

  return (
    <>
      {/* DESKTOP NAV - Hidden on small screens */}
      <nav
        className="
          hidden lg:flex gap-2 border border-white/20 
          rounded-[49px] p-2 
          w-fit mt-4
          bg-white/5 backdrop-blur-md
          /* REMOVED mx-auto to allow parent alignment */
        "
      >
        <Link href="/#home" className={linkClass}>Home</Link>
        <Link href="/#projects" className={linkClass}>Projects</Link>
        <Link href="/#aboutus" className={linkClass}>About Us</Link>
        <Link href="/#contact" className={linkClass}>Contact</Link>
      </nav>

      {/* MOBILE HAMBURGER BUTTON - Visible on small screens */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-white z-50 relative focus:outline-none"
      >
        {isOpen ? (
          /* Close Icon */
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          /* Hamburger Icon */
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* MOBILE FULLSCREEN MENU - Rendered via Portal */}
      {isOpen && (
        <Portal>
          <div className="fixed inset-0 bg-black/95 z-[9999] flex flex-col items-center justify-center gap-8 lg:hidden">
            <Link href="/#home" onClick={toggleMenu} className={mobileLinkClass}>Home</Link>
            <Link href="/#projects" onClick={toggleMenu} className={mobileLinkClass}>Projects</Link>
            <Link href="/#aboutus" onClick={toggleMenu} className={mobileLinkClass}>About Us</Link>
            <Link href="/#contact" onClick={toggleMenu} className={mobileLinkClass}>Contact</Link>

            {/* Social Links in Mobile Menu */}
            <div className="flex gap-6 mt-8">
              <a href="#" className="w-8 block opacity-80 hover:opacity-100">
                <img src="/linkedin.png" alt="LinkedIn" className="w-full" />
              </a>
              <a href="#" className="w-8 block opacity-80 hover:opacity-100">
                <img src="/behance.png" alt="Behance" className="w-full" />
              </a>
              <a href="#" className="w-8 block opacity-80 hover:opacity-100">
                <img src="/x.png" alt="X" className="w-full" />
              </a>
            </div>

            {/* Close Button inside Menu (Optional, but user might want one if the main button is hidden) */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 p-2 text-white focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </Portal>
      )}
    </>
  );
}

