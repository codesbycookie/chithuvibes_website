import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The precision of the laser married with the soul of our script—it felt like watching centuries speak in the present moment.",
    name: "Priya Krishnan",
    title: "Collector, Chennai",
  },
  {
    quote: "What arrived was not merely an engraving. It was a conversation between my heritage and my home, rendered in wood and light.",
    name: "Arjun Iyer",
    title: "Architect, Bangalore",
  },
  {
    quote: "Every curve, every stroke — it felt like the letters had always lived in that wood, waiting to be revealed.",
    name: "Meena Sundaram",
    title: "Interior Designer, Coimbatore",
  },
  {
    quote: "I gifted this to my father for his 60th birthday. He wept. That says everything.",
    name: "Karthik Rajan",
    title: "Entrepreneur, Mumbai",
  },
];

export default function OrderSection() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDot = (i) => {
    setVisible(false);
    setTimeout(() => {
      setActive(i);
      setVisible(true);
    }, 400);
  };

  const left  = testimonials[active % testimonials.length];
  const right = testimonials[(active + 1) % testimonials.length];

  return (
    <section className="bg-white box-border px-6 py-16 md:px-[72px] md:py-[96px]">
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

        {/* Heading */}
        <h2
          className="font-normal text-center leading-[1.1] mb-4 text-[36px] md:text-[56px]"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: "#3D3566" }}
        >
          Order directly with us
        </h2>

        {/* Sub heading */}
        <p
          className="text-[14px] md:text-[15px] text-center mb-12 md:mb-[72px]"
          style={{ fontFamily: "'Jost', sans-serif", color: "#AAAAAA" }}
        >
          Discuss your vision and place your order through WhatsApp.
        </p>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-14"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s ease" }}
        >
          {[left, right].map((t, i) => (
            <div key={i} className="text-center">
              <p
                className="leading-[1.75] mb-9 text-[18px] md:text-[22px]"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: "#333333" }}
              >
                "{t.quote}"
              </p>

              {/* Avatar */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#CCCCCC" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              {/* Name */}
              <p
                className="text-[13px] font-semibold tracking-[0.03em] mb-1"
                style={{ fontFamily: "'Jost', sans-serif", color: "#3D3566" }}
              >
                {t.name}
              </p>

              {/* Title */}
              <p
                className="text-[13px]"
                style={{ fontFamily: "'Jost', sans-serif", color: "#999999" }}
              >
                {t.title}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-[10px]">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className="border-none cursor-pointer p-0 h-[10px] rounded-[5px]"
              style={{
                width: i === active ? "28px" : "10px",
                backgroundColor: i === active ? "#3D3566" : "#CCCCCC",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}