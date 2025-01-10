import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation/Header";

import Providers from "@/HOC/Providers";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "700"], // Add weights as needed
  variable: "--font-roboto", // Optional CSS variable name
});

export const metadata: Metadata = {
  title: "Luna",
  description: "Online E-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${roboto.className} antialiased light `}>
        <Providers>
          <div className="flex flex-col min-h-screen ">
            <NavBar />
            {children}
            <Footer />
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
