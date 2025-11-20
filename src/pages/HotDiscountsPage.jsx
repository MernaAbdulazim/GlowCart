import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

function HotDiscountsPage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  
  const discountedProducts = allProducts.filter(
    (p) => p.discount 
  );

  // search filter 
  const visibleProducts = discountedProducts.filter((p) =>
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
            No discounted products match your search.
          </p>
        )}
      </div>
    </section>
  );
}

export default HotDiscountsPage;
