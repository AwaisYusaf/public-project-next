import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main>
      <section className="flex">
        <div className="w-2/4 mt-12">
          <p className="w-fit my-6 bg-blue-100 text-blue-500 px-3 py-1 font-semibold rounded text-sm">
            Since 2012
          </p>
          <h2 className="text-5xl my-6">
            We{"'"}re a{" "}
            <span className="border-b-4 font-bold border-yellow-300 hover:bg-yellow-300 transition duration-100">
              top growing
            </span>{" "}
            startup in europe.
          </h2>
          <p className="text-gray-400 text-xl my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore aliqua.
          </p>
          <div className="flex items-center">
            <div className="flex group">
              <Image
                src="/assets/icon-circle-1.png"
                alt="icon"
                width={50}
                height={30}
                className="rounded-full shadow-md ring-4 ring-white "
              />
              <Image
                src="/assets/icon-circle-2.png"
                alt="icon"
                width={50}
                height={30}
                className="transition ease-in duration-200 rounded-full shadow-md ring-4 ring-white -ml-2 group-hover:translate-x-5"
              />
              <Image
                src="/assets/icon-circle-3.png"
                alt="icon"
                width={50}
                height={30}
                className="transition ease-in duration-200 rounded-full shadow-md ring-4 ring-white -ml-2 group-hover:translate-x-10"
              />
            </div>
            <div className="flex ml-14 font-bold text-lg cursor-pointer py-2 group border-b-2 border-transparent hover:border-gray-500">
              <p className=" text-gray-600">Learn more</p>
              <p className="ml-2  group-hover:translate-x-2 duration-150">
                {">"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div className="mt-10 ml-8">
            <Image
              src="/assets/about-img1.jpg"
              alt="img"
              width={400}
              height={400}
              className="w-8/12 z-10 relative rounded-md"
            />
            <Image
              src="/assets/about-img2.jpg"
              alt="img"
              width={400}
              height={400}
              className="w-8/12 -mt-32 ml-20 rounded-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
