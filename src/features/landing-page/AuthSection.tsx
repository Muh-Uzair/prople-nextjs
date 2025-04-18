"use client";
import React from "react";
import SignInDialogue from "./SignInDialogue";
import Image from "next/image";

import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn-ui/dialog";
import { signOut } from "next-auth/react";
import { Button } from "@/ui/shadcn-ui/button";

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
      <Dialog>
        <DialogTrigger asChild>
          <div className="tab:flex cursor-pointer items-center gap-[10px]">
            <Image
              src={userImageUrl as string}
              alt="user image"
              height={30}
              width={30}
              className="rounded-full border-[3px] border-gray-300"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">Hello</div>
          </div>
          <DialogFooter>
            <Button
              className="w-full"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Sign out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
          <Button variant="outline">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;

// updated shadcn
