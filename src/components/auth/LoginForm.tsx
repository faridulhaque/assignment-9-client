"use client";
import { useContextElement } from "@/services/Context";
import { useLoginMutation } from "@/services/otherApi/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [login, { isLoading: loggingIn }] = useLoginMutation();

  const { userId } = useContextElement();

  useEffect(() => {
    if (userId) {
      router.push("/");
    } else {
    }
  }, [userId, router]);

  const [viewPassword, setViewPassword] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const result: any = await login({
      email,
      password,
    });

    if (result?.data?.success) {
      localStorage.setItem("id", result?.data?.data?.id);
      localStorage.setItem("token", result?.data?.data?.token);
      toast.success("You have logged in successfully");
      window.location.reload();
    } else {
      toast.error(result?.error?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto xl:w-4/12 lg:w-5/12 md:w-3/5 w-11/12  bg-white shadow-sm rounded-md px-5 py-10"
    >
      <h2 className="text-center text-2xl text-secondary">Log In</h2>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-secondary text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="email"
          placeholder="Enter your email"
          required
          name="email"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5 relative">
        <label className="block text-secondary text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type={viewPassword ? "text" : "password"}
          placeholder="Enter your password"
          required
          name="password"
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

      <div className="w-11/12 mb-3 mx-auto">
        <small className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Create One
          </Link>
        </small>
      </div>

      <button
        type="submit"
        disabled={loggingIn}
        className="w-11/12 mt-2 block mx-auto bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
