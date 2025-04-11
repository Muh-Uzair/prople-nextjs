"use client";
import Button from "@/ui/Button";
import React from "react";
import SignInDialogue from "./SignInDialogue";

import { useSession } from "next-auth/react";
import Image from "next/image";

// landing-auth

const AuthSection = () => {
  // VARS
  const { data: session } = useSession();

  // FUNCTIONS

  // JSX

  // if the user have already logged in so show its avatar etc
  if (session?.user) {
    const userImageUrl = session.user?.image;

    return (
      <div className="tab:flex items-center gap-[10px]">
        <Image
          src={userImageUrl as string}
          alt="user image"
          height={30}
          width={30}
          className="rounded-full border-[3px] border-gray-300"
        />
      </div>
    );
  }

  // if user is not logged in then show the sign in and sign up buttons
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
