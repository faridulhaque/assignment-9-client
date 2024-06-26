"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ProtectedPageProps } from "./types";

export const ProtectedPage = ({ children, userType }: ProtectedPageProps) => {
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("id");
    const isAdmin = localStorage.getItem("isAdmin") === "true";

    if (userType === "user") {
      if (!id) {
        router.push("/auth/login");
      }
    } else if (userType === "admin") {
      if (!isAdmin) {
        router.push("/auth/login");
      }
    }
  }, [userType, router]);

  return children;
};
