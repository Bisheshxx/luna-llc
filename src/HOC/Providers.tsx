"use client";
import React, { Suspense } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/nextjs";

interface IProps {
  children: React.ReactElement;
}

const Providers = ({ children }: IProps) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  return (
    <Suspense fallback={<>Loading...</>}>
      <ClerkProvider>
        <ConvexProvider client={convex}>{children}</ConvexProvider>
      </ClerkProvider>
    </Suspense>
  );
};

export default Providers;
