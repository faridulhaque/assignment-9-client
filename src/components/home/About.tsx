import Image from "next/image";
import React from "react";
import about from "../../../public/img/about.jpg";

const About = () => {
  return (
    <div className="w-full py-20">
      <h2 className="text-center text-4xl">About Us</h2>
      <div className="container m-auto h-fit py-20 grid lg:grid-cols-2 mg:grid-cols-1 gap-10">
        <div className="w-full">
          <h2 className="text-4xl py-10 font-semibold px-5">
            Your Trusted Partner in Reuniting Lost and Found Items
          </h2>
          <p className="px-5">
            At Findify, we are dedicated to bridging the gap between lost and
            found. Whether you&apos;ve misplaced a cherished item or stumbled
            upon something that someone else might be missing, our platform
            provides a simple and effective solution to reconnect owners with
            their belongings. Our mission is to create a community of trust and
            support, ensuring that lost items find their way back home. Join us
            in making the world a smaller, kinder place by reporting found items
            or searching for your lost treasures on Findify.
          </p>
        </div>
        <div className="w-full h-[400px]">
          <Image
            className="w-full h-full"
            src={about}
            alt="about"
            width={300}
            height={300}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default About;
