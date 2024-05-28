import ClaimTable from "@/components/dashboard/ClaimTable";
import Navbar from "@/components/shared/Navbar";
import { ProtectedPage } from "@/services/ProtectedPage";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <ProtectedPage userType="admin">
      <div className="h-min-screen bg-primary">
        <Navbar></Navbar>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <ClaimTable></ClaimTable>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link href="/dashboard">Manage Users</Link>
              </li>
              <li>
                <Link href="/dashboard/claims">Track claims</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ProtectedPage>
  );
};

export default page;
