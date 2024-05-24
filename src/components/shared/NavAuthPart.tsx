"use client";
import React from "react";
import Link from "next/link";

import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const NavAuthPart = () => {
  const user = true;
  const handleLogout = () => {
    localStorage.removeItem("user");
  };
  return (
    <>
      {!user ? (
        <Link href="/auth/login" className="btn btn-secondary">
          Sign In
        </Link>
      ) : (
        <div className="flex items-center">
          <Link href="/profile" className="mr-5">
            <RxAvatar className="text-2xl" />
          </Link>
          <button onClick={handleLogout}>
            <FiLogOut className="text-2xl mr-3" />
          </button>
        </div>
      )}
    </>
  );
};

export default NavAuthPart;
