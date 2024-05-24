import React from "react";
import HeroButtons from "./HeroButtons";

const Header = () => {
  return (
    <div
      className="hero h-[calc(100vh-70px)]"
      style={{
        backgroundImage: "url(https://i.ibb.co/X3cwqz3/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            Reconnect with Your Lost Treasures{" "}
          </h1>
          <p className="mb-5">
            Discover, Report, and Return Lost Items with Ease in Our Friendly
            Community! Join Us Today to Help and Be Helped – Together, We Make
            Finding Lost Belongings a Breeze!
          </p>
          <HeroButtons></HeroButtons>
        </div>
      </div>
    </div>
  );
};

export default Header;
