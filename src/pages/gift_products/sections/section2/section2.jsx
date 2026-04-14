import { useState } from "react";
import ProductCard from "../../../../components/product_card/product_card";
import { giftProducts } from "../../../../context/cart.context";



export default function Section2() {
  return (
    <section className="bg-cv-white px-cv-lg py-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-cv-3xl gap-cv-lg">
          <div>
            <h2 className="m-0 mb-cv-sm font-cv-serif font-cv-regular text-cv-black text-cv-2xl md:text-cv-3xl">
              Gift Items
            </h2>
            <div className="w-cv-xl h-cv-pxsm bg-cv-gold" />
          </div>
          <p className="font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed md:text-right max-w-xs">
            Modern precision meets sentimental value. Our laser-crafted gifts
            are designed to preserve your most cherished milestones.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}