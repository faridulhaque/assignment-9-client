import MyLostItemsContainer from "@/components/profile/MyLostItemsContainer";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import React from "react";

const page = () => {
  return (
    <ProtectedPage userType="user">

    <div className="h-screen bg-primary">
      <Navbar></Navbar>
      <div className="w-full h-[calc(100vh-70px)]">
        <MyLostItemsContainer></MyLostItemsContainer>
      </div>
    </div>
    </ProtectedPage>
  );
};

export default page;
