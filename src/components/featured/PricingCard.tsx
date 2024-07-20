import { FC } from "react";
import { FaDollarSign } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { ButtonTernary } from "../shared/widgets/Button";
import Link from "next/link";

interface PricingCardProps {
  plan: string;
  price: number;
  options: object[];
}

const PricingCard: FC<PricingCardProps> = ({ plan, price, options }) => {
  return (
    <div className="flex flex-col items-center px-4 py-12 shadow-sm">
      <div className="w-fit">
        <p className="font-semibold uppercase text-secondary">{plan}</p>
        <hr
          className={`my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-70`}
        />
      </div>
      <div className="mt-5 flex items-start gap-1 font-bold">
        <FaDollarSign className="text-[20px]" />
        <p className="text-[45px]">{price}</p>
        <p>.99</p>
      </div>

      <ul className="mt-5 flex flex-col justify-center gap-5">
        {options.map((item: any, index: number) => (
          <li className="flex items-center gap-2" key={index}>
            {item.status == true ? (
              <TiTick className="text-[20px] text-secondary" />
            ) : (
              <RxCross2 className="text-[20px] text-slate-600" />
            )}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link href="#booking">
          <ButtonTernary>Book Now</ButtonTernary>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
