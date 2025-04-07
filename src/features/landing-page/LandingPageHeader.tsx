import Button from "@/ui/Button";
import PropleWrittenLogo from "@/ui/PropleWrittenLogo";
import React from "react";

const LandingPageHeader: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <header className="flex h-[50px] items-center justify-between border-b-[0.5px] border-sky-200 bg-stone-50 px-[10px]">
      <div>
        <PropleWrittenLogo />
      </div>
      <div className="flex gap-[10px]">
        <div>
          <Button type="primary">Sign in</Button>
        </div>
        <div>sign up</div>
      </div>
    </header>
  );
};

export default LandingPageHeader;
