import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function HaircarePage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  const haircareProducts = allProducts.filter(
    (p) => p.category === "haircare" 
  );

  const visibleProducts = haircareProducts.filter((p) =>
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
            No haircare products match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default HaircarePage;
