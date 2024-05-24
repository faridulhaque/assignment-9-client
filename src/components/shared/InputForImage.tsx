import React from "react";

const InputForImage = () => {
  return (
    <div className="w-full mx-auto mb-5">
      <label className="block text-secondary text-sm font-bold mb-2">
        Image
      </label>
      <input
        className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
        type="file"
        name="img"
      />
    </div>
  );
};

export default InputForImage;
