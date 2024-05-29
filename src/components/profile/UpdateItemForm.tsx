"use client";
import {
  useGetFoundItemQuery,
  useGetLostItemQuery,
  useUpdateFoundItemMutation,
  useUpdateLostItemMutation,
} from "@/services/otherApi/itemApi";
import React, { useEffect, useState } from "react";
import AddCategorySelect from "../lostItem/AddCategorySelect";
import InputForImage from "../shared/InputForImage";
import { toast } from "react-toastify";
import moment from "moment";

const UpdateItemForm = ({ lost, found, id }: any) => {
  const [isFound, setIsFound] = useState(false);
  const [category, setCategory] = useState(null);
  const [imgUrl, setImgUrl] = useState("");

  const {
    data: foundItemData,
    isLoading: foundItemLoading,
    isSuccess: fSuccess,
  } = useGetFoundItemQuery(id, { skip: lost });
  const {
    data: lostItemData,
    isLoading: lostItemLoading,
    isSuccess: lSuccess,
  } = useGetLostItemQuery(id, { skip: found });

  const itemData = fSuccess ? foundItemData : lostItemData;
  const item = itemData?.data;

  const [updateFound, { isLoading: updatingFound }] =
    useUpdateFoundItemMutation();
  const [updateLost, { isLoading: updatingLost }] = useUpdateLostItemMutation();

  useEffect(() => {
    setImgUrl(item?.imgUrl);
    setCategory(item?.category?.id);
    setIsFound(item?.isFound);
  }, [item]);

  if (foundItemLoading || lostItemLoading) {
    return <h2>Loading...</h2>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const description = e.currentTarget.description.value;
    const location = e.currentTarget.location.value;
    const date = e.currentTarget.date.value;
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;

    let collectedData: any;

    if (found) {
      if (!category || !description || !location || !date) {
        toast.warning(
          "category, description, location, and lost date are required"
        );
      }

      collectedData = {
        description,
        location,
        foundDate: date,
        email,
        phone,
        imgUrl,
        categoryId: category,
      };
    } else if (lost) {
      if (!category || !description) {
        toast.warning("category and description,  are required");
      }
      collectedData = {
        description,
        location,
        lostDate: date,
        email,
        phone,
        imgUrl,
        categoryId: category,
        isFound
      };
    }

    const filteredData = Object.fromEntries(
      Object.entries(collectedData).filter(
        ([key, value]) => value !== null && value !== undefined && value !== ""
      )
    );

    const data = {
      body: filteredData,
      id: id,
    };
    let result: any;

    if (found) {
      result = await updateFound(data);
    } else if (lost) {
      result = await updateLost(data);
    }


    if (result?.data?.success) {
      toast.success(result?.data?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto xl:w-3/4 lg:w-3/5 md:w-4/5 w-11/12 bg-white shadow-sm rounded-md px-5 py-10 mt-20"
    >
      <h2 className="py-5 px-3 text-2xl text-center">Update your report</h2>
      <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-5">
        <AddCategorySelect
          item={item}
          category={category}
          setCategory={setCategory}
        ></AddCategorySelect>
        <InputForImage imgUrl={imgUrl} setImgUrl={setImgUrl}></InputForImage>
      </div>
      <div className="w-11/12 grid grid-cols-1 mx-auto gap-5">
        <div className="w-full mx-auto mb-5">
          <label className="block text-secondary text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            required
            className="block w-full my-2 px-2 py-3 rounded-lg resize-none bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300 h-40"
            placeholder="Add a description"
            defaultValue={item?.description}
          />
        </div>
      </div>

      <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-5">
        <div className="w-full mx-auto mb-5">
          <label className="block text-secondary text-sm font-bold mb-2">
            Date
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="date"
            placeholder="Enter a date"
            name="date"
            defaultValue={
              found
                ? moment(item?.foundDate)?.format("dd-MM-yyyy")
                : moment(item?.lostDate)?.format("dd-MM-yyyy")
            }
          />
        </div>

        <div className="w-full mx-auto mb-5">
          <label className="block text-secondary text-sm font-bold mb-2">
            Location
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="text"
            placeholder="Enter the location"
            name="location"
            defaultValue={item?.location}
          />
        </div>
        <div className="w-full mx-auto mb-5">
          <label className="block text-secondary text-sm font-bold mb-2">
            Phone
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="text"
            placeholder="Enter your phone"
            name="phone"
            defaultValue={item?.phone}
          />
        </div>
        <div className="w-full mx-auto mb-5">
          <label className="block text-secondary text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="email"
            placeholder="Enter your email"
            name="email"
            defaultValue={item?.email}
          />
        </div>
        {lost && (
          <div className="w-full mx-auto mb-5">
            <input
              onClick={() => setIsFound(!isFound)}
              type="checkbox"
              checked={isFound}
              className="checkbox"
            />
          </div>
        )}
        <div className="w-full mx-auto mb-5">
          <button
            disabled={updatingFound || updatingLost}
            className="block w-full my-2 px-2 py-3 rounded-lg btn btn-primary text-white"
          >
            Report
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdateItemForm;
