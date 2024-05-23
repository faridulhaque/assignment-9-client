import React from "react";
import LostItemCard from "./LostItemCard";

const LostItems = () => {
  return (
    <div className=" py-10 mx-auto w-11/12">
      <h2 className="pt-10 pb-5 text-4xl text-center">
        Recently reported lost items
      </h2>
      <p className="text-center">
        Discover and Help Reunite Lost Treasures with Their Owners
      </p>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-10 py-10">
        <LostItemCard></LostItemCard>
        <LostItemCard></LostItemCard>
        <LostItemCard></LostItemCard>
        <LostItemCard></LostItemCard>
      </div>
    </div>
  );
};

export default LostItems;
