import { useState } from "react";
import { useCart } from "../../../../context/cart.context";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../../../components/product_card/product_card";
import CartProductCard from "../../../../components/product_card/cartproduct_card";   // ← Import the new component

// ── Icons ──────────────────────────────────────────────────────────────────

function TrashIcon() {
  return (
    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.499z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" fill="var(--color-cv-gold)" opacity="0.85" />
      <path d="M18 4 L18.8 7.2 L22 8 L18.8 8.8 L18 12 L17.2 8.8 L14 8 L17.2 7.2 Z" fill="var(--color-cv-gold)" opacity="0.5" />
    </svg>
  );
}

function EmptyCartIcon() {
  return (
    <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

// ── Recommended products ───────────────────────────────────────────────────

const recommendedProducts = [
  { id: 1,  name: "Hand-Drawn Tamil Inscription", description: "Custom archival ink on handmade parchment",    price: 420, image: "/images/products/tamil-inscription-1.jpg" },
  { id: 4,  name: "Laser-Etched Keepsake Box",    description: "Precision detailed patterns on solid maple",  price: 780, image: "/images/products/box-1.jpg" },
  { id: 6,  name: "Acrylic Memory Block",          description: "High-clarity optical grade acrylic prisms",  price: 995, image: "/images/products/acrylic-1.jpg" },
];

// ── Empty cart state ───────────────────────────────────────────────────────

function EmptyCart({ onBrowse }) {
  return (
    <div className="flex flex-col items-center justify-center py-cv-5xl text-center">
      <div className="text-cv-border mb-cv-lg">
        <EmptyCartIcon />
      </div>
      <h3 className="m-0 mb-cv-sm font-cv-serif italic font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
        Your cart is empty
      </h3>
      <p className="m-0 mb-cv-2xl font-cv-sans text-cv-sm font-cv-light text-cv-muted leading-cv-relaxed max-w-xs">
        Explore our calligraphy and gift collections and add something beautiful to your selection.
      </p>
      <button
        onClick={onBrowse}
        className="border border-cv-gold bg-transparent cursor-pointer font-cv-sans text-cv-xs font-cv-semibold tracking-cv-wide uppercase text-cv-gold px-cv-2xl py-cv-md rounded-cv-xs transition duration-cv-base hover:bg-cv-gold hover:text-white"
      >
        Browse Collection
      </button>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────

export default function Section2() {
  const { cartItems, clearCart, subtotal, openWhatsApp ,setIsGift, setNote, isGift, note} = useCart();
  const navigate = useNavigate();

  // ── Empty state ──
  if (cartItems.length === 0) {
    return (
      <section className="bg-cv-white px-cv-lg pb-cv-5xl md:px-cv-4xl">
        <div className="w-full max-w-screen-lg mx-auto">
          <EmptyCart onBrowse={() => navigate("/calligraphy-products")} />

          {/* Recommended products */}
          <div className="mt-cv-3xl">
            <p className="m-0 mb-cv-xl font-cv-sans text-cv-label font-cv-medium tracking-cv-widest uppercase text-cv-muted">
              You Might Like
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-cv-3xl">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Filled cart ──
  return (
    <section className="bg-cv-white px-cv-lg py-cv-2xl pb-cv-5xl md:px-cv-4xl">
      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-cv-3xl items-start">

        {/* ── LEFT — Items ── */}
        <div>

          {/* Header */}
          <div className="flex items-center justify-between mb-cv-2xl">
            <p className="m-0 font-cv-sans text-cv-sm font-cv-medium text-cv-charcoal">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your selection
            </p>
            <button
              onClick={clearCart}
              className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
            >
              Clear all
            </button>
          </div>

          {/* Item rows — Using the new reusable CartItemCard */}
          <div className="flex flex-col">
            {cartItems.map((item, index) => (
              <CartProductCard
                key={item.id}
                item={item}
                isLast={index === cartItems.length - 1}
              />
            ))}
          </div>

          {/* Personal touch */}
          <div className="flex gap-cv-md items-start mt-cv-3xl pt-cv-3xl border-t border-cv-border">
            <div className="shrink-0 mt-cv-xs">
              <SparkleIcon />
            </div>
            <div>
              <h4 className="m-0 mb-cv-xs font-cv-sans text-cv-base font-cv-semibold text-cv-black">
                A Personal Touch
              </h4>
              <p className="m-0 font-cv-sans text-cv-sm font-cv-light text-cv-charcoal leading-cv-relaxed">
                Once you inquire,{" "}
                <strong className="font-cv-semibold text-cv-black">
                  Jeya Chitra will personally connect with you
                </strong>{" "}
                via WhatsApp to discuss customization and finalize your bespoke
                order. Each piece is crafted specifically for your vision.
              </p>
            </div>
          </div>

        </div>

        {/* ── RIGHT — Summary Card ── */}
        <div className="bg-white rounded-cv-lg shadow-cv-md p-cv-xl border border-cv-border w-full sticky top-24">

          <h3 className="m-0 mb-cv-xl font-cv-serif font-cv-regular text-cv-black text-cv-xl md:text-cv-2xl">
            Summary
          </h3>

          {/* Subtotal */}
          <div className="flex items-center justify-between mb-cv-sm">
            <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Subtotal</span>
            <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-black">
              ₹{subtotal.toLocaleString()}
            </span>
          </div>

          {/* Studio processing */}
          <div className="flex items-center justify-between pb-cv-lg border-b border-cv-border mb-cv-lg">
            <span className="font-cv-sans text-cv-sm font-cv-light text-cv-charcoal">Studio Processing</span>
            <span className="font-cv-sans text-cv-xs font-cv-medium text-cv-muted italic">Complimentary</span>
          </div>

          {/* Gift toggle */}
          <div className="flex items-start gap-cv-sm mb-cv-lg">
            <div className="shrink-0 mt-cv-xs">
              <input
                type="checkbox"
                id="is-gift"
                checked={isGift}
                onChange={(e) => setIsGift(e.target.checked)}
                className="cursor-pointer w-cv-md h-cv-md accent-cv-gold"
              />
            </div>
            <div>
              <label htmlFor="is-gift" className="font-cv-sans text-cv-sm font-cv-medium text-cv-black cursor-pointer">
                Is this a gift?
              </label>
              <p className="m-0 font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal mt-cv-xs">
                Include a hand-written calligraphic note by Chithuvibes (+₹200–500)
              </p>
            </div>
          </div>

          {/* Estimated total */}
          <div className="flex items-end justify-between mb-cv-xl">
            <span className="font-cv-sans text-cv-base font-cv-medium text-cv-black">Estimated Total</span>
            <div className="text-right">
              <p className="m-0 font-cv-serif font-cv-semibold text-cv-gold text-cv-xl md:text-cv-2xl">
                ₹{subtotal.toLocaleString()}
              </p>
              <p className="m-0 font-cv-sans text-cv-label font-cv-regular tracking-cv-wide uppercase text-cv-muted">
                Final price on consultation
              </p>
            </div>
          </div>

          {/* Note textarea */}
          <p className="m-0 mb-cv-sm font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted">
            A Note for the Artist
          </p>
          <div className="relative mb-cv-lg">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Share your personalization details or special requests..."
              rows={4}
              className="w-full font-cv-sans text-cv-xs font-cv-light text-cv-charcoal leading-cv-relaxed border border-cv-border rounded-cv-md p-cv-md resize-none outline-none transition duration-cv-base bg-cv-white focus:border-cv-gold"
            />
            <span className="absolute bottom-cv-sm right-cv-md font-cv-serif italic pointer-events-none select-none text-cv-border text-cv-md opacity-cv-soft">
              Artistry in Motion
            </span>
          </div>

          {/* Finalize button */}
          <button
            onClick={openWhatsApp}
            className="w-full flex items-center justify-center gap-cv-sm py-cv-md px-cv-lg rounded-cv-sm font-cv-sans text-cv-sm font-cv-semibold tracking-cv-wide uppercase text-white border-none cursor-pointer transition duration-cv-base bg-cv-gold hover:bg-cv-plum mb-cv-lg"
          >
            <ChatIcon />
            Finalize Design via WhatsApp
          </button>

          {/* Trust badges */}
          <div className="flex flex-col gap-cv-sm mb-cv-lg">
            {[
              { icon: <ShieldIcon />, label: "Secure Professional Handling" },
              { icon: <TruckIcon />,  label: "Insured Premium Shipping" },
              { icon: <StarIcon />,   label: "100% Artist-Certified Original" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-cv-sm">
                <span className="text-cv-muted">{icon}</span>
                <span className="font-cv-sans text-cv-xs font-cv-light tracking-cv-wide uppercase text-cv-muted">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Continue browsing */}
          <div className="text-center">
            <button
              onClick={() => navigate("/calligraphy-products")}
              className="bg-transparent border-none cursor-pointer font-cv-sans text-cv-xs font-cv-medium tracking-cv-wide uppercase text-cv-muted underline underline-offset-4 transition duration-cv-base hover:text-cv-gold"
            >
              Continue Browsing Collection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}