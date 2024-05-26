"use client"
import React from "react";

const UpdateItemForm = ({ lost, found, id }: any) => {
  console.log(lost, found, id)
    const handleSubmit = () => {

    }
  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto xl:w-3/4 lg:w-3/5 md:w-4/5 w-11/12 bg-white shadow-sm rounded-md px-5 py-10 mt-20"
    >
      <h2 className="py-5 px-3 text-2xl text-center">Add a lost item here</h2>
      <div className="w-11/12 grid lg:grid-cols-2 grid-cols-1 mx-auto gap-5">
        {/* <AddCategorySelect setCategory={setCategory}></AddCategorySelect>
        <InputForImage imgUrl={imgUrl} setImgUrl={setImgUrl}></InputForImage> */}
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
        <div className="w-full mx-auto mb-5">
          <button
            // disabled={isLoading}
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
