import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(ShopContext);

  const [removingIds, setRemovingIds] = useState([]);


  const getNumericPrice = (price) => {
    if (typeof price === "number") return price;
    const num = parseFloat(String(price).replace(/[^\d.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  
  const total = cart.reduce((sum, item) => {
    const qty = item.quantity || 1;
    return sum + getNumericPrice(item.price) * qty;
  }, 0);

  const handleRemove = (id) => {
    setRemovingIds((prev) => [...prev, id]);

    setTimeout(() => {
      removeFromCart(id);
      setRemovingIds((prev) => prev.filter((itemId) => itemId !== id));
    }, 300);
  };

  if (cart.length === 0) {
    return (
      <section className="cart-page">
        <h2 className="page-title">My Bag</h2>
        <p className="empty-text">Your bag is empty.</p>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2 className="page-title">My Bag</h2>

      <div className="cart-list">
        {cart.map((item) => {
          const qty = item.quantity || 1;
          const lineTotal = getNumericPrice(item.price) * qty;

          return (
            <div
              key={item.id}
              className={`cart-item ${
                removingIds.includes(item.id) ? "removing" : ""
              }`}
            >
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-info">
                <h3>{item.name}</h3>

                {/* LE 1,650 | Qty: 3 */}
                <p className="cart-meta">
                  <span className="cart-price">{item.price}</span>
                  <span className="cart-qty">| Qty: {qty}</span>
                </p>

                {/* [-] 3 [+] */}
                <div className="cart-qty-controls">
                  <button
                    type="button"
                    className="cart-qty-btn"
                    onClick={() => decreaseCartQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="cart-qty-value">{qty}</span>
                  <button
                    type="button"
                    className="cart-qty-btn"
                    onClick={() => increaseCartQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                {/* Item Total: LE 4,950 */}
                <p className="cart-line-total">
                  Item Total: LE {lineTotal.toLocaleString()}
                </p>

                <div className="cart-actions">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="total-box">
        <span>Total:</span>
        <span className="total-price">{total.toFixed(2)} EGP</span>
      </div>
    </section>
  );
}

export default CartPage;
