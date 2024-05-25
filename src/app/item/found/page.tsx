import FoundItemMain from "@/components/foundItem/FoundItemMain";
import LostItemMain from "@/components/lostItem/LostItemMain";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar></Navbar>
      <FoundItemMain></FoundItemMain>
    </div>
  );
};

export default page;
