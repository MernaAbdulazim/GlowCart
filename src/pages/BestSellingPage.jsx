import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function BestSellingPage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  

  const products = allProducts.filter(
    (p) => p.badge && p.badge.toLowerCase().includes("best")
  );

  const visibleProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section>

      <div className="product-grid">
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {visibleProducts.length === 0 && (
          <p style={{ marginTop: "20px" }}>
            No bestselling products match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default BestSellingPage;
