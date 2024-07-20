"use client";
import { Constants } from "@/utils/Constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {!open ? (
        <FaBarsStaggered
          className="fixed right-7 top-5 z-50 cursor-pointer text-3xl text-secondary"
          onClick={() => setOpen(true)}
        />
      ) : (
        <>
          <RxCross2
            className="fixed right-7 top-5 z-50 cursor-pointer text-4xl text-secondary"
            onClick={() => setOpen(false)}
          />
          <div className="fixed z-40 h-full w-full bg-black/70"></div>
        </>
      )}

      <div
        className={`fixed z-50 h-screen w-[75%] overflow-y-scroll bg-white p-10 ${
          open ? "translate-x-[0%]" : "-translate-x-[100%]"
        } transition-all duration-1000 ease-in-out`}
      >
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Link href="/" className="z-10">
            <div className="relative h-[50px] w-[140px]">
              <Image
                src={"/images/logo-black-slogan.png"}
                fill={true}
                alt="image"
                className=""
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <ul onClick={() => setOpen(false)}>
          {Constants.navigation.map((item: any, index: number) => (
            <li key={index}>
              <Link
                href={item.url}
                className="mb-5 block w-full rounded-md border border-gray-300 px-4 py-2 text-2xl font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
