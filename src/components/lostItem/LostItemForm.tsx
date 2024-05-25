"use client";
import React, { useState } from "react";
import InputForImage from "../shared/InputForImage";
import { toast } from "react-toastify";
import CategoryModal from "./CategoryModal";
import { useAddCategoryMutation } from "@/services/otherApi/categoriesApi";

const LostItemForm = () => {
  const [category, setCategory] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const categories: any[] = [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const description = e.currentTarget.description.value;
    const location = e.currentTarget.location.vale;
    const lostDate = e.currentTarget.date.value;
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;
    if (!category || !description) {
      toast.warning("category and description are required");
    }
    const collectedData = {
      description,
      location,
      lostDate,
      email,
      phone,
      imgUrl,
      category,
    };
  };

  const [addCat, { isLoading: addingCat }] = useAddCategoryMutation();

  const [newCategory, setNewCategory] = useState("");
  const handleAddCategory = async () => {
    if (!newCategory) {
      toast.warning("Please fill the field");
    } else {
      const result: any = await addCat({
        name: newCategory,
      });
      if (result?.data?.success) {
        toast.success(result?.data?.message);
      } else {
        toast.error(result?.error?.data?.error?.errorSource?.message);
      }
    }
  };

  return (
    <>
      <form className="h-auto xl:w-3/4 lg:w-3/5 md:w-4/5 w-11/12 bg-white shadow-sm rounded-md px-5 py-10 mt-20">
        <h2 className="py-5 px-3 text-2xl text-center">Add a lost item here</h2>
        <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-5">
          <InputForImage></InputForImage>
          <div className="w-full mx-auto mb-5">
            <label className="block text-secondary text-sm font-bold mb-2">
              Select a category
            </label>
            <select
              onChange={(e: any) => setCategory(e.target.value)}
              className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            >
              {categories.map((category: any) => (
                <option key={category?.id}>{category?.name}</option>
              ))}
            </select>
            <small>
              Did not see the relevant category?{" "}
              <button
                onClick={() => {
                  const modal = document.getElementById(
                    "my_modal_1"
                  ) as HTMLDialogElement | null;
                  if (modal) {
                    modal.showModal();
                  } else {
                    console.error("Modal element not found");
                  }
                }}
                className="text-primary"
              >
                Add a new one
              </button>{" "}
            </small>
          </div>
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
            />
          </div>
        </div>
      </form>
      <CategoryModal
        setNewCategory={setNewCategory}
        handleAddCategory={handleAddCategory}
        addingCat={addingCat}
      ></CategoryModal>
    </>
  );
};

export default LostItemForm;
