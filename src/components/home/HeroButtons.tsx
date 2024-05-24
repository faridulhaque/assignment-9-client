"use client";
import { useRouter } from "next/navigation";
import React from "react";

const HeroButtons = () => {
  const router = useRouter();
  const user = true;
  return (
    <>
      {user ? (
        <div className="flex items-center justify-between mx-auto lg:w-3/5 w-full">
          <button
            onClick={() => router.push("/item/lost")}
            className="btn btn-primary text-white"
          >
            Report lost item
          </button>
          <button
            onClick={() => router.push("/item/found")}
            className="btn btn-secondary text-white"
          >
            Report found item
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/auth/register")}
          className="btn btn-primary text-white"
        >
          Get Started
        </button>
      )}
    </>
  );
};

export default HeroButtons;
