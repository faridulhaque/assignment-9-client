"use client";
import {
  useBanUserMutation,
  useGetUsersQuery,
} from "@/services/otherApi/dashboardApi";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UserTable = () => {
  const { data, isLoading } = useGetUsersQuery("");
  const [ban, { isLoading: banning }] = useBanUserMutation();
  const users = data?.data;

  const handleBanning = async (id: string, isBanned: boolean) => {
    const isConfirmed = confirm("Are you sure?");
    if (isConfirmed) {
      const result = await ban({
        id,
        isBanned: !isBanned,
      });
      if (result?.data?.success) {
        toast.success(result?.data?.message);
      } else {
        toast.error("something went wrong");
      }
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Username</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users?.map((user: any) => (
            <tr key={user?.id}>
              <th>{user?.username}</th>
              <td>{user?.isBanned ? "Banned" : "Active"}</td>
              <td>
                <button
                  onClick={() => handleBanning(user?.id, user?.isBanned)}
                  className="text-white btn btn-secondary"
                  disabled={user?.isAdmin || banning}
                >
                  {!user?.isBanned ? "Ban" : "Unban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
