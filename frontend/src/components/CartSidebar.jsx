import React from "react";

const CartSidebar = ({ isCartOpen, setIsCartOpen, cart, removeFromCart, changeQty }) => {
  // Hitung total harga
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside
      id="cart"
      className={`fixed right-0 top-0 h-full w-80 bg-gradient-to-t from-blue-500 to-blue-200 shadow transform 
      transition-transform z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="text-lg font-semibold">Your Cart</h3>
        <button
          onClick={() => setIsCartOpen(false)}
          className="text-gray-600 hover:text-red-600"
        >
          ✕
        </button>
      </div>

      {/* Cart Items */}
      <div id="cart-items" className="p-4 overflow-y-auto h-4/6 space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-700">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  Rp {item.price.toLocaleString("id-ID")}
                </p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => changeQty(item.id, -1)}
                    className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    onClick={() => changeQty(item.id, 1)}
                    className="px-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Total:</div>
          <div id="cart-total" className="text-lg font-bold">
            Rp {total.toLocaleString("id-ID")}
          </div>
        </div>
        <button
          id="checkout"
          className="mt-4 w-full bg-blue-600 text-white py-2 border-2 rounded-lg transform transition duration-300 hover:-translate-y-2"
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CartSidebar;
