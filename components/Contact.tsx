

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* HEADING */
      gsap.from(".contact-heading span", {
        y: isMobile ? 30 : 80,
        opacity: 0,
        duration: isMobile ? 0.7 : 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 80%",
        },
      });

      /* FORM INPUTS */
      gsap.from(".contact-input", {
        y: isMobile ? 20 : 40,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
      });

      /* BUTTON */
      gsap.from(".contact-btn", {
        x: isMobile ? 0 : 60,
        scale: 0.9,
        opacity: 0,
        duration: isMobile ? 0.7 : 0.9,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".contact-btn",
          start: "top 90%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={contactRef}
      className="w-full bg-black text-white px-6 sm:px-10 py-16"
    >
      {/* Main Grid */}
      <div className="grid grid-rows-3 gap-12  max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="contact-heading flex items-end justify-center md:items-start md:justify-start">
  <h1 className="text-[64px] sm:text-[84px] lg:text-[96px] font-bold leading-tight text-center md:text-left">
    <span className="block">LET’S PLAN YOUR</span>
    <span className="block text-cyan-400">DIGITAL PRESENCE</span>
  </h1>
</div>


        {/* FORM */}
        <div className="contact-form grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-base sm:text-xl">
          <input
            type="text"
            placeholder="Name"
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="email"
            placeholder="E - Mail"
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="text"
            placeholder="Phone No."
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="text"
            placeholder="About the Project"
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center md:justify-end">
          <div className="contact-btn rounded-[83px] border-2 border-white flex items-center gap-4 p-3 sm:p-4 h-fit backdrop-blur-sm">
            <p className="text-lg sm:text-2xl font-medium">Send Request</p>

            <button className="bg-[#00C8FF] rounded-full p-3 sm:p-4 flex items-center justify-center hover:bg-[#0dd3ff] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-6 h-6 sm:w-7 sm:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
