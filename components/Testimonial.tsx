import React from "react";

const TestimonialCard = ({ text, name, role }) => {
  return (
    <div className="w-full max-w-[350px] rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 text-white shadow-2xl transition-transform hover:scale-105">
      <p className="text-xl leading-5 text-white font-normal ">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-200 shrink-0" />
        <div>
          <h4 className="text-xl font-medium">{name}</h4>
          <span className="text-sm text-cyan-400/80 uppercase tracking-wider font-medium">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col justify-center py-20">
      
      {/* --- BACKGROUND VIDEO ELEMENT --- */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative h-full w-full max-w-4xl opacity-80">
          <video
            src="/testimonial.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover md:object-contain mask-image-video"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-[96px] font-bold leading-[1.1] tracking-tight">
            <span className="text-cyan-400">TRUST</span> THAT STARTED <br />
            WITH <span className="text-cyan-400">THE FIRST PROJECT</span>
          </h2>
        </div>

        {/* --- CARDS LAYOUT --- */}
        {/* Grid setup: 2 columns with a large central gap to frame the whale */}
       <div className="grid grid-rows-2 gap-y-24 w-full">

  {/* TOP CELL */}
  <div className="flex justify-between gap-x-12 lg:gap-x-24">
    <TestimonialCard
      text="Soqure Agency made a well-designed landing page with consistent professionalism and clear communication. They were easy to collaborate with."
      name="Ashok Chhabra"
      role="Blog Writer"
    />

    <TestimonialCard
      text="Soqure Agency delivered a well-designed landing page with consistent professionalism and clear communication. Highly recommended."
      name="Ayaarodi"
      role="Coconuts Roots Founder"
    />
  </div>

  {/* BOTTOM CELL */}
  <div className="flex  justify-center">
     <div className="flex  gap-12 lg:gap-60 max-w-5xl ">
   
    <TestimonialCard
      text="Soqure Agency made a well-designed landing page with consistent professionalism and clear communication. They were easy to collaborate with, and any delays were from my side. I would confidently recommend their services."
      name="Caroling Pen"
      role="Book Publishers"
    />

    <TestimonialCard
      text="Our experience with this team was genuinely impressive. They quickly understood our goals and created a clean and intuitive interface."
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