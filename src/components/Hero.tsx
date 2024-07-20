"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { ButtonSecondary, ButtonTernary } from "./shared/widgets/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import "./component.css";
import Link from "next/link";

const data = [
  {
    title: "Experience Ultimate Shine",
    subTitle:
      "From thorough cleaning to detailing, we pamper every car like our own",
    image:
      "/images/luxury-car.webp",
  },
  {
    title: "Drive In, Shine Out",
    subTitle: "Book your wash today and see the difference",
    image:
      "/images/car-washing.jpg",
  },
  {
    title: "Unmatched Cleanliness",
    subTitle: "Your one-stop destination for all car wash needs",
    image:
      "/images/car-wash-station.jpeg",
  },
];

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-screen w-full">
        <div className="relative h-full w-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect={"cube"}
            className="relative h-full w-full"
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".h1n",
              prevEl: ".h1p",
            }}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={2000}
          >
            {data?.map((item, index) => (
              <SwiperSlide className="w-full" key={index}>
                <div className="relative h-full w-full text-white">
                  <Image
                    src={item.image}
                    priority= {true}
                    fill={true}
                    alt="Black car"
                    className="-z-20 object-cover object-center"
                  />
                  <div className="absolute -z-10 h-full w-full bg-black/50"></div>
                  <div className="container relative z-30 flex h-full w-full flex-col items-center justify-center text-center">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-secondary">
                        {item.title}
                      </span>
                      <hr className="my-1 h-2 border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70" />
                    </div>
                    <h1 className="my-2 sm:px-10">{item.subTitle}</h1>

                    <div className="mt-5 flex gap-5">
                      <Link href={"#services"}>
                        <ButtonSecondary>Read More</ButtonSecondary>
                      </Link>
                      <Link href={"#booking"}>
                        <ButtonTernary>Book Now</ButtonTernary>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="hero-swiper relative z-30">
            <div className="swiper-pagination absolute bottom-6 z-30 flex w-full justify-center"></div>
          </div>

          <div className="h1p absolute left-3 sm:left-7 md:left-14 top-[40%] z-10 flex h-fit translate-y-[50%] transform cursor-pointer items-center justify-center rounded-full border-2 border-white p-3 transition-all duration-500 ease-in-out hover:bg-secondary">
            <FaAngleLeft className="text-[25px] text-white" />
          </div>
          <div className="h1n absolute right-3 sm:right-7 md:right-14 top-[40%] z-10 flex h-fit translate-y-[50%] transform cursor-pointer items-center justify-center rounded-full border-2 border-white p-3 transition-all duration-500 ease-in-out hover:bg-secondary">
            <FaAngleRight className="text-[25px] text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
