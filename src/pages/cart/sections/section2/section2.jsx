import { useCart } from "../../../../context/cart.context";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../../../../components/cartproduct_card/cartproduct_card";
import RecommendationCard from "../../../../components/recommendation_card/recommendation_card";

function EmptyCart({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center py-cv-7xl text-center">
      <div className="text-cv-border mb-cv-xl">
        <svg width="72" height="72" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.9">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
      <h3 className="mb-cv-sm font-cv-serif italic font-cv-regular text-cv-black text-3xl md:text-4xl">
        Your cart is empty
      </h3>
      <p className="mb-cv-3xl font-cv-sans text-base font-cv-light text-cv-muted leading-relaxed max-w-xs">
        Explore our calligraphy and gift collections and add something beautiful to your selection.
      </p>
      <button
        onClick={onBrowse}
        className="border border-cv-gold bg-transparent cursor-pointer font-cv-sans text-sm font-cv-semibold tracking-widest uppercase text-cv-gold px-cv-4xl py-cv-lg rounded-cv-xs transition duration-cv-base hover:bg-cv-gold hover:text-white"
      >
        Browse Collection
      </button>
    </div>
  );
}

export default function Section2() {
  const {
    cartItems,
    clearCart,
    subtotal,
    openWhatsApp,
    setIsGift,
    setNote,
    isGift,
    note,
    calligraphyProducts,
    giftProducts
  } = useCart();

  const getRandomProducts = (products, count = 3) => {
    if (!Array.isArray(products)) return [];
    const result = [];
    const usedIndexes = new Set();

    while (result.length < count && usedIndexes.size < products.length) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!usedIndexes.has(randomIndex)) {
        result.push(products[randomIndex]);
        usedIndexes.add(randomIndex);
      }
    }
    return result;
  };

  const randomGiftProducts = getRandomProducts(giftProducts, 3);
  const randomCalligraphyProducts = getRandomProducts(calligraphyProducts, 3);
  

  const navigate = useNavigate();
  const hasItems = cartItems.length > 0;

  return (
    <section className="bg-cv-white px-cv-lg py-cv-3xl pb-cv-7xl md:px-cv-4xl">
      <div className="w-full max-w-screen-2xl mx-auto">

        {/* Empty Cart State */}
        {!hasItems && (
          <EmptyCart onBrowse={() => navigate("/calligraphy-products")} />
        )}

        {/* Filled Cart Layout */}
        {hasItems && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-cv-4xl items-start">

            {/* Left Column - Cart Items */}
            <div>
              <div className="flex items-center justify-between mb-cv-3xl">
                <p className="font-cv-sans text-base font-cv-medium text-cv-charcoal">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your selection
                </p>
                <button
                  onClick={clearCart}
                  className="bg-transparent border-none cursor-pointer font-cv-sans text-sm font-cv-medium text-cv-muted underline underline-offset-4 hover:text-cv-gold transition"
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-col gap-cv-3xl">
                {cartItems.map((item, index) => (
                  <CartProductCard
                    key={item.id}
                    item={item}
                    isLast={index === cartItems.length - 1}
                  />
                ))}
              </div>

              {/* Personal Touch Note - Larger spacing */}
              <div className="flex gap-cv-lg items-start mt-cv-5xl pt-cv-4xl border-t border-cv-border">
                <div className="shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="#C9A84C" opacity="0.9" />
                    <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="#C9A84C" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-cv-sm font-cv-sans text-lg font-cv-semibold text-cv-black">
                    A Personal Touch
                  </h4>
                  <p className="font-cv-sans text-base font-cv-light text-cv-charcoal leading-relaxed">
                    Once you inquire, <span className="font-cv-semibold text-cv-black">Jeya Chitra</span> will personally connect with you via WhatsApp to discuss customization and finalize your bespoke order.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Summary (Wider & Bigger) */}
            <div className="bg-cv-white rounded-cv-xl shadow-cv-md p-cv-2xl border border-cv-border w-full mx-auto sticky top-28">
              <h3 className="mb-cv-2xl font-cv-serif font-cv-regular text-cv-black text-3xl">
                Summary
              </h3>

              <div className="space-y-cv-xl">
                <div className="flex justify-between items-baseline">
                  <span className="font-cv-sans text-base text-cv-charcoal">Subtotal</span>
                  <span className="font-cv-sans text-2xl font-cv-semibold text-cv-black">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-baseline pb-cv-xl border-b border-cv-border">
                  <span className="font-cv-sans text-base text-cv-charcoal">Studio Processing</span>
                  <span className="font-cv-sans text-sm font-cv-medium text-cv-muted italic">Complimentary</span>
                </div>

                {/* Gift Checkbox */}
                <div className="flex items-start gap-cv-md">
                  <input
                    type="checkbox"
                    id="is-gift"
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="cursor-pointer w-5 h-5 accent-cv-gold mt-1"
                  />
                  <div>
                    <label htmlFor="is-gift" className="font-cv-sans text-base font-cv-medium text-cv-black cursor-pointer block">
                      Is this a gift?
                    </label>
                    <p className="mt-1 font-cv-sans text-sm text-cv-muted">
                      Include a hand-written calligraphic note by Chithuvibes (+₹200–500)
                    </p>
                  </div>
                </div>

                {/* Estimated Total */}
                <div className="flex justify-between items-end pt-cv-lg border-t border-cv-border">
                  <span className="font-cv-sans text-xl font-cv-medium text-cv-black">Estimated Total</span>
                  <div className="text-right">
                    <p className="font-cv-serif font-cv-semibold text-cv-gold text-4xl leading-none">
                      ₹{subtotal.toLocaleString("en-IN")}
                    </p>
                    <p className="font-cv-sans text-xs tracking-widest uppercase text-cv-muted mt-1">
                      FINAL PRICE ON CONSULTATION
                    </p>
                  </div>
                </div>
              </div>

              {/* Note for the Artist - Larger textarea */}
              <div className="mt-cv-2xl">
                <p className="mb-cv-sm font-cv-sans text-xs font-cv-medium tracking-widest uppercase text-cv-muted">
                  A NOTE FOR THE ARTIST
                </p>
                <div className="relative">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Share your personalization details or special requests..."
                    rows={5}
                    className="w-full font-cv-sans text-sm font-cv-light text-cv-charcoal border border-cv-border rounded-cv-lg p-cv-xl resize-none outline-none focus:border-cv-gold transition"
                  />
                  <span className="absolute bottom-4 right-6 font-cv-serif italic text-cv-border text-xl opacity-60 pointer-events-none">
                    Artistry in Motion
                  </span>
                </div>
              </div>

              {/* WhatsApp Button - Bigger */}
              <button
                onClick={openWhatsApp}
                className="w-full mt-cv-2xl py-cv-xl px-cv-3xl rounded-cv-sm font-cv-sans text-base font-cv-semibold tracking-widest uppercase text-white bg-cv-gold hover:bg-cv-plum transition duration-cv-base"
              >
                Finalize Design via WhatsApp
              </button>

              {/* Trust Badges */}
              <div className="flex flex-col gap-cv-sm mt-cv-2xl text-sm">
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">🛡️</span>
                  <span className="font-cv-sans text-xs tracking-widest uppercase text-cv-muted">Secure Professional Handling</span>
                </div>
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">🚚</span>
                  <span className="font-cv-sans text-xs tracking-widest uppercase text-cv-muted">Insured Premium Shipping</span>
                </div>
                <div className="flex items-center gap-cv-sm">
                  <span className="text-cv-muted">⭐</span>
                  <span className="font-cv-sans text-xs tracking-widest uppercase text-cv-muted">100% Artist-Certified Original</span>
                </div>
              </div>

              <div className="text-center mt-cv-3xl">
                <button
                  onClick={() => navigate("/calligraphy-products")}
                  className="font-cv-sans text-sm font-cv-medium tracking-widest uppercase text-cv-muted underline underline-offset-4 hover:text-cv-gold"
                >
                  Continue Browsing Collection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Products Section - Larger spacing */}
        <div className="mt-cv-7xl">
          <p className="mb-cv-2xl font-cv-sans text-cv-label font-cv-medium tracking-widest uppercase text-cv-muted text-center">
            You Might Also Like
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-cv-3xl">
            {randomGiftProducts.map((product) => (
              <RecommendationCard key={product.id} product={product} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-cv-3xl mt-cv-3xl">
            {randomCalligraphyProducts.map((product) => (
              <RecommendationCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}