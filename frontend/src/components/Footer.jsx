import React from "react";
import { Instagram, Facebook, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Sosial Media */}
      <div className="social flex justify-between w-32 mb-4">
        <a href="https://www.instagram.com/rizqi5836/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"
        > <Instagram size={20} /></a>
        <a href="https://www.facebook.com/profile.php?id=100081972251173&locale=id_ID" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"
        > <Facebook size={20} /></a>
        <a href="https://www.linkedin.com/in/moch-rizqi-hermawan-undefined-a1b81b35b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"
        > <Linkedin size={20} /></a>
        <a href="https://github.com/Decayy25" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"
        > <Github size={20} /></a>
      </div>

      {/* Links */}
      <div className="links flex gap-4 mb-4">
        <a href="#home" className="hover:text-blue-500"> Home </a>
        <a href="#about" className="hover:text-blue-500"> About </a>
        <a href="#portfolio" className="hover:text-blue-500"> Portfolio </a>
        <a href="#contact" className="hover:text-blue-500"> Contact </a>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} Ashbatten Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
