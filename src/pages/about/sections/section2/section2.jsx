export default function OriginStorySection() {
  return (
    <section className="bg-white py-12 px-6 md:py-20 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT — image with rotated card frame */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[320px] md:max-w-[420px] h-[380px] md:h-[520px] rotate-[-3deg]">

            {/* Outer gold border card */}
            <div className="absolute inset-0 rounded-[20px] border-[1.5px] border-cv-gold rotate-[2deg]" />

            {/* Image placeholder */}
            <div className="absolute inset-0 rounded-[16px] overflow-hidden bg-[#1a2a1a]">
              <div className="w-full h-full bg-[#1C2B1C] flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3a4a3a" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — content */}
        <div className="flex flex-col gap-5">

          {/* Heading */}
          <h2 className="text-[38px] md:text-[52px] text-[#3D3566] leading-tight mb-2 font-serif italic font-normal">
            Our Origin Story
          </h2>

          {/* Para 1 */}
          <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed font-sans font-light">
            Emerging from the heart of Tamil Nadu in 2023, Chithu Vibes was born from a singular vision: to give the ephemeral beauty of handwriting the permanence of stone.
          </p>

          {/* Para 2 */}
          <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed font-sans font-light">
            We believe that emotions are the most precious cargo of human communication. When you choose a word, a name, or a verse, you are sharing a piece of your soul.
          </p>

          {/* Gold quote block */}
           <div className="border-l-4 border-[#D4AF37] pl-5 py-1 my-1">
            <p className="text-[18px] md:text-[20px] text-[#D4AF37] leading-relaxed font-serif italic font-normal">
             "Etching Your Emotions into Eternity."
            </p>
           </div>

          {/* Para 3 */}
          <p className="text-[14px] md:text-[15px] text-[#444444] leading-relaxed font-sans font-light">
            By merging the master's hand with the precision of laser light, we create artifacts that don't just decorate space—they anchor memories.
          </p>

        </div>
      </div>
    </section>
  );
}