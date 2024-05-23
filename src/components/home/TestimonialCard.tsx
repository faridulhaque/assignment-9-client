import { TTestimonialCardPage } from "@/services/types";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ item }: TTestimonialCardPage) => {
  return (
    <div className=" h-[500px] lg:w-3/5 md:w-4/5 sm:w-11/12 mx-auto flex flex-col items-center ">
      <Image
        className="h-[20vh] rounded-full border-solid border-1 my-5"
        src={item.img}
        width={200}
        height={200}
        alt="avatar"
      ></Image>
      <h2 className="text-center py-2 px-3 text-2xl">{item?.name}</h2>
      <p className="text-center py-1 px-2 text-lg">{item?.prof}</p>
      <p className="text-center py-1 px-2">{item?.text}</p>
    </div>
  );
};

export default TestimonialCard;
