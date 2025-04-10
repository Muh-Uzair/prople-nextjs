"use client";

import React from "react";
import Typography from "./Typography";

interface Props {
  type?: "primary" | "secondary" | "tertiary" | "danger";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, children, onClick = () => {} }) => {
  // VARS

  // FUNCTIONS

  // JSX
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer rounded-md bg-sky-500 px-[10px] py-[5px] font-[500] text-white transition-colors duration-200 ease-in-out outline-none active:bg-sky-600"
      >
        <Typography>{children}</Typography>
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button
        onClick={onClick}
        className="cursor-pointer rounded-md border-[1px] border-sky-500 bg-sky-50 px-[9px] py-[4px] font-[500] text-sky-500 transition-colors duration-200 ease-in-out outline-none active:bg-sky-100/90"
      >
        <Typography>{children}</Typography>
      </button>
    );
  }
};

export default Button;
