import ChangePasswordForm from "@/components/profile/ChangePasswordForm";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import React from "react";

const page = () => {
  return (
    <ProtectedPage userType="user">
      <div className="h-screen bg-primary">
        <Navbar></Navbar>
        <div className="flex justify-center items-center w-full h-[calc(100vh-70px)]">
          <ChangePasswordForm></ChangePasswordForm>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default page;
