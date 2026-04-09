export default function Section2() {
  const items = [
    { title: "Wooden Engravings", desc: "Sustainable teak and walnut infused with classical Tamil literature.", price: "From ₹4,500" },
    { title: "Acrylic Masterpieces", desc: "Modern luminosity meeting traditional script for contemporary spaces.", price: "From ₹3,200" },
    { title: "Metal Art", desc: "Brass and copper plates etched with surgical precision for lifelong endurance.", price: "From ₹7,800" },
  ];

  return (
    <section
      className="box-border py-[72px] px-[72px] pb-[80px]"
      style={{ backgroundColor: "#faf4f4" }}
    >
      <div className="w-full mx-auto" style={{ maxWidth: "1200px" }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <h2
            className="m-0 leading-[1.1] italic font-normal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "52px",
              color: "#3D3566",
            }}
          >
            The Masterpieces
          </h2>
          <p
            className="mt-4 text-[11px] tracking-[0.2em] uppercase"
            style={{
              fontFamily: "'Jost', sans-serif",
              color: "#AAAAAA",
            }}
          >
            Curated Selection / 2024
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-3 rounded-lg overflow-hidden"
          style={{
            gap: "0px",
            border: "1px solid #E0DCE8",
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-white flex flex-col cursor-pointer box-border p-7 pb-8"
              style={{
                borderRight: index < 2 ? "1px solid #E0DCE8" : "none",
              }}
            >
              {/* Image placeholder */}
              <div
                className="rounded-xl h-[320px] w-full flex items-center justify-center mb-7 shrink-0"
                style={{ backgroundColor: "#DCDCDC" }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#BBBBBB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>

              {/* Title */}
              <h3
                className="italic font-normal leading-[1.2] mb-[10px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "26px",
                  color: "#3D3566",
                }}
              >
                {item.title}
              </h3>

              {/* Desc */}
              <p
                className="text-[13px] leading-[1.7] mb-6 grow"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  color: "#111111",
                }}
              >
                {item.desc}
              </p>

              {/* Price + Arrow */}
              <div
                className="flex items-center justify-between pt-5"
                style={{ borderTop: "1px solid #E0DCE8" }}
              >
                <span
                  className="text-[14px] font-medium"
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    color: "#C9A84C",
                  }}
                >
                  {item.price}
                </span>
                <span
                  className="text-[22px] leading-none font-light"
                  style={{ color: "#C9A84C" }}
                >
                  ›
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}