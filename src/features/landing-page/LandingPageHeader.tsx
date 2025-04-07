import Button from "@/ui/Button";
import PropleWrittenLogo from "@/ui/PropleWrittenLogo";
import React from "react";

const LandingPageHeader: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <header className="h-[50px] px-[10px] bg-stone-50 border-b-[0.5px] border-sky-200 flex justify-between items-center">
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
