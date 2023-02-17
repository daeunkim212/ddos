import classNames from "libs/commons/classNames";

interface CardProps {
  size?: "sm" | "md" | "lg";
  isFullWidth?: boolean;
  isClickable?: boolean;
  flexDir?: "col" | "row";
  children: React.ReactNode;
}

export default function Card({
  size = "md",
  isFullWidth = true,
  isClickable = false,
  flexDir = "col",
  children,
}: CardProps) {
  const sizes = {
    "sm": "rounded-md h-12 py-2",
    "md": "rounded-md min-h-24 py-2",
    "lg": "rounded-lg min-h-48 py-2",
  };
  const flexDirection = {
    col: "flex-col",
    row: "flex-row",
  };
  return (
    <div
      className={classNames(
        "flex bg-white rounded-md",
        sizes[size],
        isFullWidth ? "w-full" : "w-fit",
        isClickable ? "hover:bg-gray-200 cursor-pointer" : "",
        flexDirection[flexDir]
      )}
    >
      {children}
    </div>
  );
}
