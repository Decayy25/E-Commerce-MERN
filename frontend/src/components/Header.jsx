import React from 'react'; 
import { useEffect, useState } from 'react';
import "./CartSidebar.jsx";

const Header = ({ cartCount, openCart }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  document.getElementById("cart-btn")?.addEventListener("click", openCart);
  
  return (
    <header className="bg-white shadow fixed w-full z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <p className="text-2xl font-bold text-blue-600">Ashbatten Shop</p>

          {/* Desktop Nav */}
          <nav className="hidden md:flex ml-8 space-x-4">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} 
              className={`nav-link transition 
              ${activeSection === link.id ? "text-blue-600 font-bold underline decoration-2 underline-offset-8" 
              : "text-gray-600 hover:text-blue-600"}`}>{link.label}</a>))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <button id="cart-btn" className="relative bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 focus:outline-none">Cart
            <span id="cart-count" className="cart-badge bg-red-500 text-white rounded-full px-2 text-xs absolute -top-2 -right-2">0</span>
          </button>

          {/* Mobile Menu Button */}
          <button id="menu-toggle" className="md:hidden text-gray-700 focus:outline-none text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`block px-4 py-2 transition ${
                activeSection === link.id
                  ? "text-blue-600 font-bold underline decoration-2 underline-offset-4"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;