"use client";
import { useUpdateFoundItemMutation } from "@/services/otherApi/itemApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const MyFoundItemCard = ({ item }: any) => {
  const [updateFound, { isLoading: updatingFound }] =
    useUpdateFoundItemMutation();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const body = {
      isDeleted: true,
    };
    const data = {
      body,
      id,
    };
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const result = await updateFound(data);
      console.log(result);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg px-2 py-3 bg-white">
      {item.imgUrl ? (
        <Image
          width={200}
          height={200}
          className="w-full h-48 object-cover"
          src={item.imgUrl}
          alt={item.category?.name || "Item"}
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
          Image not available
        </div>
      )}
      <div className="px-2 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xl">
            {item.category?.name || "Category not provided"}
          </div>
          <div className="flex space-x-2">
            <FaEdit
              onClick={() =>
                router.push(`/profile/update_item?type=found&id=${item?.id}`)
              }
              className="text-gray-600 cursor-pointer"
            />
            <MdDeleteOutline
              onClick={() => handleDelete(item?.id)}
              className="text-gray-600 cursor-pointer"
            />
          </div>
        </div>
        <p className="text-gray-700 text-base">
          {item.description || "Description not provided"}
        </p>
      </div>
      <div className="px-2 py-4">
        <p className="text-gray-600">
          <strong>Location:</strong> {item.location || "Not provided"}
        </p>
        <p className="text-gray-600">
          <strong>Lost Date:</strong> {item.lostDate || "Not provided"}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {item.email || "Not provided"}
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> {item.phone || "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default MyFoundItemCard;
