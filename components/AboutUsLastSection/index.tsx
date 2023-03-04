"use client";
import React, { useState } from "react";
import Image from "next/image";
const content = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
];

function Section() {
  const [active, setActive] = useState(1);
  return (
    <div className="flex my-52 lg:flex-row flex-col">
      <div className="lg:w-4/12">
        <h2 className="w-10/12 text-4xl font-semibold">
          Explore our wide variety of features and services.
        </h2>
        <p className="text-lg font-medium text-gray-600 my-6 w-10/12">
          Combine seamlessly fitting layouts, customize everything.
        </p>
        <div className="flex items-center cursor-pointer">
          <Image
            src="/assets/about/right-arrow.png"
            alt="arrow"
            width="15"
            height="20"
          />
          <p className="font-medium ml-2 text-gray-500 hover:underline">
            View Case Study
          </p>
        </div>
      </div>
      <div className="lg:w-8/12 lg:mt-0 mt-8">
        <div className="flex w-full">
          <div
            onClick={() => setActive(1)}
            className={`transition duration-200 ease-in-out lg:py-3 py-1 rounded w-4/12 flex justify-center items-center font-semibold text-xl opacity-70 hover:opacity-100 cursor-pointer ${
              active == 1
                ? "shadow-lg shadow-gray-300 bg-[#1769ff] text-white opacity-100"
                : ""
            }`}
          >
            <Image
              src={
                active == 1
                  ? "/assets/about/world-white.png"
                  : "/assets/about/world-black.png"
              }
              width={20}
              height={20}
              alt="icon"
              className="mx-2"
            />
            <p className="font-normal text-sm lg:font-semibold lg:text-xl">
              Design
            </p>
          </div>
          <div
            onClick={() => setActive(2)}
            className={`lg:py-3 py-1 transition duration-200 ease-in-out rounded w-4/12 flex justify-center items-center font-semibold text-xl opacity-70 hover:opacity-100 cursor-pointer ${
              active == 2
                ? "shadow-lg shadow-gray-300 bg-[#1769ff] text-white opacity-100"
                : ""
            }`}
          >
            <Image
              src={
                active == 2
                  ? "/assets/about/world-white.png"
                  : "/assets/about/world-black.png"
              }
              width={20}
              height={20}
              alt="icon"
              className="mx-2"
            />
            <p className="font-normal text-sm lg:font-semibold lg:text-xl">
              Product
            </p>
          </div>
          <div
            onClick={() => setActive(3)}
            className={` lg:py-3 py-1 transition duration-200 ease-in-out rounded w-4/12 flex justify-center items-center font-semibold text-xl opacity-70 hover:opacity-100 cursor-pointer ${
              active == 3
                ? "shadow-lg shadow-gray-300 bg-[#1769ff] text-white opacity-100"
                : ""
            }`}
          >
            <Image
              src={
                active == 3
                  ? "/assets/about/world-white.png"
                  : "/assets/about/world-black.png"
              }
              width={20}
              height={20}
              alt="icon"
              className="mx-2"
            />
            <p className="font-normal text-sm lg:font-semibold lg:text-xl">
              Web
            </p>
          </div>
        </div>
        <section>
          <p className="text-lg mt-6 text-gray-700">{content[active - 1]}</p>
        </section>
      </div>
    </div>
  );
}

export default Section;
