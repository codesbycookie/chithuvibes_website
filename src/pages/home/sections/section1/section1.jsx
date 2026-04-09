export default function Section1() {
  return (
    <section
      className="flex items-center min-h-screen pt-16 box-border"
      style={{ backgroundColor: "#F0EEF5" }}
    >
      <div className="w-full mx-auto px-[72px] py-[60px] grid gap-12 items-center box-border"
        style={{ maxWidth: "1200px", gridTemplateColumns: "55% 45%" }}
      >

        {/* LEFT */}
        <div className="flex flex-col items-start">
          <p
            className="mb-8 uppercase text-[11px] tracking-[0.25em]"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#3D3566",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "#3D3566",
              textUnderlineOffset: "5px",
            }}
          >
            Heritage &amp; Technology
          </p>

          <h1
            className="m-0 mb-2 leading-none tracking-[-0.01em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "76px",
              fontWeight: 600,
              color: "#3D3566",
            }}
          >
            The Soul of<br />Tamil Calligraphy.
          </h1>

          <h2
            className="m-0 mb-8 leading-snug"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "50px",
              fontWeight: 700,
              color: "#C9A84C",
            }}
          >
            ழகரம் பேசும்<br />எழுத்தின் கலை.
          </h2>

          <p
            className="mb-9 text-[14px] leading-[1.85]"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#555555",
              maxWidth: "380px",
              fontWeight: 300,
            }}
          >
            Where ancient script meets avant-garde technology. We immortalize the fluid beauty of Tamil letters into timeless materials with microscopic accuracy.
          </p>

          <button
            className="border-none cursor-pointer text-[11px] font-semibold tracking-[0.2em] uppercase px-9 py-4"
            style={{
              background: "linear-gradient(to right, #f5e6a5, #D4AF37,#D4AF37)",
              color: "#1a1a1a",
              fontFamily: "'Jost', sans-serif",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "all 0.25s ease",
            }}
          >
            Explore Collection
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative pb-10">
          <div
            className="rounded-[10px] h-[500px] w-full flex items-center justify-center"
            style={{ backgroundColor: "#D8D8D8" }}
          >
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>

          <div
            className="absolute bottom-[15px] -left-[25px] bg-white rounded-[3px] p-5 z-10"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              maxWidth: "255px",
            }}
          >
            <p
              className="m-0 text-[15px] italic leading-[1.65]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: "#3D3566",
              }}
            >
              "A celebration of my roots, etched for eternity."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}