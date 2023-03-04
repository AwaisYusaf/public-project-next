import React from "react";
import Image from "next/image";
import Link from "next/link";
import CarouselComponent from "@/components/CarouselComponent";

function CustomizedLink({
  title,
  url,
  color,
}: {
  title: string;
  url: string;
  color: string;
}) {
  return (
    <Link
      href={url}
      className={`transition duration-200 ease-in-out flex items-center justify-center py-3 px-8 my-2 w-full rounded group hover:brightness-95 shadow-md hover:shadow-lg ${color}`}
    >
      <p className="text-white font-semibold text-xl mr-2">{title}</p>
      <Image src="/assets/book.png" width={24} height={24} alt="img" />
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
          Classes
        </span>
      </h2>
      <div className="w-full flex flex-col items-center">
        <CustomizedLink title={"Class 1"} url={"/"} color="bg-[#ffce2e]" />
        <CustomizedLink title={"Class 2"} url={"/"} color="bg-blue-800" />
        <CustomizedLink title={"Class 3"} url={"/"} color="bg-red-400" />
        <CustomizedLink title={"Class 4"} url={"/"} color="bg-green-800" />
        <CustomizedLink title={"Class 5"} url={"/"} color="bg-blue-600" />
        <CustomizedLink title={"Class 6"} url={"/"} color="bg-yellow-400" />
      </div>
    </main>
  );
}

export default Page;
