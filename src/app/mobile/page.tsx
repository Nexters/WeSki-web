"use client";

import React from "react";

import Summary from "@/components/ui/main/summary";
import {cn} from "@/lib/utils";

const TabList = [
  {
    name: "곤지암리조트 스키장",
    weather: 24,
    temperature: 21,
    congestion: "다소 혼잡해요",
  },
  {
    name: "용평스키장 모나",
    weather: 21,
    temperature: 18,
    congestion: "원활해요",
  },
  {
    name: "휘닉스파크",
    weather: 26,
    temperature: 24,
    congestion: "혼잡해요",
  },
  {
    name: "비발디파크 소노벨",
    weather: 23,
    temperature: 19,
    congestion: "다소 혼잡해요",
  },
];

const Page = () => {
  const [selectedTab, setSelectedTab] = React.useState(TabList[0].name);
  return (
    <div className={cn("size-full")}>
      <div className={cn("w-full flex overflow-scroll scrollbar-hide mb-1")}>
        {TabList.map(tab => (
          <div
            key={tab.name}
            className={cn(
              "shrink-0 flex justify-center items-center font-bold p-2 pb-1 border-b-4 cursor-pointer",
              selectedTab === tab.name ? "border-black" : "border-white opacity-20"
            )}
            onClick={() => setSelectedTab(tab.name)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <Summary {...TabList.find(tab => tab.name === selectedTab)!} />
    </div>
  );
};

export default Page;
