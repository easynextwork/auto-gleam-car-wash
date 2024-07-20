import { FeatureListItemProps } from "@/types";
import { FC } from "react";

const FeatureListItem: FC<FeatureListItemProps> = ({
  item,
  features,
  setFeatures,
}) => (
  <li className="relative mb-7 min-w-full" onClick={() => setFeatures(item)}>
    <div className="absolute top-0 -z-40 h-full w-full rounded-sm bg-primary/90 backdrop-blur"></div>

    <p
      className={`shape_1 flex h-[60px] cursor-pointer items-center justify-center bg-secondary/20 px-5 text-center text-base font-bold text-red-500 transition-all duration-500 ease-in-out hover:bg-secondary hover:text-white ${features.name === item.name ? "!bg-secondary !text-white" : ""}`}
    >
      {item.name}
    </p>
  </li>
);

export default FeatureListItem;
