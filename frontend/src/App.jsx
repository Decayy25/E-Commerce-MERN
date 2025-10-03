import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Contact from "./components/Contact";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const item = cart.find((i) => i.id === product.id);
    if (item) {
      setCart(cart.map((i) =>
        i.id === product.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const changeQty = (id, delta) => {
    setCart(cart.map((i) =>
      i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
    ));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  return (
    <div>
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        openCart={() => setIsCartOpen(true)}
      />
      <main>
        <Hero />
        <ProductGrid products={products} addToCart={addToCart} />
        <About />
        <Contact />
      </main>
      <CartSidebar
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        changeQty={changeQty}
      />
      <Footer />
    </div>
  );
}

export default App;