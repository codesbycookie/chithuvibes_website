export default function HeritageSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#DCDCDC" }}
    >
      {/* LEFT — image placeholder */}
      <div
        className="flex items-center justify-center min-h-[300px] md:min-h-[520px]"
        style={{ backgroundColor: "#CCCCCC" }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#AAAAAA"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>

      {/* RIGHT — content */}
      <div
        className="flex items-center box-border px-6 py-12 md:px-[72px] md:py-[80px]"
        style={{ backgroundColor: "#EDEAF2" }}
      >
        <div className="w-full">

          {/* Badge */}
          <div
            className="inline-block mb-7 px-[14px] py-[6px]"
            style={{ backgroundColor: "#3D3566" }}
          >
            <span
              className="text-[11px] tracking-[0.22em] uppercase text-white"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              The Heritage
            </span>
          </div>

          {/* Heading */}
          <h2
            className="italic font-normal leading-[1.15] mb-10 text-[40px] md:text-[64px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#3D3566",
            }}
          >
            Evolving the<br />Eternal Script
          </h2>

          {/* Para 1 */}
          <p
            className="text-[14px] md:text-[15px] leading-[1.85] mb-7 w-full md:max-w-[480px]"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#444444",
            }}
          >
            Chithu Vibes was born from a singular vision: to ensure that the exquisite flow of Tamil calligraphy survives the digital age by carving it into the physical world.
          </p>

          {/* Para 2 */}
          <p
            className="text-[14px] md:text-[15px] leading-[1.85] mb-12 w-full md:max-w-[480px]"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#444444",
            }}
          >
            Our process combines the meditative patience of a traditional scribe with the uncompromising power of industrial lasers. Every piece is a dialogue between the old and the new.
          </p>

          {/* Link Button */}
          <button
            className="bg-transparent border-none text-[12px] font-bold tracking-[0.18em] uppercase pb-1 cursor-pointer"
            style={{
              borderBottom: "2px solid #C9A84C",
              color: "#C9A84C",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            Learn Our Process
          </button>

        </div>
      </div>
    </section>
  );
}