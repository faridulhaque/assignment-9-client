"use client";
import React from "react";
import LostItemCard from "./LostItemCard";
import { useGetRecentLostItemQuery } from "@/services/otherApi/itemApi";

const LostItems = () => {
  const { data, isLoading } = useGetRecentLostItemQuery("");
  const items = data?.data;
  if (isLoading) return <h2 className="text-center">Loading...</h2>;
  return (
    <div className="bg-primary w-full">
      <div className=" py-10 mx-auto w-11/12 ">
        <h2 className="pt-10 pb-5 text-4xl text-center text-white">
          Recently reported lost items
        </h2>
        <p className="text-center text-white">
          Discover and Help Reunite Lost Treasures with Their Owners
        </p>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-10 py-10">
          {items?.map((item: any) => (
            <LostItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LostItems;
