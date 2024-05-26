"use client";
import React, { useState } from "react";
import CategoryModal from "./CategoryModal";
import {
  useAddCategoryMutation,
  useGetAllCatsQuery,
} from "@/services/otherApi/categoriesApi";
import { toast } from "react-toastify";

const AddCategorySelect = ({ setCategory, category, item }: any) => {
  const { data, isLoading } = useGetAllCatsQuery("");

  const categories = data?.data;
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
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };
  if (isLoading) return <h2 className="text-center text-2xl">Loading...</h2>;

  return (
    <div className="w-full mx-auto mb-5">
      <label className="block text-secondary text-sm font-bold mb-2">
        Category
      </label>
      <select
        onChange={(e: any) => setCategory(e.target.value)}
        className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
      >
        <option value={category ? category : null}>
          {category ? item?.category?.name : "Select a category"}
        </option>
        {categories?.map((category: any) => (
          <option key={category?.id} value={category?.id}>
            {category?.name}
          </option>
        ))}
      </select>
      <small>
        Did not see the relevant category?{" "}
        <button
          onClick={() => {
            openModal();
          }}
          className="text-primary"
        >
          Add a new one
        </button>{" "}
      </small>
      <CategoryModal
        setNewCategory={setNewCategory}
        handleAddCategory={handleAddCategory}
        addingCat={addingCat}
      ></CategoryModal>
    </div>
  );
};

export default AddCategorySelect;
