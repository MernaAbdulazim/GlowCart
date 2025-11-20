import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

function HomePage() {
  const { allProducts, searchQuery } = useContext(ShopContext);

  // search filter, if empty bnrg3 kol haga mkanha
  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery)
  );

  const trending = filteredProducts.slice(0, 8);

  return (
    <>
      {/* CATEGORY BOXES */}
      <section className="category-focus">
        <Link to="/skincare" className="category-tile skincare-tile">
          <i className="fas fa-hand-sparkles"></i>
          <span>SKINCARE</span>
        </Link>

        <Link to="/makeup" className="category-tile makeup-tile">
          <i className="fas fa-lipstick"></i>
          <span>MAKEUP</span>
        </Link>

        <Link to="/haircare" className="category-tile haircare-tile">
          <i className="fas fa-air-freshener"></i>
          <span>HAIRCARE</span>
        </Link>
      </section>

      {/* TRENDING SECTION */}
      <section className="trending-section">
        <div className="trending-header">
          <hr />
          <h2>TRENDING NOW</h2>
          <hr />
        </div>

        <div className="product-grid">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {trending.length === 0 && (
            <p style={{ marginTop: "20px" }}>
              No products match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default HomePage;
