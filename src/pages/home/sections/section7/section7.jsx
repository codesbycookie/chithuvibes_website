export default function BespokeSection() {
  return (
    <section
      className="box-border text-center px-6 py-16 md:px-[72px] md:py-[100px]"
      style={{ backgroundColor: "#EDEAF2" }}
    >
      <div className="mx-auto" style={{ maxWidth: "800px" }}>

        {/* Heading */}
        <h2
          className="font-normal leading-[1.1] mb-6 text-[40px] md:text-[72px]"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3D3566" }}
        >
          Begin Your Bespoke Journey
        </h2>

        {/* Sub */}
        <p
          className="text-[14px] md:text-[15px] leading-[1.7] mb-10 md:mb-12"
          style={{ fontFamily: "'Jost', sans-serif", color: "#AAAAAA" }}
        >
          Custom requests, bulk orders, or personal engravings. We are just a message away.
        </p>

        {/* WhatsApp Button */}
        <button
          className="border-none cursor-pointer inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.18em] uppercase px-10 py-[18px]"
          style={{
            background: "linear-gradient(to right, #f5e6a5,#D4AF37,#D4AF37)",
            color: "#3D3566",
            fontFamily: "'Jost', sans-serif",
            boxShadow: "0 6px 24px rgba(201,168,76,0.3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Order via WhatsApp
        </button>

      </div>
    </section>
  );
}