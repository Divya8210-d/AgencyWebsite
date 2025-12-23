import motion from "framer-motion"






export function Services() {
  return (
    <div className="relative z-50">

      {/* ================= TOP TEXT SECTION ================= */}
      <div className="text-white w-full px-4 sm:px-6 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] w-full gap-6 py-10">

          {/* LEFT LARGE TEXT */}
          <div className="space-y-2 leading-[1.1] text-center lg:text-left">
            <div className="text-[48px] sm:text-[72px] md:text-[96px] font-extrabold">
              WE DON’T FOLLOW TEMPLATES.
            </div>

            <div className="text-[48px] sm:text-[72px] md:text-[96px] font-extrabold">
              WE <span className="text-[#00AEEF]">DESIGN AND DEVELOP</span>
            </div>

            <div className="text-[48px] sm:text-[72px] md:text-[96px] font-extrabold">
              WHAT <span className="text-[#00AEEF]">YOUR BRAND</span> TRULY NEEDS.
            </div>
          </div>

          {/* RIGHT SMALL TEXT */}
          <div className="flex flex-col justify-center lg:justify-end items-center lg:items-end gap-3 mb-2">
            <p className="text-sm tracking-widest text-center lg:text-right">
              EXPLORE OUR<br />
              DIVERSE RANGE<br />
              OF SERVICES
            </p>

            <div className="flex flex-col gap-2 items-center lg:items-end">
              <div className="w-24 h-[3px] bg-white rounded-full"></div>
              <div className="w-16 h-[3px] bg-white rounded-full"></div>
            </div>
          </div>

        </div>
      </div>

 {/* ================= 4 SERVICE CARDS ================= */}
{/* ================= 4 SERVICE CARDS ================= */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 px-6 lg:px-24">

 
    <div
     
      className="relative bg-gray-800 rounded-xl h-64 overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src="/cardbg.png"
        alt="card background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-[32px] sm:text-[44px] md:text-[56px]  leading-tight">
          Website<br/> Development
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xs">
          Code built for speed, scale, and stability.
        </p>
      </div>
    </div>



    <div
     
      className="relative bg-gray-800 rounded-xl h-64 overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src="/cardbg.png"
        alt="card background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-[32px] sm:text-[44px] md:text-[56px]  leading-tight">
        Maintenance
 & <br/>Optimization
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xs">
         Continuous improvement for a consistently better web experience.
        </p>
      </div>
    </div>





    <div
     
      className="relative bg-gray-800 rounded-xl h-64 overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src="/cardbg.png"
        alt="card background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-[32px] sm:text-[44px] md:text-[56px]  leading-tight">
        UI/UX
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xs">
          We don’t design pixels. We design purpose.
        </p>
      </div>
    </div>





    <div
     
      className="relative bg-gray-800 rounded-xl h-64 overflow-hidden text-white"
    >
      {/* Background Image */}
      <img
        src="/cardbg.png"
        alt="card background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h3 className="text-[32px] sm:text-[44px] md:text-[56px]  leading-tight">
          Brand<br/> Identity
        </h3>
        <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xs">
          Visual identity that mirrors your story and ambition.
        </p>
      </div>
    </div>




</div>



      {/* ================= VIDEO + AUDIENCE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full text-white px-6 lg:px-16 py-16">

        {/* TEXT FIRST ON MOBILE */}
        <div className="flex flex-col gap-16 order-1 lg:order-2">

          {/* HEADER */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start text-center sm:text-left">

            <div className="leading-[1.1] space-y-1">
              <div className="text-[28px] sm:text-[96px] font-extrabold">
                WE <span className="text-[#00AEEF]">DO OUR BEST</span>
              </div>
              <div className="text-[28px] sm:text-[96px] font-extrabold">
                WORK WITH
              </div>
            </div>

            <div className="flex flex-col justify-end items-center sm:items-end gap-3 mt-6 sm:mt-2">
              <p className="text-[16px] tracking-widest text-center sm:text-right">
                EXPLORE OUR <br />
                DIVERSE RANGE <br />
                OF SERVICES
              </p>

              <div className="flex flex-col items-center sm:items-end gap-2">
                <div className="w-24 h-[3px] bg-white rounded-full"></div>
                <div className="w-16 h-[3px] bg-white rounded-full"></div>
              </div>
            </div>

          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <div className="bg-black/30 border border-white/20 rounded-2xl p-6">
              <div className="text-[32px] font-bold">01 <span className="font-medium font-sans ">Personal Brands & Creators</span></div>
              
              <p className="text-sm mt-2 opacity-80">
                For individuals looking to build a strong online identity, showcase their work with clarity, and create a digital presence that feels authentic and professional.
              </p>
            </div>

            <div className="bg-[#1d2b36] rounded-2xl p-6">
              <div className="text-[32px] font-bold text-[#00AEEF]">02  <span className="font-semibold mt-2 text-white">Small & Growing Businesses</span></div>
              
              <p className="text-sm mt-2 opacity-80">
          For teams that need a modern website, clearer messaging, and a digital presence that supports sales, trust, and long-term growth.
              </p>
            </div>

            <div className="border border-white/30 rounded-2xl p-6">
              <div className="text-[32px] font-bold text-[#00AEEF]">03 <span className="font-semibold mt-2 text-white">Startups & Founder Teams</span></div>
              
              <p className="text-sm mt-2 opacity-80">
               For early-stage companies preparing to launch or scale, who need fast, smart web solutions that communicate their vision and build credibility.
              </p>
            </div>

            <div className="bg-black/30 border border-white/20 rounded-2xl p-6">
              <div className="text-[32px] font-bold">04   <span className="font-semibold mt-2 text-white">Established Companies</span ></div>
             
              <p className="text-sm mt-2 opacity-80">
              For businesses seeking a fresh digital upgrade—flexible, scalable, and reliable solutions without unnecessary complexity.
              </p>
            </div>

          </div>
        </div>

        {/* VIDEO SECOND ON MOBILE */}
        <div className="flex justify-center items-start order-2 lg:order-1">
          <video
            src="/websitevideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[260px] sm:h-[360px] lg:h-full object-cover rounded-xl"
          />
        </div>

      </div>
    </div>
  );
}
