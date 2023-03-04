"use client";
import React, { useState } from "react";
import Image from "next/image";

function CarouselComponent() {
  const [selected, setSelected] = useState("/assets/primary-img1.jpg");
  return (
    <div className="w-full relative flex flex-col items-center">
      <Image
        src={selected}
        width={1000}
        height={800}
        alt="img"
        className="w-full rounded-lg object-cover lg:h-[60vh] h-[30vh] transition duration-200 ease-in"
      />
      <div className="flex absolute -bottom-10 z-10">
        <Image
          src="/assets/primary-img1.jpg"
          onClick={() => setSelected("/assets/primary-img1.jpg")}
          width={200}
          height={80}
          alt="img"
          className={`rounded-full ring-2 ring-offset-2 w-16 h-16 object-cover cursor-pointer mx-2 hover:-translate-y-1 transition duration-200 ease-in-out brightness-75 hover:brightness-100 ${
            selected == "/assets/primary-img1.jpg" ? "brightness-100" : ""
          }`}
        />
        <Image
          src="/assets/primary-img2.jpg"
          onClick={() => setSelected("/assets/primary-img2.jpg")}
          width={200}
          height={80}
          alt="img"
          className={`rounded-full ring-2 ring-offset-2 w-16 h-16 object-cover cursor-pointer mx-2 hover:-translate-y-1 transition duration-200 ease-in-out brightness-75 hover:brightness-100 ${
            selected == "/assets/primary-img2.jpg" ? "brightness-100" : ""
          }`}
        />
        <Image
          src="/assets/primary-img3.jpg"
          onClick={() => setSelected("/assets/primary-img3.jpg")}
          width={200}
          height={80}
          alt="img"
          className={`rounded-full ring-2 ring-offset-2 w-16 h-16 object-cover cursor-pointer mx-2 hover:-translate-y-1 transition duration-200 ease-in-out brightness-75 hover:brightness-100 ${
            selected == "/assets/primary-img3.jpg" ? "brightness-100" : ""
          }`}
        />
        <Image
          src="/assets/primary-img4.jpg"
          onClick={() => setSelected("/assets/primary-img4.jpg")}
          width={200}
          height={80}
          alt="img"
          className={`rounded-full ring-2 ring-offset-2 w-16 h-16 object-cover cursor-pointer mx-2 hover:-translate-y-1 transition duration-200 ease-in-out brightness-75 hover:brightness-100 ${
            selected == "/assets/primary-img4.jpg" ? "brightness-100" : ""
          }`}
        />
      </div>
    </div>
  );
}
export default CarouselComponent;
