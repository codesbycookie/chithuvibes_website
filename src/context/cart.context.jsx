import { createContext, useContext, useState } from "react";

export const calligraphyProducts = [
  { id: 1, name: "Hand-Drawn Tamil Inscription", description: "Custom archival ink on handmade parchment", price: 420, image: "/images/products/tamil-inscription-1.jpg" },
  { id: 2, name: "Masterpiece Scroll", description: "Large format wall installations", price: 1200, image: "/images/products/scroll-1.jpg" },
  { id: 3, name: "Engraved Manuscript Panel", description: "Solid brass with etched classical poetry", price: 450, image: "/images/products/panel-1.jpg" },
  { id: 7, name: "Traditional Script Artwork", description: "Beautifully stylized script on handmade paper", price: 650, image: "/images/products/script-art-1.jpg" },
  { id: 10, name: "Personalized Wedding Scroll", description: "Luxury scroll for wedding vows and invitations", price: 1800, image: "/images/products/wedding-scroll.jpg" },
  { id: 11, name: "Gold Foil Calligraphy Frame", description: "Calligraphy artwork enhanced with gold foil detailing", price: 1350, image: "/images/products/gold-foil-frame.jpg" },
  { id: 13, name: "Heritage Script Canvas", description: "Canvas artwork inspired by ancient scripts", price: 980, image: "/images/products/script-canvas.jpg" },
  { id: 15, name: "Luxury Scroll Box Set", description: "Premium scroll stored in a handcrafted wooden box", price: 2100, image: "/images/products/scroll-box.jpg" },
  { id: 18, name: "Signature Style Artwork", description: "Stylized signature art crafted uniquely for individuals", price: 1100, image: "/images/products/signature-art.jpg" },
];

export const giftProducts = [
  { id: 4, name: "Laser-Etched Keepsake Box", description: "Precision detailed patterns on solid maple", price: 780, image: "/images/products/box-1.jpg" },
  { id: 5, name: "Custom Wood Plaque", description: "Personalized walnut and cherry wood finish", price: 545, image: "/images/products/plaque-1.jpg" },
  { id: 6, name: "Acrylic Memory Block", description: "High-clarity optical grade acrylic prisms", price: 995, image: "/images/products/acrylic-1.jpg" },
  { id: 8, name: "Mini Engraved Token", description: "Compact engraved token perfect for gifting", price: 299, image: "/images/products/token-1.jpg" },
  { id: 12, name: "Engraved Name Plate", description: "Custom engraved rosewood nameplate", price: 620, image: "/images/products/nameplate.jpg" },
  { id: 14, name: "Mini Memory Frame", description: "Elegant acrylic and wood memory frame", price: 350, image: "/images/products/memory-frame.jpg" },
  { id: 16, name: "Custom Quote Engraving", description: "Personalized engraved quotes on maple board", price: 480, image: "/images/products/quote-engraving.jpg" },
  { id: 19, name: "Engraved Wooden Photo Block", description: "Photo block with engraved borders and artistic finish", price: 890, image: "/images/products/photo-block.jpg" },
];

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item — if already in cart, increment quantity
  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }
  const [isGift, setIsGift] = useState(false);
  const [note, setNote] = useState("");
  function openWhatsApp() {
    const itemsList = cartItems
      .map((i) => `${i.name} x${i.quantity} — ₹${(i.price * i.quantity).toLocaleString()}`)
      .join("\n");
    const giftNote = isGift ? "\n\n🎁 This is a gift order." : "";
    const artistNote = note ? `\n\nNote for artist: ${note}` : "";
    window.open(
      "https://wa.me/919884923998?text=" +
      encodeURIComponent(
        `Hi! I'd like to finalize my Chithu Vibes order:\n\n${itemsList}\n\nEstimated Total: ₹${subtotal.toLocaleString()}${giftNote}${artistNote}`
      ),
      "_blank"
    );
  }
  // Remove one product entirely regardless of quantity
  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  // Increase quantity by 1
  function increaseQuantity(productId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity by 1 — removes product if quantity reaches 0
  function decreaseQuantity(productId) {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (!item) return prev;
      if (item.quantity <= 1) {
        return prev.filter((i) => i.id !== productId);
      }
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  }

  // Clear entire cart
  function clearCart() {
    setCartItems([]);
  }


  // Total price of all items
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Total number of individual items (sum of all quantities)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
        totalItems,
        openWhatsApp,
        setIsGift,
        setNote,
        isGift,
        note,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}