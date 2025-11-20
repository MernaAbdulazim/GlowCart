import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProductCard({ product }) {
  const {
    addToCart,
    addToWishlist,
    removeFromWishlist,
    wishlist,
    cart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(ShopContext);

  const hasDiscount = !!product.discount;
//    hal product fel wishlist?
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  //   hal product inside the bag? 
  const cartItem = cart.find((item) => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleIncrease = () => {
    if (cartItem) {
      increaseCartQuantity(product.id);
    } else {
      addToCart(product);
    }
  };

  const handleDecrease = () => {
    if (cartItem) {
      decreaseCartQuantity(product.id);
    }
  };

  return (
    <div className="product-card">
      {product.badge && <div className="product-badge">{product.badge}</div>}

      {hasDiscount && (
        <div className="discount-tag">-{product.discount}%</div>
      )}

      <button
        type="button"
        className="wishlist-btn"
        onClick={handleWishlistClick}
      >
        <i
          className={
            isInWishlist ? "fas fa-heart active-heart" : "far fa-heart"
          }
        />
      </button>

      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>
        {product.description && <p>{product.description}</p>}

        <div className="product-footer">
          <div className="product-price">
            {product.price}
            {hasDiscount && product.originalPrice && (
              <span className="original-price">{product.originalPrice}</span>
            )}
          </div>

          {/*    law msh fl cart ->  Add  */}
          {!isInCart ? (
            <button
              type="button"
              className="add-to-cart"
              onClick={handleAddToCart}
            >
              <i className="fas fa-plus" /> Add to cart
            </button>
          ) : (
            //  law fe el cart  -> - qty +
            <div className="quantity-control">
              <button
                type="button"
                className="qty-btn"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="qty-value">{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
