export default function About() {
    
     return(<>

<div className="grid grid-cols-[300px_1fr] gap-10 w-full text-white px-16 py-12">

  {/* LEFT COLUMN — SMALL TEXT + LINES */}
  <div className="flex flex-col justify-start items-start gap-3">

    <p className="text-[12px] tracking-widest leading-5">
      WHO WE ARE <br />
      AND WHY <br />
      CLIENTS <br />
      CHOOSE US
    </p>

    {/* decorative lines */}
    <div className="flex flex-col items-start gap-2 mt-2">
      <div className="w-20 h-[3px] bg-white rounded-full"></div>
      <div className="w-12 h-[3px] bg-white rounded-full"></div>
    </div>

  </div>

  {/* RIGHT COLUMN — VERTICAL GRID */}
  <div className="grid grid-rows-[auto_1fr] gap-10">

    {/* TOP ROW — BIG HEADING */}
<div className="leading-[1.1] space-y-1 text-left items-end flex flex-col">

      <div className="text-[42px] font-extrabold w-full">
        WE’RE A <span className="text-[#00AEEF]">FULL CYCLE</span> DIGITAL AGENCY
        THAT DIVES DEEP INTO YOUR BUSINESS AND<br /><span className="text-[#00AEEF]">WORKS AS A PARTNER</span>, NOT JUST A PROVIDER.
      </div>
    </div>

    {/* BOTTOM ROW — 4 CARDS */}
    <div className="grid grid-cols-4 gap-6">

      {/* CARD 1 */}
      <div className="bg-[#2a3a42] rounded-2xl p-6">
        <div className="text-[32px] font-bold text-center">01</div>
        <div className="font-semibold mt-3">Personal Collaboration</div>
        <p className="text-sm mt-2 opacity-80">
          You work directly with the people building your site — no middlemen.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-[#2a3a42] rounded-2xl p-6">
        <div className="text-[32px] font-bold text-center">02</div>
        <div className="font-semibold mt-3">End To End Services</div>
        <p className="text-sm mt-2 opacity-80">
          Everything you need, handled in one place.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-[#2a3a42] rounded-2xl p-6">
        <div className="text-[32px] font-bold text-center">03</div>
        <div className="font-semibold mt-3">No Templates</div>
        <p className="text-sm mt-2 opacity-80">
          Every project is built from scratch to match your brand.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-[#2a3a42] rounded-2xl p-6">
        <div className="text-[32px] font-bold text-center">04</div>
        <div className="font-semibold mt-3">Smooth & Reliable</div>
        <p className="text-sm mt-2 opacity-80">
          Fast, responsive, reliable user experiences.
        </p>
      </div>

    </div>
  </div>

</div>




  
    
    </>)
}


