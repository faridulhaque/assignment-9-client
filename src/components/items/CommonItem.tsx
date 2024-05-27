import { useContextElement } from "@/services/Context";
import { useClaimItemMutation } from "@/services/otherApi/itemApi";
import Image from "next/image";
import React from "react";
import { FaRegHandPaper } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { toast } from "react-toastify";

const CommonItem = ({ item }: any) => {
  const { userId } = useContextElement();

  const [claim, { isLoading }] = useClaimItemMutation();

  const claimItem = async () => {
    const result: any = await claim({
      foundItemId: item.id,
    });
    console.log(result);
    if (result?.data?.success) {
      toast.success(result?.data?.message);
    } else {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
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
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xl">
            {item.category?.name || "Category not provided"}
          </div>
          <div className="flex space-x-2">
            {item?.userId === userId ? (
              <small>Added by you</small>
            ) : (
              <FaRegHandPaper
                onClick={() => claimItem()}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
        <p className="text-gray-700 text-base">
          {item.description || "Description not provided"}
        </p>
      </div>
      <div className="px-6 py-4">
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

export default CommonItem;
