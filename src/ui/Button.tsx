"use client";

import React from "react";
import Typography from "./Typography";

interface Props {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  submit?: boolean;
}

const Button: React.FC<Props> = ({
  variant = "primary",
  children,
  onClick = () => {},
  fullWidth = false,
  submit = false,
}) => {
  // VARS

  // FUNCTIONS

  // JSX
  if (variant === "primary") {
    return (
      <button
        type={submit ? "submit" : undefined}
        onClick={onClick}
        className={
          "flex cursor-pointer items-center justify-center rounded-md bg-sky-500 px-[10px] py-[5px] font-[500] text-white transition-colors duration-200 ease-in-out outline-none active:bg-sky-600" +
          (fullWidth ? " w-full" : "")
        }
      >
        <Typography>{children}</Typography>
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className={
          "flex cursor-pointer items-center justify-center rounded-md border-[1px] border-sky-500 bg-sky-50 px-[9px] py-[4px] font-[500] text-sky-500 transition-colors duration-200 ease-in-out outline-none active:bg-sky-100/90" +
          (fullWidth ? " w-full" : "")
        }
      >
        <Typography>{children}</Typography>
      </button>
    );
  }
};

export default Button;
