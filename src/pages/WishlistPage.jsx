import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function WishlistPage() {
  const { wishlist, addToCart, removeFromWishlist } = useContext(ShopContext);
  const [removingIds, setRemovingIds] = useState([]);

  const handleRemove = (id) => {
    setRemovingIds((prev) => [...prev, id]);

    setTimeout(() => {
      removeFromWishlist(id);
      setRemovingIds((prev) => prev.filter((itemId) => itemId !== id));
    }, 300);
  };

  return (
    <section className="wishlist-page">
      <h2 className="page-title">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-text">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className={`wishlist-item ${
                removingIds.includes(item.id) ? "removing" : ""
              }`}
            >
              <img src={item.image} alt={item.name} className="wishlist-img" />

              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p className="wishlist-price">{item.price}</p>

                <div className="wishlist-actions">
                  <button
                    className="add-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WishlistPage;
