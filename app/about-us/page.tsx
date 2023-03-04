import Section from "@/components/AboutUsLastSection";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <main>
      <section className="flex items-center flex-col lg:flex-row">
        <div className="lg:w-2/4 lg:-mt-16 mt-16">
          <p className="w-fit my-6 bg-blue-100 text-blue-500 px-3 py-1 font-semibold rounded text-sm">
            Since 2012
          </p>
          <h2 className="lg:text-5xl text-3xl my-6">
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
          <div className="flex items-center flex-wrap">
            <div className="flex group">
              <div
                className="rounded-full shadow-md ring-4 ring-white transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-toggle="tooltip"
                title="Secure Platform"
              >
                <Image
                  src="/assets/icon-circle-1.png"
                  alt="icon"
                  width={50}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div
                className="rounded-full shadow-md ring-4 ring-white -ml-2 group-hover:translate-x-5 transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-toggle="tooltip"
                title="Worldwide"
              >
                <Image
                  src="/assets/icon-circle-2.png"
                  alt="icon"
                  width={50}
                  height={30}
                  className="rounded-full"
                />
              </div>
              <div
                className="-ml-2 group-hover:translate-x-10 rounded-full shadow-md ring-4 ring-white transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-toggle="tooltip"
                title="Online Shop"
              >
                <Image
                  src="/assets/icon-circle-3.png"
                  alt="icon"
                  width={50}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="flex ml-14 font-bold text-lg cursor-pointer py-2 group border-b-2 border-transparent hover:border-gray-500">
              <p className=" text-gray-600">Learn more</p>
              <p className="ml-2  group-hover:translate-x-2 duration-150">
                {">"}
              </p>
            </div>
          </div>
        </div>
        {/* Right side images */}
        <div className="lg:w-2/4 w-full">
          <div className="mt-10 ml-8 lg:animate-[bounce_15s_linear_infinite] lg:mt-40">
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
              className="w-8/12 -mt-32 ml-20 lg:ml-32 rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="mt-8 flex flex-col items-center">
        <p className="w-fit my-6 bg-blue-100 text-gray-700 px-3 py-1 font-semibold rounded text-sm">
          International team
        </p>
        <h2 className="text-center text-5xl my-6 leading-normal">
          Check below the{" "}
          <span className="border-b-4 font-bold border-yellow-300 hover:bg-yellow-300 transition duration-100">
            most
            <br /> popular
          </span>{" "}
          services
        </h2>
        <p className="text-gray-600 text-2xl my-6 w-7/12 mb-12 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex w-full lg:flex-row flex-col justify-between my-6">
          <div className="flex flex-col items-center my-3">
            <h2 className="text-blue-600 font-semibold text-7xl"> +150</h2>
            <p className="font-semibold text-lg">Available Developers</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <h2 className="text-blue-600 font-semibold text-7xl"> +60K</h2>
            <p className="font-semibold text-lg">Clients Every Year</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <h2 className="text-blue-600 font-semibold text-7xl"> +46M</h2>
            <p className="font-semibold text-lg">Revenue in 2020</p>
          </div>
          <div className="flex flex-col items-center my-3">
            <h2 className="text-blue-600 font-semibold text-7xl"> +265</h2>
            <p className="font-semibold text-lg">Staff Members in Europe</p>
          </div>
        </div>
      </section>

      <section className="flex mt-40 lg:flex-row flex-col">
        <div className="lg:w-2/4">
          <div className="flex items-center">
            <Image
              src="/assets/about/world.png"
              alt="img"
              width={50}
              height={50}
              className="mx-2 hover:scale-110 transition ease-in-out duration-150"
            />
            <Image
              src="/assets/about/dnd.png"
              alt="img"
              width={50}
              height={40}
              className="mx-2 hover:scale-110 transition ease-in-out duration-150"
            />
            <Image
              src="/assets/about/card-lock.png"
              alt="img"
              width={50}
              height={50}
              className="mx-2 hover:scale-110 transition ease-in-out duration-150"
            />
          </div>
          <h2 className="text-5xl font-semibold my-5">
            Create Awesome Photo Stack Images with Essentials.
          </h2>
          <p className="w-11/12 text-xl text-gray-600">
            We design and develop world-class websites and applications, design
            better and spend less time without restricting creative freedom.
          </p>
          <div className="my-12 bg-[#ffcc2e] text-white w-fit text-lg px-5 py-3 font-semibold rounded cursor-pointer">
            Discover All Services
          </div>
        </div>
        <div className="lg:w-2/4 flex justify-center">
          <Image
            src="/assets/about-content.jpg"
            width={800}
            height={400}
            alt="img"
            className="w-full rounded-md hover:scale-105 h-fit transition duration-200 ease-in-out hover:shadow-lg"
          />
        </div>
      </section>
      <section className="w-full mt-20">
        <Section />
      </section>
    </main>
  );
}

export default Page;
