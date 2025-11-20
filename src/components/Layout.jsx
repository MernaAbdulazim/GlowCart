import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Layout({ children }) {
  const { setSearchQuery } = useContext(ShopContext);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <>
      <div id="notification" className="notification"></div>

      <div className="top-announcement d-flex justify-content-between align-items-center px-3">
        <span>FREE SHIPPING FOR ORDERS OVER 5000 EGP</span>
      </div>

      <header>
        <nav className="navbar">
          <div className="logo">
            <span className="logo-h">GC</span>
            <span className="logo-text">Glow Cart</span>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              onChange={handleSearchChange}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>

          <ul className="nav-icons">
            <li>
              <Link to="/wishlist" className="nav-icon-link">
                <i className="fas fa-heart"></i>
                <span className="icon-label">Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-icon-link">
                <i className="fas fa-shopping-bag"></i>
                <span className="icon-label">Bag</span>
              </Link>
            </li>
            <li>
              <Link to="/account" className="nav-icon-link">
                <i className="fas fa-user"></i>
                <span className="icon-label">Account</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-content">
        <aside className="sidebar">
          <div className="categories-header">Categories</div>
          <nav className="category-list">
            <NavLink to="/makeup">
              Makeup <i className="fas fa-chevron-right"></i>
            </NavLink>
            <NavLink to="/skincare">
              Skincare <i className="fas fa-chevron-right"></i>
            </NavLink>
            <NavLink to="/haircare">
              Haircare <i className="fas fa-chevron-right"></i>
            </NavLink>
          </nav>
        </aside>

        <main className="main-content">
          <nav className="main-nav-links">
            <NavLink to="/" end>
              HOME
            </NavLink>
            <NavLink to="/hotdiscounts">HOT DISCOUNTS</NavLink>
            <NavLink to="/bestselling">BESTSELLING</NavLink>
            <NavLink to="/aboutus">ABOUT US</NavLink>
          </nav>

          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
