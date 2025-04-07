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
      <button className="bg-sky-500  px-[10px] py-[5px] rounded-md  active:bg-sky-700 cursor-pointer">
        <Typography>{children}</Typography>
      </button>
    );
  }
};

export default Button;
