"use client";
import { useGetMyLostItemsQuery } from "@/services/otherApi/profileApi";
import React from "react";
import MyLostItemCard from "./MyLostItemCard";

const MyLostItemsContainer = () => {
  const { data, isLoading } = useGetMyLostItemsQuery("");
  if (isLoading) return <h2 className="text-center">Loading...</h2>;

  const items = data?.data;

  return (
    <div className="w-11/12 mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {items?.map((item: any) => (
        <MyLostItemCard key={item?.id} item={item}></MyLostItemCard>
      ))}
    </div>
  );
};

export default MyLostItemsContainer;
