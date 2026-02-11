export default function About() {

  return (<>

    {/* MAIN CONTAINER 
        Mobile: Flex column, padded less.
        Desktop: Grid with 300px sidebar, padded more.
    */}
    <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] gap-10 w-full text-white px-6 md:px-12 lg:px-16 py-12">

      {/* LEFT COLUMN — NOW EMPTY / DECORATIVE OR HIDDEN ON MOBILE? 
          User said "move ... below the title". 
          If we move it, the left column might become empty.
          Let's keep the left column structure but leave it empty or remove it if not needed.
          However, the grid `lg:grid-cols-[300px_1fr]` implies a sidebar is expected.
          If we empty it, it will just be whitespace.
      */}
      <div className="hidden lg:flex flex-col justify-start items-start gap-3">
        {/* Original content moved to right column */}
      </div>

      {/* RIGHT COLUMN — VERTICAL GRID */}
      <div className="grid grid-rows-[auto_1fr] gap-10">

        {/* TOP ROW — BIG HEADING + SMALL TEXT */}
        <div className="leading-[1.1] space-y-6 text-center lg:text-left items-center lg:items-start flex flex-col">
          {/* Ensure font size is responsive and breaks words if needed */}
          <div className="text-[42px] sm:text-[64px] font-extrabold w-full break-words">
            WE’RE A <span className="text-[#00AEEF]">FULL CYCLE</span> DIGITAL AGENCY
            THAT DIVES DEEP INTO YOUR BUSINESS AND<br /><span className="text-[#00AEEF]">WORKS AS A PARTNER</span>, NOT JUST A PROVIDER.
          </div>

          {/* MOVED SMALL TEXT HERE */}
          <div className="flex flex-col justify-start items-center lg:items-start gap-3 mt-4">
            <p className="text-sm tracking-widest leading-6 text-center lg:text-left font-poppins">
              WHO WE ARE <br />
              AND WHY <br />
              CLIENTS <br />
              CHOOSE US
            </p>

            {/* decorative lines */}
            <div className="flex flex-col items-center lg:items-start gap-2 mt-2">
              <div className="w-20 h-[3px] bg-white rounded-full"></div>
              <div className="w-12 h-[3px] bg-white rounded-full"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW — 4 CARDS 
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 4 columns
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#2a3a42] rounded-2xl p-6">
            <div className="text-[32px] font-bold text-left sm:text-center font-poppins">01</div>
            <div className="font-semibold mt-3 font-poppins text-lg">Personal Collaboration</div>
            <p className="text-base mt-2 opacity-80 font-poppins">
              You work directly with the people building your site — no middlemen.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#2a3a42] rounded-2xl p-6">
            <div className="text-[32px] font-bold text-left sm:text-center font-poppins">02</div>
            <div className="font-semibold mt-3 font-poppins text-lg">End To End Services</div>
            <p className="text-base mt-2 opacity-80 font-poppins">
              Everything you need, handled in one place.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#2a3a42] rounded-2xl p-6">
            <div className="text-[32px] font-bold text-left sm:text-center font-poppins">03</div>
            <div className="font-semibold mt-3 font-poppins text-lg">No Templates</div>
            <p className="text-base mt-2 opacity-80 font-poppins">
              Every project is built from scratch to match your brand.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#2a3a42] rounded-2xl p-6">
            <div className="text-[32px] font-bold text-left sm:text-center font-poppins">04</div>
            <div className="font-semibold mt-3 font-poppins text-lg">Smooth & Reliable</div>
            <p className="text-base mt-2 opacity-80 font-poppins">
              Fast, responsive, reliable user experiences.
            </p>
          </div>

        </div>
      </div>

    </div >






  </>)
}


