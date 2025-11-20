import React, { createContext, useEffect, useState } from "react";
import { allProducts } from "../data/products";

// ---------------- Notification ---------------- //
function getNotificationIcon(type) {
  if (type === "success") return "check-circle";
  if (type === "error") return "exclamation-circle";
  if (type === "warning") return "exclamation-triangle";
  return "info-circle";
}

function showNotification(message, type = "success") {
  const box = document.getElementById("notification");
  if (!box) return;

  box.innerHTML = `
    <i class="fas fa-${getNotificationIcon(type)}"></i>
    <span>${message}</span>
  `;

  box.className = "notification";
  if (type !== "success") box.classList.add(type);

  box.style.display = "flex";

  setTimeout(() => {
    box.style.animation = "slideOut 0.3s ease-out forwards";
    setTimeout(() => {
      box.style.display = "none";
      box.style.animation = "";
    }, 300);
  }, 2500);
}

// ---------------- Context ---------------- //
export const ShopContext = createContext();

export function ShopProvider({ children }) {
  // CART
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // WISHLIST
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // SEARCH (مهم علشان الـ Home و باقي الصفحات)
  const [searchQuery, setSearchQuery] = useState("");

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // --------------- CART FUNCTIONS --------------- //

  // Add to cart (لو موجود نزود الكمية، لو مش موجود نضيفه)
  function addToCart(product) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        const updated = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
        showNotification("Updated quantity in your bag.", "success");
        return updated;
      }

      showNotification("Added to your bag!", "success");
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showNotification("Item removed from your bag.", "warning");
  }

  function clearCart() {
    setCart([]);
  }

  // زيادة الكمية من جوه الكارت
  function increaseCartQuantity(id) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  }

  // تقليل الكمية ولو وصلت 0 يتشال من الباج
  function decreaseCartQuantity(id) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (!existing) return prev;

      if ((existing.quantity || 1) <= 1) {
        showNotification("Item removed from your bag.", "warning");
        return prev.filter((item) => item.id !== id);
      }

      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      );
    });
  }

  // --------------- WISHLIST FUNCTIONS --------------- //

  function addToWishlist(product) {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        showNotification("This item is already in your wishlist.", "warning");
        return prev;
      }

      showNotification("Added to your wishlist!", "success");
      return [...prev, product];
    });
  }

  function removeFromWishlist(id) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    showNotification("Item removed from your wishlist.", "warning");
  }

  // -------------------------------------------------- //

  const value = {
    allProducts,

    cart,
    wishlist,

    addToCart,
    removeFromCart,
    clearCart,

    addToWishlist,
    removeFromWishlist,

    // للـ +/- في الكروت
    increaseCartQuantity,
    decreaseCartQuantity,

    // للسيرش في الهيدر والصفحات
    searchQuery,
    setSearchQuery,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
