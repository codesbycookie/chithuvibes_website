export default function AboutHero() {
  return (
    <section className="min-h-screen bg-[#F5F3F8] flex flex-col items-center justify-center text-center px-6 py-16 md:px-8 md:py-20">

      {/* Label */}
      <p className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-8 font-medium"
        style={{ fontFamily: "'Jost', sans-serif" }}>
        A Master's Legacy
      </p>

      {/* H1 — italic purple */}
      <h1
        className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[90px] leading-[1.05] text-[#3D3566] mb-2"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 400 }}
      >
        The Soul of Tamil<br />Calligraphy.
      </h1>

      {/* H2 — gold */}
      <h2
        className="text-[44px] sm:text-[60px] md:text-[72px] lg:text-[90px] leading-[1.05] text-[#C9A84C] mb-8"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
      >
        The Precision of the Laser.
      </h2>

      {/* Divider line */}
      <div className="w-16 h-px bg-[#C9A84C] mb-8" />

      {/* Subtext */}
      <p
        className="text-sm text-[#999999] leading-relaxed max-w-xs sm:max-w-sm text-center mb-6"
        style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
      >
        Where ancient scripts meet modern radiance. Founded in 2023, Chithu Vibes is the convergence of scholarly heritage and laser engineering.
      </p>

      {/* Down arrow */}
      <span className="text-[#C9A84C] text-lg">&#8964;</span>

    </section>
  );
}