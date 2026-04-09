export default function SpotlightSection() {
  const cornerWidths = [92, 74, 56, 38, 22];

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-5 py-16 bg-[#f0eef4] font-sans">

      {/* Card */}
      <div className="relative w-full max-w-[820px] overflow-hidden rounded-3xl px-6 pt-10 pb-8 md:px-[80px] md:pt-[70px] md:pb-[60px] bg-white shadow-[0_2px_40px_rgba(90,70,120,0.06)]">

        {/* Corner diagonal lines */}
        <div className="absolute top-[22px] right-[22px] opacity-[0.17] pointer-events-none">
          {cornerWidths.map((w, i) => (
            <div
              key={i}
              className="h-[3.5px] bg-[#b0a8b8] rounded-[2px] mb-[6px] origin-right"
              style={{
                width: `${w}px`,
                transform: `rotate(-45deg) translateX(${i * 12}px)`
              }}
            />
          ))}
        </div>

        {/* Eyebrow */}
        <p className="text-center uppercase tracking-[0.22em] text-[#b8972a] mb-7 text-[10.5px] font-medium font-sans">
          Spotlight Block
        </p>

        {/* Title */}
        <h2 className="text-center italic font-serif text-[38px] md:text-[62px] font-normal text-[#5a3f72] leading-[1.1] tracking-[-0.01em] mb-7 md:mb-[34px]">
          A Legacy of Lines
        </h2>

        {/* Body text */}
        <p className="text-center mx-auto font-sans text-[13px] md:text-[14.5px] font-normal text-[#7a7288] leading-[1.82] max-w-[580px] mb-9 md:mb-[44px]">
          Our studio stands at the intersection of roots and radiance. Drawing from deep Tamil
          artistic heartbeats, every stroke is informed by a lifetime of devotion to the curve of
          the alphabet and the logic of the layout.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {["Heritage-First", "Mastery Since 2023"].map((label) => (
            <span
              key={label}
              className="uppercase tracking-[0.18em] border-[1.5px] border-[#c9a84c] rounded-full px-5 py-2.5 md:px-[26px] md:py-[11px] text-[10px] font-semibold text-[#b8912a] font-sans"
            >
              {label}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}