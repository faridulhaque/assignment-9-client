import RegisterForm from "@/components/auth/RegisterForm";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen bg-primary">
      <Navbar></Navbar>
      <div className="flex justify-center items-center w-full h-[calc(100vh-70px)]">
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default page;
