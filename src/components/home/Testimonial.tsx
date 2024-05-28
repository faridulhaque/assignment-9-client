"use client";
import { testimonials } from "@/services/constant";
import { TTestimonials } from "@/services/types";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div id="testimonial" className="lg:h-[550px] py-10">
      <h2 className="text-center text-4xl pb-5">Testimonial</h2>

      <div className="w-11/12 mx-auto flex items-center justify-center relative">
        {testimonials.map(
          (item: TTestimonials, index: number) =>
            index === current && (
              <TestimonialCard key={index} item={item}></TestimonialCard>
            )
        )}
        <div className="text-black absolute bottom-5 xl:w-1/5 lg:w-1/5 md:w-2/5 w-4/5 flex items-center justify-between ">
          <button
            onClick={prev}
            className="py-5 px-5 rounded-full shadow-lg cursor-pointer text-md"
          >
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button
            onClick={next}
            className="py-5 px-5 rounded-full shadow-lg cursor-pointer text-md"
          >
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
