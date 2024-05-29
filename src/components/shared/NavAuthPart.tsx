"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FiLogOut } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { useContextElement } from "@/services/Context";
import { MdDashboardCustomize } from "react-icons/md";
import { useRouter } from "next/navigation";

const NavAuthPart = () => {
  const { userId, isAdmin } = useContextElement();

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    window.location.reload();
    router.push("/")
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      {!userId ? (
        <Link href="/auth/login" className="btn btn-secondary">
          Sign In
        </Link>
      ) : (
        <div className="flex items-center">
          {isAdmin === true ? (
            <Link href="/dashboard" className="mr-5">
              <MdDashboardCustomize className="text-2xl" />
            </Link>
          ) : null}
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
