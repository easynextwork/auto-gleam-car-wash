"use client";
import AboutUs from "@/components/AboutUs";
import Booking from "@/components/Booking";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { LoadingSpinner } from "@/components/shared/Loading";
import { useLoading } from "@/hooks/useLoading";

export default function Home() {
  const isLoading = useLoading();

  if (isLoading) return <LoadingSpinner />

  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <WhyChooseUs />
      <Booking />
    </main>
  );
}
