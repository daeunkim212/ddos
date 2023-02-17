import classNames from "libs/commons/classNames";

interface LayoutProps {
  type: "header" | "body" | "footer" | "nav";
  bgColor?: "white" | "gray";
  children: React.ReactNode;
}

export default function Layout({
  type,
  bgColor = "white",
  children,
}: LayoutProps) {
  const layoutTypes = {
    header:
      "absolute top-0 w-full z-50 bg-white h-12 px-4 justify-between flex items-center",
    body: "z-0 h-screen px-8 pt-12 pb-24 space-y-2 overflow-y-auto flex flex-col",
    footer: "",
    nav: "absolute bottom-0 w-full z-50",
  };
  const bgColors = {
    white: "bg-white",
    gray: "bg-gray-100",
  };
  return (
    <div className={classNames(layoutTypes[type], bgColors[bgColor])}>
      {children}
    </div>
  );
}
