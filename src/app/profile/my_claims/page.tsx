import MyClaims from "@/components/claim/MyClaims";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-primary pb-20">
      <Navbar></Navbar>
      <div className="w-full">
        <MyClaims></MyClaims>
      </div>
    </div>
  );
};

export default page;
