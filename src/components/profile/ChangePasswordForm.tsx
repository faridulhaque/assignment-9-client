"use client";
import { useChangePasswordMutation } from "@/services/otherApi/authApi";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

const ChangePasswordForm = () => {
  const [change, { isLoading: changing }] = useChangePasswordMutation();
  const [viewPassword, setViewPassword] = React.useState(false);
  const [viewConPassword, setViewConPassword] = React.useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const oldPassword = e.currentTarget.oldPassword.value;
    const newPassword = e.currentTarget.newPassword.value;
    const con_password = e.currentTarget.con_password.value;

    if (newPassword.length <= 7) {
      return toast.warning("Password should be at least 8 character long");
    }

    if (newPassword !== con_password) {
      return toast.warning("Password did not match!");
    }

    const result: any = await change({
      oldPassword,
      newPassword,
    });

    if (result?.data?.success) {
      toast.success(result.data.message);
    } else {
      toast.error(
        result?.error?.data?.message
          ? result?.error?.data?.message
          : "Something went wrong"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto xl:w-4/12 lg:w-5/12 md:w-3/5 w-11/12 bg-white shadow-sm rounded-md px-5 py-10"
    >
      <h2 className="text-center text-2xl text-secondary">Change Password</h2>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-secondary text-sm font-bold mb-2">
          Old password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="text"
          placeholder="Enter your old password"
          name="oldPassword"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5 relative">
        <label className="block text-secondary text-sm font-bold mb-2">
          New Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type={viewPassword ? "text" : "password"}
          placeholder="Enter your password"
          name="newPassword"
        />

        {viewPassword ? (
          <AiOutlineEye
            onClick={() => setViewPassword(!viewPassword)}
            className="absolute right-2 bottom-4 text-gray-500 text-xl cursor-pointer"
          ></AiOutlineEye>
        ) : (
          <AiOutlineEyeInvisible
            onClick={() => setViewPassword(!viewPassword)}
            className="absolute right-2 bottom-4 text-gray-500 text-xl cursor-pointer"
          ></AiOutlineEyeInvisible>
        )}
      </div>

      <div className="w-11/12 mx-auto mb-5 relative">
        <label className="block text-secondary text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type={viewConPassword ? "text" : "password"}
          placeholder="Enter your password again"
          name="con_password"
        />

        {viewConPassword ? (
          <AiOutlineEye
            onClick={() => setViewConPassword(!viewConPassword)}
            className="absolute right-2 bottom-4 text-gray-500 text-xl cursor-pointer"
          ></AiOutlineEye>
        ) : (
          <AiOutlineEyeInvisible
            onClick={() => setViewConPassword(!viewConPassword)}
            className="absolute right-2 bottom-4 text-gray-500 text-xl cursor-pointer"
          ></AiOutlineEyeInvisible>
        )}
      </div>

      <button
        type="submit"
        disabled={changing}
        className="w-11/12 mt-2 block mx-auto bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Change
      </button>
    </form>
  );
};

export default ChangePasswordForm;
