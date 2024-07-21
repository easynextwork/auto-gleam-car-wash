"use client";
import React from "react";
import Heading from "./shared/widgets/Heading";
import Image from "next/image";
import { ButtonSecondary } from "./shared/widgets/Button";

const reviews = [
  {
    name: "John Smith",
    review:
      "The service was exceptional! My car has never looked this clean. Highly recommend this car wash.",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    review:
      "Quick and efficient. The staff were very friendly, and my car looks fantastic.",
    rating: 4,
  },
  {
    name: "Michael Williams",
    review:
      "Great value for money. The detailing was superb, and they paid attention to every little detail.",
    rating: 5,
  },
  {
    name: "Sarah Brown",
    review:
      "I was impressed with the quality of service. My car feels brand new again. Will definitely be coming back.",
    rating: 5,
  },
  {
    name: "David Lee",
    review:
      "Good service overall. My car was cleaned thoroughly, though it took a bit longer than expected.",
    rating: 4,
  },
];

const Booking = () => {
  return (
    <section id="booking">
      <div className="container py-20">
        <Heading title="Booking Your Seat" />

        <div className="mt-14 grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-20">
          <div className="order-2 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                What our customer say?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {reviews?.map((item, index) => (
                <div
                  className="relative h-fit w-full text-white"
                  key={index}
                >
                  <div className="absolute top-0 -z-40 h-full w-full bg-primary/70 backdrop-blur rounded-md"></div>
                  <Image
                    src="/images/stylish-car-2.webp"
                    alt="black car"
                    fill={true}
                    className="absolute top-0 -z-50 object-cover object-center rounded-md"
                  />

                  <p className="px-6 py-4">{item.review}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form */}
          <div className="relative order-1 col-span-3">
            <div className="absolute top-0 -z-40 h-full w-full bg-primary/70 backdrop-blur rounded-lg"></div>
            <Image
              src="/images/stylish-car-2.webp"
              alt="black car"
              fill={true}
              className="absolute top-0 -z-50 h-full w-full object-cover object-center rounded-lg"
            />

            <form action="#" className=" px-8 lg:px-14 py-12 text-black rounded-lg">
              <h5 className="capitalize text-white">
                Complete Your <span className="text-secondary">Submission</span>
                !
              </h5>

              <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="w-full rounded-md bg-slate-50 px-5 py-3"
                  />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="rounded-md w-full bg-slate-50 px-5 py-3"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="rounded-md w-full bg-slate-50 px-5 py-3"
                />
                <input
                  type="date"
                  placeholder="Select date"
                  className="rounded-md w-full bg-slate-50 px-5 py-3 placeholder:text-slate-500"
                />

                <textarea
                  placeholder="Message"
                  className="md:col-span-2 rounded-md bg-slate-50 px-5 py-3"
                  rows={6}
                ></textarea>
              </div>
              <div className="mt-12 flex justify-center">
                <ButtonSecondary>Book Now</ButtonSecondary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
