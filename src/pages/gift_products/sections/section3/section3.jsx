function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z"
        fill="var(--color-cv-gold)"
        opacity="0.85"
      />
      <path
        d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z"
        fill="var(--color-cv-gold)"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Section3() {
  function openWhatsApp() {
    window.open(
      "https://wa.me/919884923998?text=" +
        encodeURIComponent(
          "Hi! I'm interested in a bespoke keepsake from Chithu Vibes."
        ),
      "_blank"
    );
  }

  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="mx-auto flex flex-col items-center text-center max-w-[640px]">

        {/* Sparkle Icon */}
        <div className="mb-cv-lg">
          <SparkleIcon />
        </div>

        {/* Quote */}
        <blockquote
          className="m-0 mb-cv-xl font-cv-serif italic font-cv-regular leading-cv-relaxed text-cv-black text-[clamp(18px,2.5vw,26px)]"
        >
          "True art is the bridge between the transient moment and eternal
          memory. We don't just craft items; we etch soul into matter."
        </blockquote>

        {/* Label */}
        <p className="m-0 mb-cv-2xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
          The Artisan's Touch
        </p>

        {/* CTA Button - Fully Tailwind (No inline styles or JS hover) */}
        <button
          onClick={openWhatsApp}
          className="w-full md:w-auto flex items-center justify-center gap-cv-sm 
                     px-cv-xl py-cv-md md:px-cv-2xl 
                     rounded-cv-full 
                     font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase 
                     text-white border-none cursor-pointer 
                     bg-cv-plum hover:bg-cv-purple 
                     transition-colors duration-cv-base
                     leading-relaxed"
        >
          <span>Inquire via WhatsApp for Bespoke Keepsakes</span>
          <span>→</span>
        </button>

      </div>
    </section>
  );
}