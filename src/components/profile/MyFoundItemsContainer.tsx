"use client";
import { useGetMyFoundItemsQuery } from "@/services/otherApi/profileApi";
import React from "react";
import MyFoundItemCard from "./MyFoundItemCard";

const MyFoundItemsContainer = () => {
  const { data, isLoading } = useGetMyFoundItemsQuery("");
  const items = data?.data;
  return (
    <div className="w-11/12 mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {items?.map((item: any) => (
        <MyFoundItemCard key={item?.id} item={item}></MyFoundItemCard>
      ))}
    </div>
  );
};

export default MyFoundItemsContainer;
