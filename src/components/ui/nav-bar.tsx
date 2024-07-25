"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

const TabList = [
  {
    name: "날씨",
    url: "/mobile/weather",
  },
  {
    name: "웹캠",
    url: "/mobile",
  },
  {
    name: "혼잡도",
    url: "/mobile/congestion",
  },
];

const NavBar = ({className}: {className?: string}) => {
  const pathname = usePathname();
  return (
    <nav className={cn("w-full h-[62px] bg-white", className)}>
      <ul className={cn("flex justify-evenly size-full")}>
        {TabList.map(tab => (
          <li
            key={tab.name}
            className={cn(
              "flex-1 flex justify-center items-center font-bold text-sm",
              pathname !== tab.url && "opacity-20"
            )}
          >
            <Link href={tab.url}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
