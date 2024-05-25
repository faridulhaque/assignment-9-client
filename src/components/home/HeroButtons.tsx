"use client";
import { useContextElement } from "@/services/Context";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeroButtons = () => {
  const router = useRouter();
  const { userId } = useContextElement();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div>
      {userId ? (
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
    </div>
  );
};

export default HeroButtons;
