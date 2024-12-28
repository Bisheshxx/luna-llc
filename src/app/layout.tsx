import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navigation/Header";
import { PageBreadCrumb } from "@/components/page-bread-crumb";

import Providers from "@/HOC/Providers";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300"], // Add weights as needed
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
      <body className={`${roboto.variable} antialiased light `}>
        <Providers>
          <div className="flex flex-col min-h-screen ">
            <NavBar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
