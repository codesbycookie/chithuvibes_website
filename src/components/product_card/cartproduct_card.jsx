import { useCart } from '../../context/cart.context';
import { Trash2 } from 'lucide-react';   // ← Lucide React Trash icon

function CartProductCard({ item, isLast = false }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div
      className={`flex gap-cv-lg py-cv-2xl ${
        !isLast ? 'border-b border-cv-border' : ''
      }`}
    >
      {/* Product Image */}
      <div className="shrink-0 rounded-cv-md overflow-hidden bg-cv-soft w-cv-4xl h-cv-4xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="m-0 mb-cv-xs font-cv-serif font-cv-semibold text-cv-black text-cv-base leading-cv-snug">
            {item.name}
          </h3>
          <p className="m-0 mb-cv-sm font-cv-sans text-cv-xs font-cv-light text-cv-muted leading-cv-normal line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price and Controls */}
        <div className="flex items-center justify-between gap-cv-sm flex-wrap mt-cv-sm">
          {/* Total Price */}
          <span className="font-cv-sans text-cv-base font-cv-semibold text-cv-gold">
            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
          </span>

          {/* Quantity Controls + Remove Button */}
          <div className="flex items-center gap-cv-md">
            {/* Quantity Selector */}
            <div className="flex items-center border border-cv-border rounded-cv-xs overflow-hidden h-9">
              <button
                onClick={() => decreaseQuantity(item.id)}
                title={item.quantity === 1 ? 'Remove item' : 'Decrease quantity'}
                className="px-cv-sm h-full bg-transparent border-none cursor-pointer font-cv-sans text-cv-md text-cv-charcoal transition duration-cv-fast hover:bg-cv-soft flex items-center justify-center min-w-[32px]"
                disabled={item.quantity <= 0}
              >
                −
              </button>

              <span className="px-cv-xs font-cv-sans text-cv-sm font-cv-medium text-cv-black text-center min-w-[28px]">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(item.id)}
                title="Increase quantity"
                className="px-cv-sm h-full bg-transparent border-none cursor-pointer font-cv-sans text-cv-md text-cv-charcoal transition duration-cv-fast hover:bg-cv-soft flex items-center justify-center min-w-[32px]"
              >
                +
              </button>
            </div>

            {/* Remove Button - Now using Lucide Trash2 */}
            <button
              onClick={() => removeFromCart(item.id)}
              title="Remove from cart"
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