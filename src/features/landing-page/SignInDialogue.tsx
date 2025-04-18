"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn-ui/dialog";
import GoogleSignIn from "./GoogleSignIn";
import { Button } from "@/ui/shadcn-ui/button";
import { Label } from "@/ui/shadcn-ui/label";
import { Input } from "@/ui/shadcn-ui/input";

const SignInDialogue = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Let&#39;s Get You Signed In</DialogTitle>
          <DialogDescription>
            Sign in using your Property Id or sign in with Google — whatever’s
            easier!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-rows-2 gap-[10px]">
          <div>
            <Label>Property Id</Label>
            <Input type="text" className="w-[100%] border-[1px]" />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="text" className="w-[100%] border-[1px]" />
          </div>
        </div>
        <DialogFooter>
          <div className="grid w-full grid-rows-2 gap-[10px]">
            <div>
              <Button className="w-full">Sign in with Property Id</Button>
            </div>
            <div>
              <GoogleSignIn />
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialogue;
