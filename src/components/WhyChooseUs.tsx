"use client";
import React, { useState } from "react";
import Heading from "./shared/widgets/Heading";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { Constants } from "@/utils/Constants";
import { MdCleaningServices } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { HorizontalAnimation, VerticalAnimation } from "./featured/Animations";

const data = [
  {
    icon: <MdCleaningServices className="text-[35px] text-secondary" />,
    title: "high quality cleaning",
  },
  {
    icon: <IoHappyOutline className="text-[35px] text-secondary" />,
    title: "Customer Satisfaction",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="whychooseus"
      className="wavy_shape_tb wavy_shape_tb relative text-white"
    >
      <div className="absolute top-0 -z-40 h-full w-full bg-primary/70 backdrop-blur-lg"></div>
      <Image
        src="/images/stylish-car.avif"
        alt="black car"
        fill={true}
        className="absolute top-0 -z-50 h-full w-full object-cover object-center"
      />

      <div className="container py-40">
        <Heading title="Why choose us" />

        <div className="mt-10 grid grid-cols-1 gap-12 sm:gap-20 lg:grid-cols-2">
          <HorizontalAnimation className="relative min-h-[300px] rounded-lg">
            <Image
              src="/images/wash-car-ready.jpg"
              alt="car wash"
              fill={true}
              className="w-full object-cover object-center rounded-lg"
            />
          </HorizontalAnimation>

          <div className="">
            <h3>
              Why Trust Us for Your{" "}
              <span className="text-secondary">Car Wash</span> Needs?
            </h3>
            <p className="mt-7 text-grayish">
              At {Constants.companyName}, we pride ourselves on delivering
              top-notch car wash services that exceed your expectations. Our
              commitment to quality, customer satisfaction, and environmental
              responsibility sets us apart. Experience the best care for your
              vehicle with our expert team, state-of-the-art technology, and
              eco-friendly practices. Trust us to keep your car looking its
              best, every time.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-7 md:gap-20">
              {data?.map((item: any, index: number) => (
                <VerticalAnimation
                  className="flex flex-col items-center gap-5 rounded-sm bg-gradient-to-t from-secondary to-white p-7"
                  key={index}
                >
                  <div className="w-fit rounded-full bg-secondary/40 p-3">
                    {item.icon}
                  </div>
                  <p className="text-center font-semibold capitalize text-white">
                    {item.title}
                  </p>
                </VerticalAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
