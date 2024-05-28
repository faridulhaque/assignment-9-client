import MyClaims from "@/components/claim/MyClaims";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import React from "react";

const page = () => {
  return (
    <ProtectedPage userType="user">

    <div className="min-h-screen bg-primary pb-20">
      <Navbar></Navbar>
      <div className="w-full">
        <MyClaims></MyClaims>
      </div>
    </div>
    </ProtectedPage>
  );
};

export default page;
