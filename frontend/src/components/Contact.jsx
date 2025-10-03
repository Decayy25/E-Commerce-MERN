import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mb-2">Feel free to contact me at:</p>
      <p>
        Email:{" "}
        <a href="mailto:ashbattenofficial@gmail.com" className="text-blue-500"> 
          ashbattenofficial@gmail.com
        </a>
      </p>
      <p> Phone:{" "} <a href="tel:+6285136485461" className="text-blue-500"> +62 851-3648-5461
        </a>
      </p>

      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2 rounded"/>
        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-2 rounded"/>
        <textarea placeholder="Your Message" className="border p-2 w-full mb-2 rounded pb-10"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> 
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
