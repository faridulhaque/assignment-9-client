import AllItem from "@/components/items/AllItem";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-primary pb-20">
      <Navbar></Navbar>
      <div className="w-full h-min-screen">
        <AllItem></AllItem>
      </div>
    </div>
  );
};

export default page;
