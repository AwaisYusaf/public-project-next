import React from "react";
import Image from "next/image";

function Page() {
  return (
    <main className="mt-20 flex lg:flex-row flex-col">
      <div className="lg:w-8/12">
        <h2 className="lg:text-5xl text-3xl">
          Contact us{" "}
          <span className="border-b-4 font-bold border-yellow-300 hover:bg-yellow-300 transition duration-100">
            today
          </span>{" "}
        </h2>

        <p className="text-xl text-gray-500 my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elite.
        </p>
        <div className="flex items-center">
          <Image
            src="/assets/facebook-icon.png"
            width={30}
            height={30}
            alt="social-icon"
            className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
          />
          <Image
            src="/assets/twitter-icon.png"
            width={30}
            height={30}
            alt="social-icon"
            className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
          />
          <Image
            src="/assets/insta-icon.png"
            width={35}
            height={35}
            alt="social-icon"
            className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
          />
          <Image
            src="/assets/dribbble-icon.png"
            width={35}
            height={35}
            alt="social-icon"
            className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:w-4/12">
        <div>
          <div className="flex items-center shadow-lg p-6 my-2 rounded bg-white cursor-pointer transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <Image
              src="/assets/map-icon.png"
              width={35}
              height={35}
              alt="social-icon"
              className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer "
            />
            <p className="text-lg font-semibold text-gray-600">
              Get directions to our office
            </p>
          </div>

          <div className="flex items-center p-6 my-4 rounded shadow-lg bg-white cursor-pointer transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <Image
              src="/assets/support-icon.png"
              width={35}
              height={35}
              alt="social-icon"
              className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
            />
            <p className="text-lg font-semibold text-gray-600">
              Contact our support team
            </p>
          </div>

          <div className="flex items-center p-6 my-2 rounded shadow-lg bg-white cursor-pointer transition duration-150 ease-in-out hover:-translate-y-1 hover:shadow-xl">
            <Image
              src="/assets/message-icon.png"
              width={35}
              height={35}
              alt="social-icon"
              className="mr-4 transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
            />
            <p className="text-lg font-semibold text-gray-600">
              Send us an email
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
