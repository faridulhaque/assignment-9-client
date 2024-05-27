"use client"
import { useGetMyClaimsQuery } from "@/services/otherApi/ClaimApi";
import React from "react";
import ClaimCard from "./ClaimCard";

const MyClaims = () => {
    const {data, isLoading} = useGetMyClaimsQuery('')
    const claims = data?.data;

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-11/12 mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {claims?.map((claim: any) => (
          <ClaimCard key={claim?.id} claim={claim}></ClaimCard>
        ))}
      </div>
    </div>
  );
};

export default MyClaims;
