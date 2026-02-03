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
      <div className="relative z-50 text-white w-full h-full grid grid-rows-[auto_1fr]">
        {/* TOP ROW */}
        <div className="grid grid-cols-[1fr_2fr] w-full px-10 pt-10">
          {/* SOCIAL MEDIA */}
          <div className="social-wrapper grid grid-cols-2 gap-4 w-fit h-fit ">
            <a href="#" className="w-8 social-item block">
              <img src="/linkedin.png" className="w-full" />
            </a>
            <a href="#" className="w-8 social-item block">
              <img src="/behance.png" className="w-full" />
            </a>
            <a href="#" className="w-8 social-item block">
              <img src="/x.png" className="w-full" />
            </a>
            <p className="text-[10px] leading-tight social-item">
              Social<br />Media
            </p>
          </div>

          {/* TITLE + NAV */}
          <div className="grid grid-rows-[auto_auto] text-right justify-self-end items-end">
            {/* TITLE */}
            <div className="hero-title text-[150px] leading-tight font-extrabold flex justify-end ">
              {["S", "O", "Q", "U", "R", "E"].map((char, i) => (
                <span
                  key={i}
                  className={`hero-letter ${char === "Q" ? "text-[#00AEEF]" : ""
                    }`}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* NAVBAR */}
            <div className="hero-nav flex justify-end pt-4 w-full">
              <Navbar />
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-3 w-full px-10 mt-20 gap-12 items-start">
          {/* CARDS */}
          <div className="hero-cards flex flex-col gap-6">
            <div className="hero-card bg-gradient-to-br from-[#0045ff30] to-[#00aaff20] p-6 rounded-3xl w-56 backdrop-blur-md border border-white/20">
              <h1 className="text-4xl font-bold">20+</h1>
              <p className="opacity-80 text-sm">Services</p>
              <p className="text-xs mt-2 opacity-70 leading-tight">
                From sketches to fully developed websites.
              </p>
            </div>

            <div className="hero-card bg-white text-black p-6 rounded-3xl w-56 shadow-xl">
              <h1 className="text-4xl font-bold">80+</h1>
              <p className="opacity-80 text-sm">Projects</p>
              <p className="text-xs mt-2 opacity-70 leading-tight">
                Clients across 12+ countries.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="h-full flex items-end justify-center">
            <div className="hero-cta rounded-[83px] border-2 border-white flex items-center gap-4 p-4 mb-10 backdrop-blur-sm">
              <p className="text-2xl font-medium">
                Get Your Website Built
              </p>
              <button className="bg-[#00C8FF] rounded-[83px] py-3 px-6  flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="hero-right flex flex-col items-end text-right pt-10">
            <h4 className="text-[32px] font-semibold uppercase opacity-90">
              Not Just Websites
            </h4>
            <h3 className="text-[64px] font-extrabold leading-tight uppercase">
              Digital Experiences
            </h3>
            <p className="text-lg max-w-md opacity-90">
              We’re a designer–developer duo crafting seamless digital
              experiences that connect brands with people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
