import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";
import useCursor from "../hooks/useCursor";

export interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  label,
  ...props
}) => {
  const { handleHoverStart, handleHoverEnd } = useCursor();

  return (
    <button
      {...props}
      className={clsx("button", props.className)}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {label}
    </button>
  );
};

export default Button;
