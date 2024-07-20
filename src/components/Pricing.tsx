"use client";
import { Constants } from "@/utils/Constants";
import Heading from "./shared/widgets/Heading";
import Image from "next/image";
import { FaDollarSign } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ButtonPrimary, ButtonTernary } from "./shared/widgets/Button";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";
import { HorizontalAnimation, VerticalAnimation } from "./featured/Animations";
import CarSize from "./featured/CarSize";
import PricingCard from "./featured/PricingCard";
import { IPricing, IPricingData } from "@/types";

const data = [
  {
    image: "/images/small-white-car.jpg",
    title: "small car",
  },

  {
    image: "/images/medium-white-car.jpg",
    title: "medium car",
  },
  {
    image: "/images/large-white-car.jpg",
    title: "large car",
  },
  {
    image: "/images/luxury-white-car.jpg",
    title: "luxury car",
  },
];

const pricing_data = [
  {
    plan: "basic wash",
    price: 8,
    options: [
      { name: "Exterior Wash", status: true },
      { name: "Interior Cleaning", status: false },
      { name: "Full-Service Wash", status: false },
      { name: "Detailing Services", status: false },
      { name: "Polishing and Waxing", status: false },
      { name: "Paint Protection", status: false },
      { name: "Scratch & Swirl Removal", status: false },
    ],
  },
  {
    plan: "standard wash",
    price: 16,
    options: [
      { name: "Exterior Wash", status: true },
      { name: "Interior Cleaning", status: true },
      { name: "Full-Service Wash", status: true },
      { name: "Detailing Services", status: false },
      { name: "Polishing and Waxing", status: false },
      { name: "Paint Protection", status: false },
      { name: "Scratch & Swirl Removal", status: false },
    ],
  },
  {
    plan: "deluxe wash",
    price: 45,
    options: [
      { name: "Exterior Wash", status: true },
      { name: "Interior Cleaning", status: true },
      { name: "Full-Service Wash", status: true },
      { name: "Detailing Services", status: true },
      { name: "Polishing and Waxing", status: true },
      { name: "Paint Protection", status: true },
      { name: "Scratch & Swirl Removal", status: true },
    ],
  },
];

const Pricing = () => {
  const [pricing, setPricing] = useState<IPricing>(pricing_data);
  const [carType, setCarType] = useState("small car");

  const handlePricing = (carTitle: string) => {
    let filterData: any = [];

    if (carTitle == "small car") {
      filterData = pricing_data;
    } else if (carTitle == "medium car") {
      filterData = pricing_data.map((item: any) => ({
        ...item,
        price: item.price + 5,
      }));
    } else if (carTitle == "large car") {
      filterData = pricing_data.map((item: any) => ({
        ...item,
        price: item.price + 10,
      }));
    } else if (carTitle == "luxury car") {
      filterData = pricing_data.map((item: any) => ({
        ...item,
        price: item.price + 20,
      }));
    }

    setPricing(filterData);
    setCarType(carTitle);
  };

  return (
    <section className="container py-20" id="pricing">
      <Heading title="our Pricing" />
      <p className="mt-7">
        Discover our affordable pricing options tailored to meet your cars needs
        and your budget. At {Constants.companyName}, we believe in transparency
        and quality service. Choose from our range of services designed to keep
        your vehicle sparkling clean and protected.
      </p>

      <div className="container mt-10 grid grid-cols-2 gap-x-7 gap-y-12 sm:gap-10 md:grid-cols-4 lg:px-32">
        {data?.map((item: any, index: number) => (
          <div onClick={() => handlePricing(item.title)} key={index}>
            <CarSize carType={carType} image={item.image} title={item.title} />
          </div>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {pricing?.map((item: IPricingData, index: number) => (
          <VerticalAnimation
            key={index}
            className="relative rounded-sm text-white"
          >
            <div className="absolute top-0 -z-10 h-full w-full rounded-sm bg-black/80"></div>
            <Image
              src={"/images/black-car-with-cover.webp"}
              alt="small car"
              fill={true}
              className="-z-20 h-full w-full rounded-md object-cover object-center"
            />

            <PricingCard
              plan={item.plan}
              options={item.options}
              price={item.price}
            />
          </VerticalAnimation>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
