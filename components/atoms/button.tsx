import classNames from "libs/commons/classNames";
import { ButtonHTMLAttributes, Children } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  isFullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  color = "primary",
  size = "md",
  isFullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const colors = {
    primary: "bg-violet-400 text-white",
    secondary: "bg-white border-2 border-violet-400",
  };
  const sizes = {
    sm: "text-xs py-2 px-4",
    md: "text-sm py-3 px-5",
    lg: "text-md py-4 px-6",
    xl: "text-lg py-6 px-8",
  };
  return (
    <button
      className={classNames(
        "text-center rounded-md",
        colors[color],
        sizes[size],
        isFullWidth ? "w-full" : ""
      )}
      {...props}
    >
      {children}
    </button>
  );
}
