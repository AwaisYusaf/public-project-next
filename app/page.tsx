import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Image
        src="/assets/logo.png"
        width={250}
        height={30}
        alt="logo"
        className="mt-28"
      />

      <Link
        href="/"
        className="flex justify-center mt-12 shadow-2xl rounded-md text-white font-semibold items-center bg-[#1769ff] w-10/12 py-3"
      >
        <Image src="/assets/ball-icon.png" width={25} height={30} alt="ball" />
        <p className="text-lg mx-3">Pre-Primary</p>
      </Link>

      <Link
        href="/"
        className="flex justify-center mt-12 shadow-2xl rounded-md text-white font-semibold items-center bg-[#ffcc2e] w-10/12 py-3"
      >
        <Image
          src="/assets/bicycle-icon.png"
          width={25}
          height={30}
          alt="ball"
        />
        <p className="text-lg mx-3">Primary</p>
      </Link>
    </main>
  );
}
