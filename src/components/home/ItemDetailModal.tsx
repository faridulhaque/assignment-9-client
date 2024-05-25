"use client";
import Image from "next/image";
import React from "react";

const ItemDetailModal = ({ handleCloseModal, openModal: item }: any) => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* if there is a button in form, it will close the modal */}
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <div className="flex items-center flex-col">
          <div className="w-3/5 h-[150px]">
            {item?.imgUrl ? (
              <Image
                src={item?.imgUrl}
                width={200}
                height={200}
                alt="item"
              ></Image>
            ) : (
              <div>No Image to display</div>
            )}
          </div>
          <div className="ml-5 flex flex-col items-left">
            <h2 className="text-m mb-2">Category: {item?.category?.name}</h2>
            <h2 className="text-md mb-2">Description: {item?.description}</h2>
            <h2 className="text-md mb-2">
              Location: {item?.location ? item?.location : "no location added"}
            </h2>
            <h2 className="text-md mb-2">
              Lost date: {item?.lostDate ? item?.lostDate : "no date added"}
            </h2>
            <div>
              <h2 className="text-xl my-3">Contact</h2>
              <h2 className="text-md mb-2">
                Email: {item?.email ? item?.email : "no email added"}
              </h2>
              <h2 className="text-md mb-2">
                Phone: {item?.phone ? item?.phone : "no phone added"}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ItemDetailModal;
