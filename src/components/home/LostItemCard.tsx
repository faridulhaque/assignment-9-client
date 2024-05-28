"use client";
import React, { useState } from "react";
import ItemDetailModal from "./ItemDetailModal";

const LostItemCard = ({ item }: any) => {
  const [openModal, setOpenModal] = useState<any>(null);

  const handleModalButton = (item: any) => {
    setOpenModal(item);
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  const handleCloseModal = () => {
    setOpenModal(null);
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
    } else {
      console.error("Modal element not found");
    }
  };

  return (
    <div className="h-60 w-full shadow-lg rounded-md relative bg-white">
      <h2 className="text-center text-2xl pb-3 pt-5">{item?.category?.name}</h2>
      <p className="text-center px-2 pb-5">{item?.description}</p>
      <div className="w-full items-center justify-center flex absolute bottom-0 h-20">
        <button
          onClick={() => handleModalButton(item)}
          className="btn btn-primary text-white"
        >
          See More
        </button>
      </div>
      <ItemDetailModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      ></ItemDetailModal>
    </div>
  );
};

export default LostItemCard;
