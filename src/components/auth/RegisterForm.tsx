"use client";
import { useRegisterMutation } from "@/services/otherApi/authApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const router = useRouter()
  const [register, { isLoading: registering }] = useRegisterMutation();

  const [viewPassword, setViewPassword] = React.useState(false);
  const [viewConPassword, setViewConPassword] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const con_password = e.currentTarget.con_password.value;
    const username = e.currentTarget.username.value;

    if (username === "") {
      return toast.warning("Name is required.");
    }

    if (email === "" || !re.test(email)) {
      return toast.warning("Please enter a valid email");
    }

    if (password.length <= 7) {
      return toast.warning("Password should be at least 8 character long");
    }
    if (con_password.length <= 7) {
      return toast.warning("Password should be at least 8 character long");
    }

    if (password !== con_password) {
      return toast.warning("Password did not match!");
    }
    const result: any = await register({
      email,
      username,
      password,
    });
    if (result?.data?.success) {
      toast.success(result?.data?.message);
      router.push('/auth/login')
    } else {
      toast.error(result?.error?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto xl:w-4/12 lg:w-5/12 md:w-3/5 w-11/12 bg-white shadow-sm rounded-md px-5 py-10"
    >
      <h2 className="text-center text-2xl text-secondary">Register</h2>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-secondary text-sm font-bold mb-2">
          username
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="text"
          placeholder="Enter your username"
          name="username"
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-secondary text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="email"
          placeholder="Enter your email"
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

      <div className="w-11/12 mb-3 mx-auto">
        <small className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Login.
          </Link>
        </small>
      </div>

      <button
        type="submit"
        disabled={registering}
        className="w-11/12 mt-2 block mx-auto bg-primary text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>

      {/* <button
          onClick={() => signInWithGoogle()}
          type="button"
          className="w-11/12 mt-4 block mx-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign up with Google
        </button> */}
    </form>
  );
};

export default RegisterForm;
