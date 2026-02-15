"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  role,
}) => {
  return (
    <div className="testimonial-card w-full max-w-[350px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 text-white shadow-2xl transition-transform hover:scale-[1.03]">
      <p className="text-lg sm:text-xl leading-relaxed font-normal font-poppins">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
        <div>
          <h4 className="text-lg sm:text-xl font-medium font-poppins">{name}</h4>
          <span className="text-sm sm:text-base text-cyan-400/80 uppercase tracking-wider font-medium font-poppins">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* HEADING */
      gsap.from(".testimonials-heading span", {
        y: isMobile ? 30 : 80,
        opacity: 0,
        duration: isMobile ? 0.7 : 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-heading",
          start: "top 80%",
        },
      });

      /* TOP ROW CARDS */
      gsap.from(".row-top .testimonial-card", {
        y: isMobile ? 30 : 60,
        opacity: 0,
        duration: isMobile ? 0.7 : 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".row-top",
          start: "top 85%",
        },
      });

      /* BOTTOM ROW CARDS */
      gsap.from(".row-bottom .testimonial-card", {
        y: isMobile ? 40 : 80,
        opacity: 0,
        duration: isMobile ? 0.8 : 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".row-bottom",
          start: "top 85%",
        },
      });

      /* BACKGROUND VIDEO SOFT ZOOM */
      gsap.fromTo(
        ".testimonial-video",
        { scale: 1.1 },
        {
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col justify-center py-20"
    >
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative h-full w-full max-w-4xl opacity-80">
          <video
            src="https://res.cloudinary.com/dad2siqxd/video/upload/v1771183552/testimonial_stbx5o.mp4"
            autoPlay
            loop
            playsInline
            className="testimonial-video h-full w-full object-cover md:object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* HEADER */}
        <div className="mb-16 md:mb-24 testimonials-heading text-center lg:text-left">
          <h2 className="text-[64px] sm:text-[84px] md:text-[96px] font-bold leading-tight tracking-tight">
            <span className="block">
              <span className="text-cyan-400">TRUST</span> THAT STARTED
            </span>
            <span className="block">
              WITH <span className="text-cyan-400">THE FIRST PROJECT</span>
            </span>
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-rows-2 gap-y-16 md:gap-y-24 w-full">
          {/* TOP ROW */}
          <div className="row-top flex flex-col items-center md:flex-row md:items-start justify-between gap-8 lg:gap-24">
            <TestimonialCard
              text="Soqure Agency made a well-designed landing page with consistent professionalism and clear communication."
              name="Ashok Chhabra"
              role="Blog Writer"
            />

            <TestimonialCard
              text="Soqure Agency delivered a polished landing page with professionalism and clear communication."
              name="Ayaarodi"
              role="Coconuts Roots Founder"
            />
          </div>


          {/* BOTTOM ROW */}
          <div className="row-bottom flex justify-center">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-60 max-w-5xl">
              <TestimonialCard
                text="They were easy to collaborate with, and any delays were from my side. I confidently recommend their services."
                name="Caroling Pen"
                role="Book Publishers"
              />

              <TestimonialCard
                text="They quickly understood our goals and created a clean and intuitive interface."
                name="Rahul"
                role="Content Creator"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
