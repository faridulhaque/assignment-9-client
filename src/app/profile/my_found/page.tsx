import MyFoundItemsContainer from "@/components/profile/MyFoundItemsContainer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-primary">
      <Navbar></Navbar>
      <div className="w-full h-[calc(100vh-70px)]">
        <MyFoundItemsContainer></MyFoundItemsContainer>
      </div>
    </div>
  );
};

export default page;
