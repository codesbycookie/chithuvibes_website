// Footer.jsx — Fully responsive, Tailwind + inline where needed

const GOLD  = "#D4AF37";
const SERIF = "'Cormorant Garamond', serif";
const SANS  = "'Jost', sans-serif";

function openWhatsApp() {
  window.open(
    "https://wa.me/919876543210?text=" +
      encodeURIComponent("Hi! I'm interested in ordering a custom Tamil calligraphy piece from Chithu Vibes."),
    "_blank"
  );
}

const FacebookIcon  = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>;
const InstagramIcon = () => <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" /></svg>;
const XIcon         = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const LinkedInIcon  = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const YouTubeIcon   = () => <svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#C9A84C" /></svg>;

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const col1 = [
    { label: "Home",       id: "hero" },
    { label: "About",      id: "heritage" },
    { label: "Product",    id: "collection" },
    { label: "Engravings", id: "masterpieces" },
  ];

  const col2 = [
    { label: "Calligraphy",   id: "collection" },
    { label: "Custom orders", action: openWhatsApp },
    { label: "Gift sets",     id: "collection" },
    { label: "Contact",       action: openWhatsApp },
  ];

  const socials = [
    { icon: <FacebookIcon />,  href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <XIcon />,         href: "#" },
    { icon: <LinkedInIcon />,  href: "#" },
    { icon: <YouTubeIcon />,   href: "#" },
  ];

  return (
    <footer
      className="w-full box-border"
      style={{ fontFamily: SANS, padding: "40px 40px 24px", backgroundColor: "#EDEAEA" }}
    >

      {/* ── MAIN GOLD CARD ── */}
      <div
        className="rounded-2xl mb-6"
        style={{ backgroundColor: GOLD }}
      >
        {/* 
          Mobile:  flex-col, items stacked
          Desktop: grid 2-col side by side 
        */}
        <div className="flex flex-col gap-10 px-8 py-10 md:grid md:gap-12 md:items-start md:px-14 md:py-12"
          style={{ gridTemplateColumns: "1fr auto" }}>

          {/* Left — headline + tagline */}
          <div className="w-full md:max-w-[460px]">
            <h2
              className="font-normal leading-[1.15] mb-6"
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(32px, 5vw, 64px)",
                color: "#ffffff",
              }}
            >
              Craft your story<br />with us
            </h2>
            <p
              className="leading-[1.6]"
              style={{
                fontFamily: SANS,
                fontSize: "14px",
                color: "rgba(255,255,255,0.85)",
                maxWidth: 380,
              }}
            >
              Connect with CHITHU VIBES for bespoke laser engraving and Tamil calligraphy
            </p>
          </div>

          {/* Right — nav + social */}
          <div className="flex flex-col gap-8 md:items-end md:gap-10">

            {/* Nav columns */}
            <div className="flex gap-12 md:gap-20">
              {[col1, col2].map((col, ci) => (
                <ul key={ci} className="list-none p-0 m-0 flex flex-col gap-4 md:gap-5">
                  {col.map(({ label, id, action }) => (
                    <li key={label}>
                      <button
                        onClick={action ?? (() => scrollTo(id))}
                        className="bg-transparent border-none cursor-pointer p-0 text-left leading-none font-normal"
                        style={{ fontFamily: SANS, fontSize: "15px", color: "#ffffff" }}
                      >
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 md:gap-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center opacity-90"
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="flex flex-col gap-3 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">

        <p
          className="m-0"
          style={{ fontFamily: SANS, fontSize: "13px", color: "#C9A84C" }}
        >
          © 2026 CHITHU VIBES. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-4 md:gap-6">
          {["Privacy policy", "Terms of service", "Cookie settings"].map((t) => (
            <button
              key={t}
              className="bg-transparent border-none cursor-pointer p-0 underline underline-offset-[3px]"
              style={{ fontFamily: SANS, fontSize: "13px", color: GOLD }}
            >
              {t}
            </button>
          ))}
        </div>

      </div>

    </footer>
  );
}