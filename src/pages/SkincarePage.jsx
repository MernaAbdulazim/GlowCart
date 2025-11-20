import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function SkincarePage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  const skincareProducts = allProducts.filter(
    (p) => p.category === "skincare" 
  );

  const visibleProducts = skincareProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section>

      <div className="product-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {visibleProducts.length === 0 && (
          <p style={{ marginTop: "20px" }}>
            No skincare products match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default SkincarePage;
