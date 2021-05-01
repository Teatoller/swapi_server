import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mx-auto text-center text-warning border-top border-warning"
    >
      <span> {new Date().getFullYear()}&copy;Swapi</span>
    </footer>
  );
};

export default Footer;
