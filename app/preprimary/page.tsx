import Image from "next/image";
import Link from "next/link";
import React from "react";
const Button = ({ title, imgUrl }: any) => {
  return (
    <div className="flex bg-blue-600  w-fit px-6 py-3 rounded-md my-8 cursor-pointer">
      <Image alt="icon" width={30} height={20} src={imgUrl} className="mr-2" />
      <p className="font-semibold text-white text-xl">{title}</p>
    </div>
  );
};
const Card = ({ title, imgUrl }: any) => {
  return (
    <div className="w-[40%] rounded-lg shadow-lg m-4">
      <Image
        src={imgUrl}
        alt="book-cover"
        width={300}
        height={400}
        className="w-full rounded-t-lg"
      />
      <div className="flex justify-between items-center my-6 px-4">
        <p className="font-semibold">{title}</p>
        <Link href="/">
          <p className="font-bold text-xl">{">"}</p>
        </Link>
      </div>
    </div>
  );
};

function Page() {
  return (
    <div className="flex flex-col items-center">
      <Button title="Nursery" imgUrl="/assets/boy-icon2.png" />
      {/* Books */}
      <section className="w-full flex flex-wrap justify-between">
        <Card title="Akshar Sagar" imgUrl="/assets/book1.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book2.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book3.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book4.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book5.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book6.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book7.jpeg" />
      </section>

      <Button title="LKG" imgUrl="/assets/boy-icon2.png" />
      {/* Books */}
      <section className="w-full flex flex-wrap justify-between">
        <Card title="Akshar Sagar" imgUrl="/assets/book2.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book2.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book2.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book2.jpeg" />
      </section>

      <Button title="UKG" imgUrl="/assets/boy-icon2.png" />
      {/* Books */}
      <section className="w-full flex flex-wrap justify-between">
        <Card title="Akshar Sagar" imgUrl="/assets/book3.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book3.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book3.jpeg" />
        <Card title="Akshar Sagar" imgUrl="/assets/book3.jpeg" />
      </section>
    </div>
  );
}

export default Page;
