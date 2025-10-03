import React from 'react';

const ProductGrid = ({ products = [], addToCart = () => {} }) => {
  return (
    <section id="shop" className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p._id || p.id} className="bg-white shadow rounded p-4">
          <img src={p.img} alt={p.name} className="w-full h-48 object-cover mb-4" />
          <h3 className="text-lg font-bold">{p.name}</h3>
          <p className="text-gray-600">Rp {Number(p.price).toLocaleString()}</p>
          <button className="mt-3 bg-blue-600 text-white px-3 py-2 rounded" onClick={() => addToCart(p)}>
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;