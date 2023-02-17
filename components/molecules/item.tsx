import Card from "components/atoms/card";
import Logo from "components/atoms/logo";
import classNames from "libs/commons/classNames";

interface ItemProps {
  children: React.ReactNode;
}

export default function Item({ children }: ItemProps) {
  return (
    <Card size="md" isClickable={true} flexDir="row">
      <div className="flex justify-between w-full">{children}</div>
    </Card>
  );
}

interface LeftProps {
  logo?: any;
  children: React.ReactNode;
}
function Left({ logo, children }: LeftProps) {
  return (
    <div className={logo ? "flex space-x-2" : ""}>
      {logo ? (
        <Logo shape="circle" size="xl">
          {logo}
        </Logo>
      ) : null}
      <div>{children}</div>
    </div>
  );
}

interface RightProps {
  hasArrow?: boolean;
  children?: React.ReactNode;
}
function Right({ hasArrow = false, children }: RightProps) {
  return (
    <div className={classNames("flex", hasArrow ? "space-x-2" : "")}>
      {children}
      {hasArrow ? (
        <div className="self-center text-gray-300 place-self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
}

Item.Left = Left;
Item.Right = Right;
