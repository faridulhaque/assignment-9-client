import { CategoryModalType } from "@/services/types";
import React from "react";

const CategoryModal = ({
  setNewCategory,
  handleAddCategory,
  addingCat,
}: CategoryModalType) => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className="modal-action">
          <div className="w-full mx-auto mb-5">
            <label className="block text-secondary text-sm font-bold mb-2">
              Name
            </label>
            <input
              onBlur={(e: any) => setNewCategory(e.target.value)}
              className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
              type="text"
              placeholder="Enter a category"
              name="category"
            />
            <button
              disabled={addingCat}
              type="button"
              onClick={handleAddCategory}
              className="btn-primary btn text-white"
            >
              Add
            </button>
          </div>
        </div>

        <form method="dialog absolute bottom-5 right-5">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </dialog>
  );
};

export default CategoryModal;
