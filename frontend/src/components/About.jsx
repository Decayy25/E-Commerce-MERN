import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-3 text-gray-700">
          We are a student-run small shop focused on affordable tech accessories, web templates, and learning materials.
          Built by Rizqi — a web dev student.
        </p>
        <ul className="list-disc ml-6">
          <li>Produk berkualitas dan original</li>
          <li>Pengiriman cepat dan aman</li>
          <li>Layanan pelanggan yang ramah dan responsif</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Visi Kami</h2>
        <p className="mt-2">
          Menjadi platform E-commerce terpercaya yang membantu setiap orang mendapatkan produk terbaik dengan mudah.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Misi Kami</h2>
        <ol className="list-decimal ml-6">
          <li>Menyediakan produk berkualitas dengan harga kompetitif.</li>
          <li>Memberikan pelayanan terbaik demi kepuasan pelanggan.</li>
          <li>Menghadirkan pengalaman belanja online yang cepat, aman, dan nyaman.</li>
        </ol>
      </div>
      <br />
    </section>
  );
};

export default About;
