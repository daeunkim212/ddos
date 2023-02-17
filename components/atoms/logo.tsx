import classNames from "libs/commons/classNames";

interface LogoProps {
  shape?: "circle" | "square";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  isClickable?: boolean;
  children: React.ReactNode;
}

export default function Logo({
  shape = "circle",
  size = "2xl",
  isClickable = false,
  children,
}: LogoProps) {
  const shapes = {
    circle: "rounded-full",
    square: "rounded-sm",
  };
  const sizes = {
    "sm": "w-4 h-4",
    "md": "w-6 h-6",
    "lg": "w-8 h-8",
    "xl": "w-12 h-12",
    "2xl": "w-14 h-14",
    "3xl": "w-16 h-16"
  };
  return (
    <div
      className={classNames(
        "bg-gray-100",
        shapes[shape],
        sizes[size],
        isClickable ? "hover:bg-gray-200 cursor-pointer" : ""
      )}
    >
      {children}
    </div>
  );
}
