import Image from "next/image";
import React from "react";

const StaffCard = () => {
  return (
    <div className="flex flex-col items-center mb-16">
      <Image
        width={150}
        height={150}
        alt="dp"
        src="/assets/staff-avatar.png"
        className="rounded-full"
      />
      <h3 className="font-semibold text-2xl my-3">Antoine Philippe</h3>
      <p className="font-semibold text-blue-600">Founder and developer</p>
      <p className="text-gray-600 my-3 text-md">Pairs, France</p>
      <div className="flex w-32 justify-between mt-3">
        <Image
          width={25}
          height={30}
          alt="dp"
          src="/assets/facebook-icon.png"
          className="transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
        />
        <Image
          width={25}
          height={30}
          alt="dp"
          src="/assets/linkedin-icon.png"
          className="transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
        />
        <Image
          width={25}
          height={30}
          alt="dp"
          src="/assets/twitter-icon.png"
          className="transition ease-in-out duration-200 hover:-translate-y-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

function Page() {
  return (
    <main className="flex flex-col items-center mt-6">
      <h2 className="text-5xl font-bold my-4">Meet the Staff</h2>
      <p className="text-lg font-normal text-gray-600 lg:w-6/12 text-center">
        This is just a simple text made for this unique and awesome template,
        you can replace it with any text.
      </p>
      <div className="w-full flex lg:flex-row flex-col justify-between mt-16">
        <StaffCard />
        <StaffCard />
        <StaffCard />
        <StaffCard />
      </div>
    </main>
  );
}

export default Page;
