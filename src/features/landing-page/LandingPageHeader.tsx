"use client";

import PropleWrittenLogo from "@/ui/PropleWrittenLogo";
import React from "react";
import AuthSection from "./AuthSection";

import { SessionProvider } from "next-auth/react";

const LandingPageHeader = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <SessionProvider>
      <header className="flex h-[50px] items-center justify-between border-b-[0.5px] border-sky-200 bg-stone-50 px-[10px]">
        <PropleWrittenLogo />
        <AuthSection />
      </header>
    </SessionProvider>
  );
};

export default LandingPageHeader;
