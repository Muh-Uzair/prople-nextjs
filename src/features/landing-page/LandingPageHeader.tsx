import PropleWrittenLogo from "@/ui/PropleWrittenLogo";
import React from "react";
import AuthSection from "./AuthSection";

const LandingPageHeader = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <header className="flex h-[50px] items-center justify-between border-b-[0.5px] border-sky-200 bg-stone-50 px-[10px]">
      <PropleWrittenLogo />
      <AuthSection />
    </header>
  );
};

export default LandingPageHeader;
