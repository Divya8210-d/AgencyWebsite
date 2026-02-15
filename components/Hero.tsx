"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* BACKGROUND VIDEO ZOOM */
      gsap.fromTo(
        ".hero-video",
        { scale: 1.1 },
        {
          scale: 1,
          duration: isMobile ? 1.2 : 2,
          ease: "power2.out",
        }
      );

      /* LETTER BY LETTER TITLE */
      gsap.from(".hero-letter", {
        y: isMobile ? 30 : 80,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        ease: "power3.out",
        stagger: isMobile ? 0.06 : 0.1,
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 85%",
        },
      });

      /* SOCIAL MEDIA GRID */
      gsap.from(".social-item", {
        x: isMobile ? -15 : -40,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".social-wrapper",
          start: "top 85%",
        },
      });

      /* NAVBAR */
      gsap.from(".hero-nav", {
        y: -30,
        opacity: 0,
        duration: isMobile ? 0.6 : 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero-nav",
          start: "top 90%",
        },
      });

      /* CARDS */
      gsap.from(".hero-card", {
        y: isMobile ? 30 : 60,
        opacity: 0,
        duration: isMobile ? 0.7 : 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-cards",
          start: "top 80%",
        },
      });

      /* CTA BUTTON */
      gsap.from(".hero-cta", {
        scale: 0.85,
        opacity: 0,
        duration: isMobile ? 0.7 : 0.9,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".hero-cta",
          start: "top 85%",
        },
      });

      /* RIGHT TEXT */
      gsap.from(".hero-right > *", {
        x: isMobile ? 25 : 60,
        opacity: 0,
        duration: isMobile ? 0.7 : 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-right",
          start: "top 80%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* CONTENT */}
      <div className="relative z-50 text-white w-full h-full flex flex-col lg:grid lg:grid-rows-[auto_1fr] overflow-y-auto lg:overflow-hidden">

        {/* DESKTOP NAVBAR - CENTER TOP ABSOLUTE */}
        <div className="hidden lg:flex absolute top-8 left-1/2 -translate-x-1/2 z-[60]">
          <Navbar />
        </div>

        {/* TOP ROW */}
        {/* Mobile: Navbar needs to be accessible. We might need to rethink the stacking. 
            For now, Flex column reverse might hide navbar if we are not careful (since navbar is in the 2nd child).
            Actually, Navbar is usually at the top. 
            Let's keep the grid but change columns for mobile.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] w-full px-6 md:px-10 pt-6 md:pt-10 gap-6 lg:gap-0">

          {/* SOCIAL MEDIA - Hidden on very small screens or stacked */}
          <div className="social-wrapper grid grid-cols-2 gap-4 w-fit h-fit hidden sm:grid lg:grid order-2 lg:order-1 mt-4 lg:mt-0">
            <a href="https://www.linkedin.com/company/devignservices/about/?viewAsMember=true" className="w-8 social-item block">
              <img src="/linkedin.png" className="w-full" />
            </a>
            <a href="https://www.behance.net/hiyanshugupta" className="w-8 social-item block">
              <img src="/behance.png" className="w-full" />
            </a>
          
            <p className="text-xs leading-tight social-item font-poppins">
              Social<br />Media
            </p>
          </div>

          {/* TITLE + NAV - Order 1 on mobile to be at top */}
          <div className="flex flex-col w-full text-center lg:text-right items-center lg:items-end justify-end order-1 lg:order-2 gap-4 lg:gap-0">

            {/* TITLE & MOBILE MENU WRAPPER */}
            <div className="flex justify-center lg:contents w-full">
              {/* TITLE */}
              <div className="hero-title text-[90px] sm:text-[130px] lg:text-[150px] leading-tight font-extrabold flex justify-center lg:justify-end order-1 w-full lg:w-auto">
                {/* 15vw ensures it scales on mobile without overflow */}
                {["D", "E", "V", "I", "G", "N"].map((char, i) => (
                  <span
                    key={i}
                    className={`hero-letter ${char === "Q" ? "text-[#00AEEF]" : ""
                      }`}
                  >
                    {char}
                  </span>
                ))}
              </div>

              {/* HAMBURGER - Absolute Positioned on Mobile */}
              <div className="lg:hidden absolute top-6 right-6 z-50">
                <Navbar />
              </div>
            </div>

            {/* NAVBAR - DESKTOP ONLY LOCATION */}
            {/* Flex Item 2 in the Column - Stacks BELOW title */}
            {/* NAVBAR - Moved to Top Center (See above) */}
            <div className="hidden"></div>

          </div>
        </div>

        {/* BOTTOM ROW */}
        {/* Mobile: Flex Column. Order: Text -> CTA -> Cards */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 w-full px-6 md:px-10 mt-10 lg:mt-20 gap-10 lg:gap-12 items-start lg:items-start pb-10 lg:pb-0">

          {/* CARDS - Last on mobile (bottom) */}
          <div className="hero-cards flex flex-col gap-6 w-full items-center lg:items-start">
            <div className="hero-card bg-gradient-to-br from-[#0045ff30] to-[#00aaff20] p-6 rounded-3xl w-full sm:w-56 backdrop-blur-md border border-white/20">
              <h1 className="text-4xl font-bold font-poppins">20+</h1>
              <p className="opacity-80 text-base font-poppins">Services</p>
              <p className="text-sm mt-2 opacity-70 leading-tight font-poppins">
                From sketches to fully developed websites.
              </p>
            </div>

            <div className="hero-card bg-white text-black p-6 rounded-3xl w-full sm:w-56 shadow-xl">
              <h1 className="text-4xl font-bold font-poppins">80+</h1>
              <p className="opacity-80 text-base font-poppins">Projects</p>
              <p className="text-sm mt-2 opacity-70 leading-tight font-poppins">
                Clients across 12+ countries.
              </p>
            </div>
          </div>

          {/* CTA - Middle on mobile */}
          <div className="h-full flex items-end justify-center w-full">
            {/* Adjusted margin and borders for mobile */}
            <div className="hero-cta rounded-[83px] border-2 border-white flex items-center gap-4 p-3 md:p-4 mb-0 lg:mb-10 backdrop-blur-sm scale-90 sm:scale-100 origin-center">
              <p className="text-xl md:text-2xl font-medium whitespace-nowrap font-poppins">
                Get Your Website Built
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-[#00C8FF] rounded-[83px] py-3 px-6 flex items-center justify-center text-black font-bold cursor-pointer hover:bg-[#00b0e0] transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT TEXT - First on mobile (top of bottom section) */}
          <div className="hero-right flex flex-col items-center lg:items-end text-center lg:text-right pt-0 lg:pt-10 w-full">
            <h4 className="text-[24px] md:text-[32px] font-semibold uppercase opacity-90">
              Not Just Websites
            </h4>
            <h3 className="text-[48px] md:text-[64px] font-extrabold leading-tight uppercase">
              Digital Experiences
            </h3>
            <p className="text-lg md:text-xl max-w-md opacity-90 mt-4 lg:mt-0 font-poppins">
              We’re a designer–developer duo crafting seamless digital
              experiences that connect brands with people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
