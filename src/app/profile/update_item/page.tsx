import UpdateItemMain from "@/components/profile/UpdateItemMain";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import React from "react";

const page = ({ searchParams }: any) => {
  const lost = searchParams.type === "lost" ? true : false;
  const found = searchParams.type === "found" ? true : false;
  const id = searchParams.id;
  return (
    <ProtectedPage userType="user">
      <div className="bg-primary min-h-screen">
        <Navbar></Navbar>
        <UpdateItemMain lost={lost} found={found} id={id}></UpdateItemMain>
      </div>
    </ProtectedPage>
  );
};

export default page;
