import { useCart } from "../../context/cart.context";
import { Check} from "lucide-react";


export default function ProductCard({ product }) {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  const imageSrc = Array.isArray(product.images) ? product.images[0] : product.images;

  return (
    <div className="bg-cv-white rounded-cv-xl shadow-cv-md overflow-hidden flex items-center 
                    p-cv-sm sm:p-cv-md w-full max-w-[520px] mx-auto">
      
      {/* Image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 
                      rounded-cv-lg overflow-hidden bg-cv-black">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-cv-sm sm:px-cv-md py-cv-px min-w-0">
        <h3 className="font-cv-sans text-cv-base sm:text-cv-md font-cv-medium text-cv-charcoal 
                       leading-tight tracking-tight line-clamp-1">
          {product.name || "Matching Calligraphic Miniature"}
        </h3>
        <p className="font-cv-sans text-cv-sm text-cv-muted leading-snug mt-cv-pxsm line-clamp-2">
          {product.description || "Fridge magnet version of your bespoke design"}
        </p>
      </div>

      {/* Static Size Button */}
      <button
        onClick={() => addToCart(product)}
        className={`flex-shrink-0 w-36 sm:w-40 border border-cv-gold rounded-cv-lg 
                    py-2.5 sm:py-3 text-cv-sm font-cv-medium tracking-cv-wide 
                    flex items-center justify-center gap-1 transition duration-cv-base
                    hover:bg-cv-gold hover:text-cv-white
                    ${isInCart
                      ? "bg-cv-gold text-cv-white"
                      : "text-cv-gold bg-transparent"
                    }`}
      >
        {isInCart ? (
          <>
            <Check color="#000" size={15} />
            <span className="hidden sm:inline">ADDED</span>
          </>
        ) : (
          <>
            ADD
            <span className="text-cv-gold">•</span>
            <span className="font-cv-semibold">₹{product.price?.toLocaleString("en-IN") || "850"}</span>
          </>
        )}
      </button>
    </div>
  );
}