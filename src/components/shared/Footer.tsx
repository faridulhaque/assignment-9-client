import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-white mt-20 relative">
      <aside>
        <h2 className="text-4xl">Findify</h2>
        <p>Reconnect with Your Lost Treasures</p>
      </aside>
      <nav></nav>
      <nav></nav>
      <nav>
        <a className="link link-hover font-bold">Terms of use</a>
        <a className="link link-hover font-bold">Privacy policy</a>
        <a className="link link-hover font-bold">Cookie policy</a>
      </nav>
      <div className="absolute bottom-2 w-full ">
        <p className="mx-auto ">
          © {new Date().getFullYear()} Findify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
