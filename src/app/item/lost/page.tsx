import LostItemMain from "@/components/lostItem/LostItemMain";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar></Navbar>
      <LostItemMain></LostItemMain>
    </div>
  );
};

export default page;
