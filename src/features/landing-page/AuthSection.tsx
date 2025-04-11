"use client";
import Button from "@/ui/Button";
import React from "react";
import SignInDialogue from "./SignInDialogue";

// landing-auth

const AuthSection = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div>
      <div className="flex gap-[10px]">
        <div>
          <SignInDialogue />
        </div>
        <div>
          <Button variant="secondary">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
