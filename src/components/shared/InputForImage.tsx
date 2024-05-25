"use client";
import Image from "next/image";
import React, { useState } from "react";

const InputForImage = ({ imgUrl, setImgUrl }: any) => {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (file: any) => {
    setLoading(true);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
      {
        method: "POST",
        body: file,
      }
    );
    const data = await response.json();

    return data;
  };

  const handleImage = async (imgFile: any) => {
    const file = new FormData();
    file.append("file", imgFile);
    file.append("upload_preset", "heroclub");

    const pictureInfo = await uploadImage(file);

    if (pictureInfo?.secure_url) {
      setImgUrl(pictureInfo.secure_url);
    } else {
    }
    setLoading(false)
  };

  return (
    <div className="w-full mx-auto mb-5">
      {imgUrl ? (
        <Image
          className="ml-0 w-[200px] h-[100px] border border-black"
          src={imgUrl}
          width={150}
          height={100}
          alt="img"
        ></Image>
      ) : (
        <>
          <label className="block text-secondary text-sm font-bold mb-2">
            Image
          </label>
          <input
            onChange={(e: any) => handleImage(e.target.files[0])}
            className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
            type="file"
            name="img"
          />
        </>
      )}
    </div>
  );
};

export default InputForImage;
