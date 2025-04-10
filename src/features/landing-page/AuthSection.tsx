import Button from "@/ui/Button";
import React from "react";

const AuthSection: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div>
      <div className="flex gap-[10px]">
        <div>
          <Button type="primary">Sign in</Button>
        </div>
        <div>
          <Button type="secondary">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
