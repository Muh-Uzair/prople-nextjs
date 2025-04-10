"use client";
import Button from "@/ui/Button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn-ui/dialog";

const AuthSection: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div>
      <div className="flex gap-[10px]">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="primary">Sign in</Button>
            </DialogTrigger>
            <DialogContent>
              {" "}
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div>
                <button
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  Hello
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <Button type="secondary">Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
