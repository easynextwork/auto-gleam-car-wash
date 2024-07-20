"use client";
import React, { useState } from "react";
import Heading from "./shared/widgets/Heading";
import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import FeatureListItem from "./featured/FeatureListItem";
import { Service, ServicesData } from "@/types";
import { VerticalAnimation } from "./featured/Animations";

const data: ServicesData = {
  services: {
    basic_services: [
      {
        name: "Exterior Wash",
        description:
          "Thorough washing of the car's exterior using hand, automatic, or touchless methods to ensure a spotless and shiny finish.",
        options: ["Hand Wash", "Automatic Wash", "Touchless Wash"],
        image: "/images/car-wash-exterior.jpeg",
      },
      {
        name: "Interior Cleaning",
        description:
          "Comprehensive cleaning of the car's interior, including vacuuming, dashboard cleaning, and window cleaning to keep the inside fresh and neat.",
        options: ["Vacuuming", "Dashboard Cleaning", "Window Cleaning"],
        image: "/images/car-wash-interior.jpg",
      },
      {
        name: "Full-Service Wash",
        description:
          "Complete package combining both exterior wash and interior cleaning and more, providing a thorough makeover for your car, inside and out.",
        options: [
          "Tire & Wheel Cleaning",
          "Rim Polishing",
          "Window Tinting",
          "Convertible Top Cleaning",
        ],
        image: "/images/full-car-wash.jpg",
      },
    ],
    advanced_services: [
      {
        name: "Detailing Services",
        description:
          "Expert detailing services for the exterior, interior, and engine, meticulously restoring your car's appearance to its original condition.",
        options: [
          "Exterior Detailing",
          "Interior Detailing",
          "Engine Detailing",
        ],
        image: "/images/detailing-services.webp",
      },
      {
        name: "Polishing and Waxing",
        description:
          "Enhance your car's shine and protection with professional hand waxing and machine polishing, ensuring a glossy and long-lasting finish.",
        options: ["Hand Wax", "Machine Polishing"],
        image: "/images/polishing-and-waxingcar.jpg",
      },
      {
        name: "Paint Protection",
        description:
          "Long-lasting paint protection options including ceramic coating, paint sealant, and clear bra installation to safeguard your car's paintwork.",
        options: ["Ceramic Coating", "Paint Sealant", "Clear Bra Installation"],
        image: "/images/car-paint-protection.jpg",
      },
      {
        name: "Scratch & Swirl Removal",
        description:
          "Remove minor scratches and swirl marks, restoring your car's flawless finish and maintaining its pristine appearance.",
        options: ["Minor Scratch Removal", "Swirl Mark Removal"],
        image: "/images/car-scratch-remover.jpg",
      },
    ],
  },
};

const Services = () => {
  const [features, setFeatures] = useState<Service>(
    data?.services?.basic_services[1],
  );
  return (
    <section className="container py-20" id="services">
      <Heading title="our Services" />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-20">
        <div className="max-lg:order-1 lg:col-span-1">
          <h5 className="text-center">Basic Services</h5>

          <ul className="mt-10 flex flex-col items-center">
            {data?.services?.basic_services?.map(
              (item: Service, index: number) => (
                <FeatureListItem
                  key={index}
                  item={item}
                  setFeatures={setFeatures}
                  features={features}
                />
              ),
            )}
          </ul>
        </div>

        <div className="mt-8 max-lg:order-3 sm:col-span-2 sm:mt-0">
          <VerticalAnimation className="relative h-[250px] w-full">
            <Image
              src={features?.image ? features.image : ""}
              fill={true}
              alt="image"
              className="rounded-md object-cover object-center"
            />
          </VerticalAnimation>

          <p className="mt-5">{features?.description}</p>
          <ul className="mt-5 grid grid-cols-2 gap-5">
            {features.options.map((item: any, index: number) => (
              <li className="flex gap-2" key={index}>
                <TiTick className="text-[20px] text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-lg:order-2 lg:col-span-1">
          <h5 className="text-center">Advanced Services</h5>

          <ul className="mt-10">
            {data?.services?.advanced_services?.map(
              (item: Service, index: number) => (
                <FeatureListItem
                  key={index}
                  item={item}
                  setFeatures={setFeatures}
                  features={features}
                />
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
