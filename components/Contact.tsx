

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    about: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



const handleSubmit = async () => {
  setStatus({ loading: true, success: false, error: "" });

  try {
    const response = await axios.post(
      "https://devignbackend.onrender.com/contact",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setStatus({ loading: false, success: true, error: "" });
    setFormData({ name: "", email: "", number: "", about: "" });

    alert("Email sent successfully!");
  } catch (error) {
    console.error(error);
    setStatus({
      loading: false,
      success: false,
      error: "Failed to send email. Please try again.",
    });

    alert("Failed to send email. Please try again.");
  }
};


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
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="email"
            name="email"
            placeholder="E - Mail"
            value={formData.email}
            onChange={handleChange}
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="text"
            name="number"
            placeholder="Phone No."
            value={formData.number}
            onChange={handleChange}
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />

          <input
            type="text"
            name="about"
            placeholder="About the Project"
            value={formData.about}
            onChange={handleChange}
            className="contact-input bg-[#263238] rounded-2xl px-6 py-4 outline-none placeholder-gray-300"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center md:justify-end">
          <div className="contact-btn rounded-[83px] border-2 border-white flex items-center gap-4 p-3 sm:p-4 h-fit backdrop-blur-sm">
            <p className="text-lg sm:text-2xl font-medium">
              {status.loading ? "Sending..." : "Send Request"}
            </p>

            <button
              onClick={handleSubmit}
              disabled={status.loading}
              className="bg-[#00C8FF] rounded-full p-3 sm:p-4 flex items-center justify-center hover:bg-[#0dd3ff] transition disabled:opacity-50"
            >
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
