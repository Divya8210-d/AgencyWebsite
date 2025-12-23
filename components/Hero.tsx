import Navbar from "./Navbar";

export function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* FULLSCREEN BACKGROUND VIDEO */}
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>

      {/* CONTENT ABOVE VIDEO */}
      <div className="relative z-50 text-white w-full h-full grid grid-rows-[auto_1fr] overflow-x-hidden">

        {/* ================= TOP ROW ================= */}
        <div className="grid grid-cols-[1fr_2fr] w-full px-10 pt-10">

          {/* SOCIAL ICONS */}
          <div className="flex flex-col gap-4">
            <img src="/linkedin.png" className="w-10" alt="linkedin" />
            <img src="/behance.png" className="w-10" alt="behance" />
            <p className="text-xs leading-tight">Social<br />Media</p>
          </div>

          {/* TITLE + NAV */}
          <div className="grid grid-rows-[auto_auto] text-right">

            {/* BIG TITLE */}
            <div className="text-[150px] leading-tight  font-extrabold ">
              SO<span className="text-[#00AEEF]">QURE</span>
            </div>

            {/* RIGHTMOST NAVBAR */}
            <div className="flex justify-end w-full pt-4">
              <div className="ml-auto">
                <Navbar />
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW (fills remaining height) ================= */}
        <div className="grid grid-cols-3 w-full px-10 mt-20 gap-12 items-start">

          {/* LEFT — CARDS */}
          <div className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#0045ff30] to-[#00aaff20] p-6 rounded-3xl w-56 backdrop-blur-md border border-white/20">
              <h1 className="text-4xl font-bold">20+</h1>
              <p className="opacity-80 mt-1 text-sm">Services</p>
              <p className="text-xs mt-2 opacity-70 leading-tight">
                We take care of everything —<br />
                from early sketches to fully<br />
                developed websites.
              </p>
            </div>

            <div className="bg-white text-black p-6 rounded-3xl w-56 shadow-xl">
              <h1 className="text-4xl font-bold">80+</h1>
              <p className="opacity-80 mt-1 text-sm">Projects</p>
              <p className="text-xs mt-2 opacity-70 leading-tight">
                Collaborating with clients from<br />
                12+ countries on a variety<br />
                of projects.
              </p>
            </div>
          </div>

          {/* MIDDLE — BUTTON AT BOTTOM OF CELL */}
          {/* key: h-full + flex + items-end makes it stick to bottom */}
          <div className="h-full flex items-end justify-center">
            <div className="rounded-[83px] border-2 border-white flex items-center gap-4 p-4 text-white w-fit backdrop-blur-sm mb-10">
              <p className="text-2xl font-medium">Get Your Website Built</p>

              <button className="bg-[#00C8FF] rounded-full p-4 flex items-center justify-center hover:bg-[#0dd3ff] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-7 h-7"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT — FULL RIGHT ALIGNED TEXT */}
          <div className="flex flex-col items-end text-right pt-10">
            <h4 className="text-[32px] font-semibold uppercase opacity-90">Not Just Websites</h4>

            <h3 className="text-[64px] font-extrabold leading-tight uppercase">
              Digital Experiences
            </h3>

            <p className="text-lg max-w-md opacity-90">
              We’re a designer–developer duo crafting seamless digital experiences that connect brands
              with people and help businesses grow online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
