import React from "react";

export const ButtonSecondary = ({
  extraClasses,
  onClick,
  children,
}: {
  extraClasses?: string;
  onClick?: () => void;
  children: any;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border-none bg-secondary px-7 py-2 capitalize text-white outline-none transition-all duration-500 ease-in-out hover:bg-primary ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export const ButtonPrimary = ({
  extraClasses,
  onClick,
  children,
}: {
  extraClasses?: string;
  onClick?: () => void;
  children: any;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border-none bg-primary px-7 py-2 capitalize text-white outline-none transition-all duration-500 ease-in-out hover:bg-white hover:text-black ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export const ButtonTernary = ({
  extraClasses,
  onClick,
  children,
}: {
  extraClasses?: string;
  onClick?: () => void;
  children: any;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border-none bg-white px-7 py-2 capitalize text-black outline-none transition-all duration-500 ease-in-out hover:bg-black hover:text-white ${extraClasses}`}
    >
      {children}
    </button>
  );
};
