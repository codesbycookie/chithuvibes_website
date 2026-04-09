const TrophyIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h8M12 17v4M7 4H4a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1" />
    <path d="M17 4h3a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4h-1" />
    <path d="M7 4h10v8a5 5 0 0 1-10 0V4z" />
  </svg>
);

const ScrollIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="#b8972a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const FounderIllustration = () => (
  <svg viewBox="0 0 220 270" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full block">
    <rect width="220" height="270" fill="#1a1520" />
    <ellipse cx="110" cy="245" rx="78" ry="60" fill="#c0420a" />
    <ellipse cx="110" cy="225" rx="65" ry="54" fill="#d4560e" />
    <path d="M44 255 Q110 205 176 255" stroke="#d4a017" strokeWidth="3.5" fill="none" />
    <ellipse cx="110" cy="185" rx="44" ry="22" fill="#c8845a" />
    <ellipse cx="110" cy="138" rx="40" ry="46" fill="#c8845a" />
    <ellipse cx="110" cy="102" rx="40" ry="28" fill="#1a0e08" />
    <path d="M70 108 Q63 135 68 160 Q77 148 79 132 Z" fill="#1a0e08" />
    <path d="M150 108 Q157 135 152 160 Q143 148 141 132 Z" fill="#1a0e08" />
    <ellipse cx="122" cy="97" rx="24" ry="15" fill="#1a0e08" />
    <circle cx="110" cy="124" r="3.8" fill="#cc2222" />
    <ellipse cx="96" cy="139" rx="6" ry="4.2" fill="#fff" />
    <ellipse cx="124" cy="139" rx="6" ry="4.2" fill="#fff" />
    <ellipse cx="96" cy="139" rx="3.4" ry="3.4" fill="#2a1a0e" />
    <ellipse cx="124" cy="139" rx="3.4" ry="3.4" fill="#2a1a0e" />
    <ellipse cx="97" cy="138" rx="1.1" ry="1.1" fill="#fff" />
    <ellipse cx="125" cy="138" rx="1.1" ry="1.1" fill="#fff" />
    <path d="M89 131 Q96 128 104 131" stroke="#1a0e08" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M116 131 Q124 128 131 131" stroke="#1a0e08" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M108 144 Q110 150 112 144" stroke="#a06040" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M102 159 Q110 167 118 159" stroke="#a05035" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M105 159 Q110 163 115 159" fill="#c05545" />
    <circle cx="70" cy="150" r="5.5" fill="#d4a017" />
    <circle cx="150" cy="150" r="5.5" fill="#d4a017" />
    <line x1="70" y1="155" x2="70" y2="167" stroke="#d4a017" strokeWidth="1.8" />
    <line x1="150" y1="155" x2="150" y2="167" stroke="#d4a017" strokeWidth="1.8" />
    <circle cx="70" cy="170" r="3.5" fill="#d4a017" />
    <circle cx="150" cy="170" r="3.5" fill="#d4a017" />
    <path d="M80 178 Q110 190 140 178" stroke="#d4a017" strokeWidth="2" fill="none" />
    <circle cx="110" cy="190" r="4.5" fill="#d4a017" />
  </svg>
);

const bioParas = [
  "Before the laser hummed in her studio, Jeya Chitra's world was shaped by the binary logic of code and the quiet stillness of archives. A Gold Medalist with an M.Phil in Computer Science, she mastered the digital architecture behind the modern world.",
  "Yet her soul was drawn to the stone. Through Archaeology & Epigraphy, she learned to read stories etched by ancient hands across Tamil Nadu—understanding the weight of a stroke carved for eternity.",
  "Her journey was not without fire. In 2017, she faced a life-altering challenge. Like the Phoenix she embodies, she didn't just recover—she rose with purpose. Chithu Vibes stands as that rebirth: a seamless fusion of technical brilliance and epigraphic wisdom.",
];

const cards = [
  {
    icon: <TrophyIcon />,
    label: "Award-Winning\nTech",
    desc: "M.Phil Gold Medalist\nbringing algorithmic\nprecision to artistic engraving.",
  },
  {
    icon: <ScrollIcon />,
    label: "Heritage Expert",
    desc: "Ancient Tamil\nEpigraphy specialist\nensuring scriptural authenticity.",
  },
  {
    icon: <ShieldIcon />,
    label: "Professional\nIntegrity",
    desc: "PGDLAL credentials\nensuring ethical\npractices in every commission.",
  },
];

export default function FounderSection() {
  return (
    <div
      className="w-full flex flex-col items-center bg-white px-6 py-14 md:px-16 md:py-24 box-border"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <div className="w-full max-w-[1100px]">

        {/* Top grid: portrait + text */}
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 md:gap-20 items-start mb-14 md:mb-20">

          {/* Portrait column */}
          <div className="flex justify-center">
            <div className="relative inline-block">
              <div className="rounded-3xl overflow-hidden bg-[#1a1520] w-[260px] h-[310px] md:w-[340px] md:h-[400px]">
                <FounderIllustration />
              </div>
              {/* Spark badge */}
              <div
                className="absolute flex items-center justify-center rounded-2xl text-white"
                style={{
                  bottom: -18,
                  right: -18,
                  width: 64,
                  height: 64,
                  fontSize: 28,
                  background: "#D4AF37",
                  boxShadow: "0 4px 20px rgba(212,175,55,0.45)",
                }}
              >
                ✦
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="pt-2 mt-6 md:mt-0">

            {/* Eyebrow */}
            <p
              className="uppercase font-semibold tracking-[0.22em] mb-5 p-0 text-[13px] md:text-[11px]"
              style={{ color: "#D4AF37" }}
            >
              The Founder
            </p>

            {/* Heading */}
            <h2
              className="font-normal leading-[1.08] mb-0 p-0"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(52px, 8vw, 72px)",
                fontWeight: 400,
                color: "#3A2740",
              }}
            >
              The Gold<br />Medalist.
            </h2>

            {/* Sub heading */}
            <h3
              className="italic font-normal leading-[1.15] mb-6 p-0"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 6.5vw, 58px)",
                fontWeight: 400,
                color: "#D4AF37",
              }}
            >
              The Scholar. The<br />Phoenix.
            </h3>

            {/* Name */}
            <span
              className="underline underline-offset-[4px] cursor-pointer block mb-7 font-normal"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                color: "#D4AF37",
              }}
            >
              Jeya Chitra
            </span>

            {/* Bio paragraphs */}
            <div>
              {bioParas.map((para, i) => (
                <p
                  key={i}
                  className={`font-normal leading-[1.85] p-0 ${i < bioParas.length - 1 ? "mb-5" : "mb-0"}`}
                  style={{ fontSize: 14, color: "#4F4F4F" }}
                >
                  {para}
                </p>
              ))}
            </div>

          </div>
        </div>

        {/* Credential cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {cards.map(({ icon, label, desc }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center rounded-2xl box-border bg-[#EEECF0] px-6 py-8 md:px-8 md:py-10"
              style={{ borderLeft: "3px solid #D4AF37" }}
            >
              <div className="flex items-center justify-center w-12 h-12 mb-5">
                {icon}
              </div>
              <p
                className="uppercase font-bold tracking-[0.18em] leading-[1.5] m-0 p-0 whitespace-pre-line mb-4"
                style={{ fontSize: 10, color: "#3A2740" }}
              >
                {label}
              </p>
              <p
                className="font-normal leading-[1.7] m-0 p-0 whitespace-pre-line"
                style={{ fontSize: 13, color: "#4F4F4F" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}