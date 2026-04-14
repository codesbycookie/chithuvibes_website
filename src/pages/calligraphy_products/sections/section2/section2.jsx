import ProductCard from "../../../../components/product_card/product_card";
import { calligraphyProducts } from "../../../../context/cart.context";
// const calligraphyProducts = [
//   { id: 1,  name: "Hand-Drawn Tamil Inscription",  description: "Custom archival ink on handmade parchment",               price: 420,  image: "/images/products/tamil-inscription-1.jpg" },
//   { id: 2,  name: "Masterpiece Scroll",             description: "Large format wall installations",                          price: 1200, image: "/images/products/scroll-1.jpg" },
//   { id: 3,  name: "Engraved Manuscript Panel",      description: "Solid brass with etched classical poetry",                price: 450,  image: "/images/products/panel-1.jpg" },
//   { id: 7,  name: "Traditional Script Artwork",     description: "Beautifully stylized script on handmade paper",           price: 650,  image: "/images/products/script-art-1.jpg" },
//   { id: 10, name: "Personalized Wedding Scroll",    description: "Luxury scroll for wedding vows and invitations",          price: 1800, image: "/images/products/wedding-scroll.jpg" },
//   { id: 11, name: "Gold Foil Calligraphy Frame",    description: "Calligraphy artwork enhanced with gold foil detailing",   price: 1350, image: "/images/products/gold-foil-frame.jpg" },
//   { id: 13, name: "Heritage Script Canvas",         description: "Canvas artwork inspired by ancient scripts",              price: 980,  image: "/images/products/script-canvas.jpg" },
//   { id: 15, name: "Luxury Scroll Box Set",          description: "Premium scroll stored in a handcrafted wooden box",      price: 2100, image: "/images/products/scroll-box.jpg" },
//   { id: 18, name: "Signature Style Artwork",        description: "Stylized signature art crafted uniquely for individuals", price: 1100, image: "/images/products/signature-art.jpg" },
// ];

export default function Section2() {
  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-cv-3xl gap-cv-lg">
          <div>
            <h2 className="m-0 mb-cv-sm font-cv-serif font-cv-regular text-cv-black text-cv-2xl md:text-cv-3xl">
              Calligraphic Items
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p className="font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed md:text-right max-w-xs">
            Each piece is hand-crafted with archival materials, celebrating
            the ancient rhythm of the quill and the beauty of the written word.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
          {calligraphyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}