export default function AuthenticitySection() {
  return (
    <section className="bg-white box-border px-6 py-16 md:px-[72px] md:py-[100px]">
      <div className="mx-auto text-center" style={{ maxWidth: "860px" }}>

        {/* Gold compass icon */}
        <div className="flex justify-center mb-8">
          <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="4" x2="6" y2="38" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="4" x2="30" y2="38" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="22" x2="26" y2="22" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" />
            <circle cx="18" cy="4" r="2.5" fill="#C9A84C" />
          </svg>
        </div>

        {/* Heading */}
        <h2
          className="italic font-normal leading-[1.2] mb-9 text-[36px] md:text-[52px]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: "#3D3566",
          }}
        >
          The Edge of Authenticity
        </h2>

        {/* Description */}
        <p
          className="text-[15px] md:text-[16px] leading-[1.85] mx-auto mb-12 md:mb-16 w-full"
          style={{
            fontFamily: "'Jost', sans-serif",
            color: "#555555",
            maxWidth: "700px",
          }}
        >
          Unlike generic fonts, our designs are based on hand-drawn calligraphy by Tamil masters. We then vectorize these unique strokes to maintain the "human touch" even after the laser has done its work.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-6 md:gap-8 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          {[
            { value: "100%",   label: "Original Script" },
            { value: "0.01mm", label: "Laser Accuracy"  },
            { value: "Global", label: "Shipping"         },
          ].map((s) => (
            <div key={s.label}>
              <p
                className="font-medium leading-none mb-2 text-[32px] md:text-[48px]"
                style={{
                  fontFamily: " serif",
                  color: "#C9A84C",
                }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  color: "#999999",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}