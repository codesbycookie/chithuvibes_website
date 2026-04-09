import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "OUR STORY",  path: "/about" },
  { label: "GALLERY",    path: "/gallery" },
  { label: "SERVICES",   path: "/services" },
  { label: "WORKSHOPS",  path: "/workshops" },
  { label: "CONTACT",    path: "/contact" },
];

const CartIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-16">
        <div className="w-full h-full px-6 md:px-12 flex items-center justify-between box-border">

          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="bg-transparent border-none cursor-pointer p-0"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, fontStyle: "italic", color: "#C9A84C", letterSpacing: "0.01em" }}
          >
            Chithu Vibes
          </button>

          {/* Desktop Nav Links — centered absolutely */}
          <ul
            className="hidden md:flex list-none m-0 p-0 items-center gap-10 absolute left-1/2"
            style={{ transform: "translateX(-50%)" }}
          >
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <li key={label} className="relative">
                  <button
                    onClick={() => navigate(path)}
                    className="bg-transparent border-none cursor-pointer py-1 px-0 relative"
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: active ? "#D4AF37" : "#2D2152",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                    {/* Active underline — width transition needs inline style */}
                    <span
                      className="absolute left-0 h-0.5"
                      style={{
                        bottom: "-2px",
                        width: active ? "100%" : "0%",
                        backgroundColor: "#D4AF37",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right side: Cart + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              className="bg-transparent border-none cursor-pointer flex items-center p-0"
              style={{ color: "#2D2152" }}
            >
              <CartIcon />
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden bg-transparent border-none cursor-pointer flex items-center p-0"
              style={{ color: "#2D2152" }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <button
                  key={label}
                  onClick={() => { navigate(path); setMenuOpen(false); }}
                  className="bg-transparent border-none cursor-pointer text-left py-1 px-0"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    color: active ? "#D4AF37" : "#2D2152",
                    textTransform: "uppercase",
                    borderLeft: active ? "3px solid #D4AF37" : "3px solid transparent",
                    paddingLeft: "10px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}