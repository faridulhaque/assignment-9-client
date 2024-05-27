"use client";
import React, { useState } from "react";
import CommonItem from "./CommonItem";
import { useGetAllCatsQuery } from "@/services/otherApi/categoriesApi";
import { useGetFilteredItemQuery } from "@/services/otherApi/itemApi";
import { toast } from "react-toastify";

const AllItem = () => {
  const [categoryId, selectedCategoryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const { data: itemsData, isLoading: dataLoading } =
    useGetFilteredItemQuery(query);

  const items = itemsData?.data;

  const { data, isLoading } = useGetAllCatsQuery("");

  const categories = data?.data;

  const search = () => {
    if (!categoryId && !searchTerm) {
      return toast.warning("Please fill at least one field");
    }
    const params: any = {};
    if (categoryId) {
      params.categoryId = categoryId;
    }
    if (searchTerm) {
      params.searchTerm = encodeURIComponent(searchTerm);
    }
    const queryString = new URLSearchParams(params).toString();
    setQuery(queryString);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="lg:w-3/5 w-full lg:flex lg:justify-between block my-10 mx-auto">
        <input
          onBlur={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
        />

        <select
          onChange={(e: any) => selectedCategoryId(e.target.value)}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select a category
          </option>
          {categories?.map((category: any) => (
            <option key={category?.id} value={category?.id}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="btn btn-secondary text-white" onClick={search}>
          Search
        </button>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-secondary text-white ml-10"
        >
          Clear
        </button>
      </div>
      <div className="w-11/12 mt-10 mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {items?.map((item: any) => (
          <CommonItem key={item?.id} item={item}></CommonItem>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
