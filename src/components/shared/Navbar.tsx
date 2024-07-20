"use client";
import { Constants } from "@/utils/Constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ButtonSecondary } from "./widgets/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <div
        className={`fixed top-0 z-50 w-full text-black ${scrollY > 90 ? "bg-primary/80 backdrop-blur-md transition duration-1000 ease-linear" : "bg-transparent"}`}
      >
        <div className="container hidden w-full lg:block">
          <div className="flex min-h-[4.5rem] items-center justify-between gap-12">
            <div className="">
              <Link href="/" className="">
                <div className="relative h-[50px] w-[140px]">
                  <Image
                    src={"/images/logo-white-slogan.png"}
                    fill={true}
                    alt="image"
                    className=""
                  />
                </div>
              </Link>
            </div>
            <div className="">
              <ul className="relative flex gap-5 xl:gap-7">
                {Constants.navigation.map((nav, index) => (
                  <li
                    key={index}
                    className="relative flex cursor-pointer items-center gap-1"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Link
                      href={nav.url}
                      className={`text-sm text-white transition-all duration-500 ease-in-out hover:text-secondary ${
                        activeIndex === index && "!text-secondary"
                      }`}
                    >
                      {nav.label}
                    </Link>
                    <MdKeyboardArrowRight className="text-slate-500" />
                    {(hoverIndex === index || activeIndex === index) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-[27px] left-0 right-0 z-30 h-px bg-secondary"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-8">
              <Link href={"#booking"}>
                <ButtonSecondary onClick={toggle}>Book Now</ButtonSecondary>
              </Link>
            </div>
          </div>
        </div>

        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-50" />
      </div>
    </Fragment>
  );
};

export default Navbar;
