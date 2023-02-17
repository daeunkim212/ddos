import classNames from "libs/commons/classNames";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  url: string;
}

export default function NavBar({ url }: NavBarProps) {
  return (
    <div className="flex justify-between w-full px-6 pt-1 pb-4 bg-white border border-gray-200 rounded-t-lg">
      <Link
        className={classNames(
          "px-4 py-1 text-center rounded-lg hover:bg-gray-200",
          url === "/"
            ? "text-gray-900 via-gray-900"
            : "text-gray-400 via-gray-400"
        )}
        href={"/"}
      >
        <Image src="/home.svg" alt="홈" width={24} height={24} />
        <span className="text-xs">홈</span>
      </Link>
      <Link
        className={classNames(
          "px-4 py-1 text-center rounded-lg hover:bg-gray-200",
          url === "/benefits"
            ? "text-gray-900 via-gray-900"
            : "text-gray-400 via-gray-400"
        )}
        href={"/benefits"}
      >
        <Image src="/benefit.svg" alt="혜택" width={24} height={24} />
        <span className="text-xs">혜택</span>
      </Link>
      <Link
        className={classNames(
          "px-4 py-1 text-center rounded-lg hover:bg-gray-200",
          url === "/remits"
            ? "text-gray-900 via-gray-900"
            : "text-gray-400 via-gray-400"
        )}
        href={"/remits"}
      >
        <Image src="/remit.svg" alt="송금" width={24} height={24} />
        <span className="text-xs">송금</span>
      </Link>
      <Link
        className={classNames(
          "px-4 py-1 text-center rounded-lg hover:bg-gray-200",
          url === "/stocks"
            ? "text-gray-900 via-gray-900"
            : "text-gray-400 via-gray-400"
        )}
        href={"/stocks"}
      >
        <Image src="/stock.svg" alt="주식" width={24} height={24} />
        <span className="text-xs">주식</span>
      </Link>
      <Link
        className={classNames(
          "px-4 py-1 text-center rounded-lg hover:bg-gray-200",
          url === "/alls"
            ? "text-gray-900 via-gray-900"
            : "text-gray-400 via-gray-400"
        )}
        href={"/alls"}
      >
        <Image src="/all.svg" alt="전체" width={24} height={24} />
        <span className="text-xs">전체</span>
      </Link>
    </div>
  );
}
