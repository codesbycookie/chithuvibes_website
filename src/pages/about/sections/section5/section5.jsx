export default function ManuscriptQuote() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-6 py-16 md:px-8 md:py-24"
      style={{ backgroundColor: "#7B5E8A" }}
    >

      {/* 99 — gold */}
      <p
        className="mb-6 font-bold leading-none text-[36px] md:text-[48px]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#D4AF37",
        }}
      >
        99
      </p>

      {/* Quote */}
      <blockquote
        className="max-w-xl md:max-w-2xl mx-auto mb-10 italic font-normal leading-[1.45] text-[22px] md:text-[32px]"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "#F5F3F8",
        }}
      >
        "She spent years mastering the logic of code and the grace of the pen. Today, she uses light to etch your emotions into eternity."
      </blockquote>

      {/* Thin vertical gold divider */}
      <div
        className="mb-10 bg-[#D4AF37] opacity-60"
        style={{ width: "1px", height: "55px" }}
      />

      {/* CTA */}
      <button
        className="uppercase font-medium tracking-[0.22em] rounded-full border-none cursor-pointer px-8 py-3 md:px-10 md:py-[14px]"
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "11px",
          backgroundColor: "#D4AF37",
          color: "#F5F3F8",
        }}
      >
        Start Your Manuscript
      </button>

    </section>
  );
}