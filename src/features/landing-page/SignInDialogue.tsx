"use client"
import React from "react";
import Button from "@/ui/Button";

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

const SignInDialogue = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">Sign in</Button>
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
            <label>Property Id</label> <br />
            <input type="text" className="w-[100%] border-[1px]" />
          </div>

          <div>
            <label>Property Id</label> <br />
            <input type="password" className="w-[100%] border-[1px]" />
          </div>
        </div>
        <DialogFooter>
          <div className="grid w-full grid-rows-2 gap-[10px]">
            <div>
              <Button fullWidth={true}>Sign in with Property Id</Button>
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
