import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function MakeupPage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  
  const makeupProducts = allProducts.filter(
    (p) => p.category === "makeup" 
  );

  const visibleProducts = makeupProducts.filter((p) =>
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
            No makeup products match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default MakeupPage;
