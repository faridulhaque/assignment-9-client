"use client";
import { useGetClaimsQuery } from "@/services/otherApi/dashboardApi";
import { useRouter } from "next/navigation";
import React from "react";

const ClaimTable = () => {
  const { data, isLoading } = useGetClaimsQuery("");
  const claims = data?.data;

  return (
    <div className="overflow-x-auto">
      <table className="table text-white">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Status</th>
            <th>Finder</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {claims?.map((claim: any) => (
            <tr key={claim?.id}>
              <th>{claim?.FoundItem?.category?.name}</th>
              <td>{claim?.FoundItem?.description}</td>
              <td>{claim?.status}</td>
              <td>{claim?.FoundItem?.user?.username}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimTable;
