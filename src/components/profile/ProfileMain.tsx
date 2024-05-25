import Link from "next/link";
import React from "react";
import ProfileEdit from "./ProfileEdit";

const ProfileMain = () => {
  return (
    <div className="lg:w-3/5 w-11/12 mx-auto bg-white mt-10 py-10">
      <h2 className="text-center py-2 text-4xl">My profile</h2>
      <div className="flex items-center h-20 justify-between mx-auto lg:w-3/5 w-11/12 text-blue-400">
        <Link href="/profile/my_claims">My claims</Link>
        <Link href="/profile/my_found">My Found Items</Link>
        <Link href="/profile/my_lost">My Lost Items</Link>
      </div>
      <ProfileEdit></ProfileEdit>
    </div>
  );
};

export default ProfileMain;
