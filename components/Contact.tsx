export default function Contact() {
  return (
    <section className="w-full bg-black text-white px-10 py-10">
      
      {/* Main Vertical Grid */}
      <div className="grid grid-rows-3  gap-10 max-w-7xl mx-auto">

        {/* Row 1: Heading */}
        <div>
          <h1 className="text-[96px] font-bold leading-tight">
            LET’S PLAN YOUR <br />
            <span className="text-cyan-400">DIGITAL PRESENCE</span>
          </h1>
        </div>

        {/* Row 2: 2x2 Form Grid */}
        <div className="grid grid-cols-2 gap-5 text-xl">
          
          <input
            type="text"
            placeholder="Name"
            className="bg-[#263238] rounded-2xl px-7 py-5 outline-none placeholder-gray-300"
          />

          <input
            type="email"
            placeholder="E - Mail"
            className="bg-[#263238] rounded-2xl px-7 py-5 outline-none placeholder-gray-300"
          />

          <input
            type="text"
            placeholder="Phone No."
            className="bg-[#263238] rounded-2xl px-7 py-5  outline-none placeholder-gray-300"
          />

          <input
            type="text"
            placeholder="About the Project"
            className="bg-[#263238] rounded-2xl px-7 py-5 outline-none placeholder-gray-300"
          />
        </div>

        {/* Row 3: Button (Right Aligned) */}
        <div className="flex justify-end items-start">
           <div className="h-full">
            <div className="rounded-[83px] border-2 border-white flex items-center gap-4 p-4 text-white w-fit backdrop-blur-sm mb-10">
              <p className="text-2xl font-medium">Send Request</p>

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

        </div>

      </div>
    </section>
  );
}
