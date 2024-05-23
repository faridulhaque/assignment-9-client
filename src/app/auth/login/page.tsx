import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function login() {
  return (
    <div className="h-screen bg-primary">
      <Navbar></Navbar>
      <div className="flex justify-center items-center w-full h-[calc(100vh-70px)]">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
