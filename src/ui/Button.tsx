import React from "react";
import Typography from "./Typography";

interface Props {
  type?: "primary" | "secondary" | "tertiary" | "danger";
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type, children }) => {
  // VARS

  // FUNCTIONS

  // JSX
  if (type === "primary") {
    return (
      <button className="cursor-pointer rounded-md bg-sky-500 px-[10px] py-[5px] font-semibold text-white transition-colors duration-200 ease-in-out outline-none active:bg-sky-600">
        <Typography>{children}</Typography>
      </button>
    );
  }
};

export default Button;
