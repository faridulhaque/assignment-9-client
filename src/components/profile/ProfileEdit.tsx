"use client";
import {
  useGetUserQuery,
  useUpdateProfileMutation,
} from "@/services/otherApi/profileApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfileEdit = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const { data, isLoading } = useGetUserQuery("");
  const profile = data?.data;

  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const email = e.currentTarget.email.value;

    const data = {
      username,
      email,
    };

    const result = await updateProfile(data);
    if (result?.data?.success) {
      toast.success(result.data.message);
      setEdit(false);
    } else {
      toast.error(
        result?.data?.message ? result?.data?.message : "Something went wrong"
      );
    }
  };

  if (isLoading) return <h2 className="text-center">Loading...</h2>;
  return (
    <div className="w-11/12 mx-auto pt-10">
      {edit ? (
        <form
          onSubmit={handleSubmit}
          className="h-auto w-full shadow-sm rounded-md"
        >
          <div className="w-11/12 mx-auto mb-5">
            <label className="block text-secondary text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
              type="username"
              placeholder="Enter your username"
              defaultValue={profile?.username}
              name="username"
            />
          </div>

          <div className="w-11/12 mx-auto mb-5 relative">
            <label className="block text-secondary text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
              type="email"
              placeholder="Enter your email"
              name="email"
              defaultValue={profile?.email}
            />
          </div>

          <button
            type="submit"
            disabled={updating}
            className="w-11/12 mt-2 block mx-auto bg-primary text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-2xl">
            <span className="mr-3 font-bold">Username:</span>{" "}
            <span>{profile?.username}</span>
          </h2>
          <h2 className="text-2xl">
            <span className="mr-3 font-bold">Email:</span>{" "}
            <span>{profile?.email}</span>
          </h2>
          <button
            onClick={() => setEdit(true)}
            className="my-5 btn btn-primary text-white"
          >
            Edit
          </button>
          <button
            onClick={() => router.push("/profile/change_password")}
            className="my-5 btn btn-primary text-white ml-5"
          >
            Change Password
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileEdit;
