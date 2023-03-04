import React from "react";
import Image from "next/image";
import Link from "next/link";
import CarouselComponent from "@/components/CarouselComponent";

function CustomizedLink() {
  return (
    <Link
      href="/all-classes"
      className=" transition duration-200 ease-in-out flex items-center py-3 px-8 my-2 bg-[#ffce2e] w-full rounded group hover:bg-[#ffce0a] shadow-md hover:shadow-lg"
    >
      <p className="text-white  font-semibold text-xl">Kiara</p>
      <Image
        src="/assets/arrow-rounded.png"
        width={30}
        height={30}
        alt="img"
        className="group-hover:translate-x-2 transition duration-200 ease-in-out"
      />
    </Link>
  );
}
function Page() {
  return (
    <main className="mt-6 flex flex-col items-center">
      <CarouselComponent />
      <h2 className="lg:text-5xl text-3xl my-12 mt-20">
        All{" "}
        <span className="border-b-4 font-semibold border-yellow-300 hover:bg-yellow-300 transition duration-100">
          Subjects
        </span>
      </h2>
      <div className="w-full flex flex-col items-center">
        <CustomizedLink />
        <CustomizedLink />
        <CustomizedLink />
        <CustomizedLink />
        <CustomizedLink />
        <CustomizedLink />
      </div>
    </main>
  );
}

export default Page;
