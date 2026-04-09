export default function FounderSection() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      {/* LEFT — image placeholder */}
      <div className="flex items-stretch px-6 py-8 md:pl-[60px] md:pr-[40px] md:py-[40px]">
        <div
          className="rounded-lg w-full flex items-center justify-center min-h-[280px] md:min-h-0"
          style={{ backgroundColor: "#D5D5D5" }}
        >
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#BBBBBB"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
      </div>

      {/* RIGHT — content */}
      <div className="flex items-center box-border px-6 py-12 md:pl-[48px] md:pr-[72px] md:py-[80px]">
        <div className="w-full">

          {/* Gold line */}
          <div
            className="w-14 h-[3px] mb-7"
            style={{ backgroundColor: "#C9A84C" }}
          />

          {/* Heading */}
          <h2
            className="font-normal leading-[1.2] mb-7 text-[36px] md:text-[52px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#3D3566",
            }}
          >
            A Note from the Founder
          </h2>

          {/* Quote */}
          <p
            className="italic leading-[1.75] mb-8 text-[18px] md:text-[22px] w-full"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#3D3566",
              maxWidth: "520px",
            }}
          >
            "In every stroke of Tamil script, there is a rhythm. My goal was to capture that rhythm and make it permanent. Each piece we create is more than decor—it's a piece of our shared identity."
          </p>

          {/* Name */}
          <p
            className="text-[12px] font-bold tracking-[0.18em] uppercase mb-1.5"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#C9A84C",
            }}
          >
            Chithu Vibes
          </p>

          {/* Title */}
          <p
            className="text-[11px] tracking-[0.15em] uppercase"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#999999",
            }}
          >
            Master Calligrapher &amp; Founder
          </p>

        </div>
      </div>
    </section>
  );
}