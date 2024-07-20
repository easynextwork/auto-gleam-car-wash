import { Constants } from "@/utils/Constants";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import Heading from "./widgets/Heading";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    icon: (
      <FaFacebookF className="text-white transition-all duration-500 ease-in-out group-hover:text-secondary" />
    ),
    link: "https://facebook.com",
  },
  {
    icon: (
      <FaXTwitter className="text-white transition-all duration-500 ease-in-out group-hover:text-secondary" />
    ),
    link: "https://twitter.com",
  },
  {
    icon: (
      <FaLinkedinIn className="text-white transition-all duration-500 ease-in-out group-hover:text-secondary" />
    ),
    link: "https://linkedin.com",
  },
  {
    icon: (
      <FaInstagram className="text-white transition-all duration-500 ease-in-out group-hover:text-secondary" />
    ),
    link: "https://instagram.com",
  },
  {
    icon: (
      <FaYoutube className="text-white transition-all duration-500 ease-in-out group-hover:text-secondary" />
    ),
    link: "https://youtube.com",
  },
];

const Footer = async () => {
  return (
    <div className="wavy_shape relative pt-40 text-center text-white">
      <div className="absolute top-0 -z-40 h-full w-full bg-primary/70 backdrop-blur-lg"></div>
      <Image
        src="/images/stylish-car.avif"
        alt="black car"
        fill={true}
        className="absolute top-0 -z-50 h-full w-full object-cover object-center"
      />

      <div className="container grid grid-cols-1 gap-14 md:gap-20 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex justify-center pb-5">
            <Heading title="Address Info" extraClasses="text-2xl " />
          </div>
          <ul className="mt-5 text-center">
            <li className="mb-3">
              <span className="ml-1 italic">{Constants.phone}</span>
            </li>
            <li className="mb-3">
              <span className="ml-1 italic">{Constants.email}</span>
            </li>

            <li className="mb-3">
              <span className="ml-1 italic">
                202 Helga Springs Rd, Crawford, TN 38554
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex cursor-pointer items-center justify-center rounded-[20px] border border-secondary p-10 transition-all duration-500 ease-in-out hover:bg-primary">
            <div className="relative h-[50px] w-[140px]">
              <Image
                src={"/images/logo-white-slogan.png"}
                fill={true}
                alt="image"
                className=""
              />
            </div>
          </div>
          <ul className="mt-10 flex justify-center gap-5">
            {socialLinks?.map((item, index) => (
              <li className="group" key={index}>
                <Link href={item.link} target="_blank">
                  <p className="w-fit cursor-pointer rounded-full bg-secondary p-3 transition-all duration-500 ease-in-out group-hover:bg-white">
                    {item.icon}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-center pb-5">
            <Heading title="Business Hours" extraClasses="text-2xl " />
          </div>
          <ul>
            <li className="mb-3">
              <span className="font-semibold text-secondary">
                Monday - Friday:{" "}
              </span>
              <span className="font-thin italic">8:00 AM - 6:00 PM</span>
            </li>
            <li className="mb-3">
              <span className="font-semibold text-secondary">- Saturday: </span>
              <span className="font-thin italic">9:00 AM - 5:00 PM</span>
            </li>
            <li className="mb-3">
              <span className="font-semibold text-secondary">Sunday: </span>
              <span className="font-thin italic">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <hr
        className={`mb-1 mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70`}
      />

      <div className="py-5 text-center italic">
        © 2024 {Constants.companyName}, Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
