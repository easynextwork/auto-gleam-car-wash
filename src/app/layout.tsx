import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/shared/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto Gleam",
  description: "Auto Gleam provide car wash services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <Sidebar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
