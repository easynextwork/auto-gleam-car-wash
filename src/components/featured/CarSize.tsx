import Image from "next/image";
import { HorizontalAnimation } from "./Animations";
import { FC } from "react";
import { CarSizeProps } from "@/types";


const CarSize: FC<CarSizeProps> = ({ carType, title, image }) => {
  return (
    <>
      <HorizontalAnimation
        className={`cursor-pointer ${carType == title ? "border-b-4 border-secondary" : ""}`}
      >
        <div className="relative h-[100px] w-full">
          <Image
            src={image}
            alt="small car"
            fill={true}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </HorizontalAnimation>

      <p className="absolute mt-2 font-bold capitalize">{title}</p>
    </>
  );
};

export default CarSize;
