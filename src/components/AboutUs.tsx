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

const AboutUs = () => {
  return (
    <section id="aboutus" className="wavy_shape_tb relative text-white">
      <div className="absolute top-0 -z-40 h-full w-full bg-primary/70 backdrop-blur-lg"></div>
      <Image
        src="/images/stylish-car.avif"
        alt="black car"
        fill={true}
        className="absolute top-0 -z-50 h-full w-full object-cover object-center"
      />

      <div className="container py-40">
        <Heading title="About us" />

        <div className="grid-col-1 mt-10 grid gap-10 sm:gap-20 lg:grid-cols-2">
          <div className="grid min-h-[300px] grid-cols-2 grid-rows-2 gap-2">
            <HorizontalAnimation className="relative row-span-1 rounded-md">
              <Image
                src="/images/full-car-wash.jpg"
                alt="car wash"
                fill={true}
                className="h-full w-full rounded-md object-cover object-center"
              />
            </HorizontalAnimation>

            <VerticalAnimation className="relative row-span-2 rounded-md">
              <Image
                src="/images/white-car-wash.jpg"
                alt="car wash"
                fill={true}
                className="w-full rounded-md object-cover object-center"
              />
            </VerticalAnimation>

            <HorizontalAnimation className="relative row-span-1 rounded-md">
              <Image
                src="/images/white-car-wash-man.jpg"
                alt="car wash"
                fill={true}
                className="w-full rounded-md object-cover object-center"
              />
            </HorizontalAnimation>
          </div>

          <div className="order-1">
            <h3>
              Dedicated to <span className="text-secondary">Car Wash</span>{" "}
              Excellence Since 1990
            </h3>
            <p className="mt-7 text-grayish">
              Since 1990, {Constants.companyName} has been a trusted name in car
              care, providing professional and high-quality car wash services.
              Our experienced team is dedicated to delivering exceptional
              results, using the latest technology and eco-friendly products to
              ensure your vehicle looks its best. With a strong commitment to
              customer satisfaction, we go above and beyond to meet your needs
              and exceed your expectations. Discover the difference with our
              reliable and efficient car wash services that have kept our
              customers coming back for over three decades. every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
