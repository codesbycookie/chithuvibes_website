import { useState, useEffect } from "react";
import { useCart } from "../../context/cart.context";
import { Trash2 } from "lucide-react";

function CartProductImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = Array.isArray(images) ? images : [images];

  return (
    <div className="relative shrink-0 rounded-cv-md overflow-hidden bg-cv-soft w-cv-4xl h-cv-4xl">
      <img
        src={imageList[currentIndex]}
        alt="product"
        className="w-full h-full object-cover"
        onError={(e) => (e.target.style.display = "none")}
      />
      {imageList.length > 1 && (
        <div className="absolute bottom-cv-px left-1/2 -translate-x-1/2 flex gap-cv-px">
          {imageList.map((_, idx) => (
            <div
              key={idx}
              className={`w-cv-px h-cv-px rounded-cv-full ${idx === currentIndex ? "bg-cv-gold" : "bg-cv-white/60"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CartProductCard({ item, isLast = false }) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value);
    updateQuantity(item.id, newQty);
  };

  return (
    <div className={`flex gap-cv-lg py-cv-2xl ${!isLast ? "border-b border-cv-border" : ""}`}>
      <CartProductImageCarousel images={item.images} />

      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="mb-cv-xs font-cv-serif font-cv-semibold text-cv-black text-cv-base leading-cv-snug">
            {item.name}
          </h3>
          <p className="mb-cv-sm font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-cv-sm flex-wrap mt-cv-sm">
          {/* Total Price */}
          <span className="font-cv-sans text-cv-base font-cv-semibold text-cv-gold">
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </span>

          {/* Quantity Dropdown + Trash */}
          <div className="flex items-center gap-cv-md">
            {/* Quantity Dropdown */}
            <div className="flex items-center gap-cv-xs">
              <span className="font-cv-sans text-cv-sm text-cv-muted">Qty:</span>
              <select
                value={item.quantity}
                onChange={handleQuantityChange}
                className="bg-cv-white border border-cv-border rounded-cv-sm px-cv-sm py-1.5 
                           font-cv-sans text-cv-sm font-cv-medium text-cv-charcoal 
                           focus:outline-none focus:border-cv-gold transition duration-cv-base"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Trash Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-transparent border-none cursor-pointer text-cv-muted hover:text-cv-gold transition duration-cv-base p-cv-xs rounded-cv-xs flex items-center justify-center"
            >
              <Trash2 className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;