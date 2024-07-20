import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IAnimation } from "@/types";

// Utility function to get the appropriate initial x value based on screen size
const getResponsiveXValue = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768 ? -50 : -180; // Example breakpoint: 768px
  }
  return -180; // Default value for server-side rendering
};

const VerticalVariants = {
  initial: { opacity: 0, y: -150 },
  inView: { opacity: 1, y: 0 },
};

const transition = { ease: "easeOut", duration: 1.3 };
const viewport = { once: true, amount: 0 };

export const VerticalAnimation: FC<IAnimation> = ({ children, className }) => (
  <motion.div
    initial="initial"
    whileInView="inView"
    variants={VerticalVariants}
    transition={transition}
    viewport={viewport}
    className={className}
  >
    {children}
  </motion.div>
);

export const HorizontalAnimation: FC<IAnimation> = ({
  children,
  className,
}) => {
  const [xValue, setXValue] = useState(getResponsiveXValue());

  useEffect(() => {
    const handleResize = () => {
      setXValue(getResponsiveXValue());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const HorizontalVariants = {
    initial: { opacity: 0, x: xValue },
    inView: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="inView"
      variants={HorizontalVariants}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};
