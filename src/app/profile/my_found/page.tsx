import MyFoundItemsContainer from "@/components/profile/MyFoundItemsContainer";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import React from "react";

const page = () => {
  return (
    <ProtectedPage userType="user">
      <div className="h-screen bg-primary">
        <Navbar></Navbar>
        <div className="w-full h-min-screen">
          <MyFoundItemsContainer></MyFoundItemsContainer>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default page;
