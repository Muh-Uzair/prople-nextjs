import React from "react";

interface Props {
  children: React.ReactNode;
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
}

const Typography: React.FC<Props> = ({ children, size = "medium" }) => {
  if (size === "extraSmall") {
    return (
      <p className="tab:text-[13px] laptopM:text-[14px] text-[12px]">
        {children}
      </p>
    );
  }

  if (size === "small") {
    return (
      <p className="tab:text-[15px] laptopM:text-[16px] text-[14px]">
        {children}
      </p>
    );
  }

  if (size === "medium") {
    return (
      <p className="tab:text-[17px] laptopM:text-[18px] text-[16px]">
        {children}
      </p>
    );
  }

  if (size === "large") {
    return (
      <p className="tab:text-[19px] laptopM:text-[20px] text-[18px]">
        {children}
      </p>
    );
  }
  if (size === "extraLarge") {
    return (
      <p className="tab:text-[22px] laptopM:text-[24px] text-[20px]">
        {children}
      </p>
    );
  }
};

export default Typography;
