import {useEffect} from "react";
import shopIcon from "../images/Shop-icon.png";

const Hero = () => {

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css")
      .then((res) => res.text())
      .then((css) => {
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
      });
  }, []);
  return (
    <section
      id="home"
      className="hero-height bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center min-h-screen"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Ashbatten Shop
          </h1>
          <p className="mt-4 text-lg">
            Quality products for students and hobbyists. Fast shipping across
            Indonesia.
          </p>
          <div className="mt-6">
            <a href="#shop" className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:opacity-90"> Shop Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-white flex items-center justify-center bg-gray-200">
            <img src={shopIcon} alt="Shop" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
