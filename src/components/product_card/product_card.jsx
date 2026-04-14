import { useCart } from "../../context/cart.context";

// ── Icons ──────────────────────────────────────────────────────────────────

function CartIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function ProductImage({ src, alt }) {
  return (
    <div className="w-full rounded-cv-md overflow-hidden bg-cv-soft flex items-center justify-center aspect-[4/3]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>
  );
}

function AddToCartButton({ product }) {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addToCart(product)}
      title={isInCart ? "Added to cart" : "Add to cart"}
      className={[
        "flex items-center justify-center",
        "border rounded-cv-xs cursor-pointer transition duration-cv-base",
        "font-cv-sans text-cv-label font-cv-medium tracking-cv-wider uppercase",
        "px-cv-md py-cv-xs",
        "min-h-9",
        isInCart
          ? "bg-cv-gold border-cv-gold text-white"
          : "bg-transparent border-cv-border text-cv-muted hover:bg-cv-gold hover:border-cv-gold hover:text-white",
      ].join(" ")}
    >
      {isInCart ? <CheckIcon /> : <CartIcon />}
    </button>
  );
}

// ── Main ProductCard ───────────────────────────────────────────────────────

/**
 * ProductCard — global reusable card
 *
 * Props:
 *   product: { id, name, description, price, image }
 */
export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col">

      {/* Image */}
      <ProductImage src={product.image} alt={product.name} />

      {/* Info */}
      <div className="pt-cv-md">
        <h3 className="m-0 mb-cv-xs font-cv-serif font-cv-semibold text-cv-black italic text-cv-base leading-cv-snug">
          {product.name}
        </h3>
        <p className="m-0 mb-cv-md font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-cv-sm">
          <span className="font-cv-sans text-cv-sm font-cv-semibold text-cv-gold">
            ₹{product.price.toLocaleString()}
          </span>
          <AddToCartButton product={product} />
        </div>
      </div>

    </div>
  );
}