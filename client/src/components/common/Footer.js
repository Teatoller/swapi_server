import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="text-center">
      <span>Swapi &copy;{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;