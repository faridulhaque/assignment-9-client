import MyLostItemsContainer from "@/components/profile/MyLostItemsContainer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-primary">
      <Navbar></Navbar>
      <div className="w-full h-[calc(100vh-70px)]">
        <MyLostItemsContainer></MyLostItemsContainer>
      </div>
    </div>
  );
};

export default page;
