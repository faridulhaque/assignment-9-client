import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-primary text-white mt-20 relative">
      <aside>
        <h2 className="text-4xl">Findify</h2>
        <p>Reconnect with Your Lost Treasures</p>
        <p>+012 345 5676</p>
        <p>support@findify.co</p>
      </aside>
      <nav>
        <a className="link link-hover font-bold">Terms of use</a>
        <a className="link link-hover font-bold">Privacy policy</a>
        <a className="link link-hover font-bold">Cookie policy</a>
      </nav>
      <nav>
        <Link href="#about" className="link link-hover font-bold">
          About us
        </Link>
        <Link href="#testimonial" className="link link-hover font-bold">
          Testimonial
        </Link>
        <a className="link link-hover font-bold">Donate us</a>
      </nav>
      <nav>
        <a className="link link-hover font-bold">Facebook</a>
        <a className="link link-hover font-bold">Twitter</a>
        <a className="link link-hover font-bold">Instagram</a>
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
