"use client"
import { useEffect, useState } from "react";

export function useLoading(
  initialLoading: boolean = true,
  delay: number = 2000,
) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading;
}
