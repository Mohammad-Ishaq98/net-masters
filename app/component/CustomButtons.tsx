import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButtons = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  children,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1`}>{title}</span>
        {children && <span>{children}</span>}
      </button>
    </div>
  );
};

export default CustomButtons;
