"use client";

import Image from "next/image";
import React from "react";

import Summary from "@/components/ui/main/summary";
import {cn} from "@/lib/utils";

import {ResortList, Spot} from "./data";

const Page = () => {
  const [selectedTab, setSelectedTab] = React.useState(ResortList[0]);
  const [selectedSpot, setSelectedSpot] = React.useState<Spot | null>(null);
  return (
    <div className={cn("size-full")}>
      <div className={cn("w-full flex overflow-scroll scrollbar-hide mb-1")}>
        {ResortList.map(tab => (
          <div
            key={tab.name}
            className={cn(
              "shrink-0 flex justify-center items-center font-bold p-3 pb-2 border-b-4 cursor-pointer",
              selectedTab.name === tab.name ? "border-black" : "border-white opacity-20"
            )}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <Summary {...ResortList.find(tab => tab.name === selectedTab.name)!} />
      <div className={cn("relative w-full h-[200px] overflow-hidden")}>
        <Image
          className={cn("object-cover")}
          width={376}
          height={200}
          src={`/map/${selectedTab.tag}.jpg`}
          alt={`${selectedTab.name}`}
        />
        {selectedSpot && (
          <div className={cn("absolute top-0 left-0 size-full")}>
            <video src={`/video/${selectedTab.tag}/${selectedSpot.tag}.mov`} muted autoPlay loop />
          </div>
        )}
      </div>
      <div className={cn("h-[296px] flex flex-col gap-0.5 overflow-scroll scrollbar-hide")}>
        {selectedTab.spots?.map(spot => (
          <div
            key={spot.name}
            className={cn(
              "w-full h-20 bg-gray-100 flex justify-between items-center p-6 font-bold",
              spot.isAvailable ? "cursor-pointer" : "opacity-20 cursor-not-allowed"
            )}
            onClick={() => {
              spot.isAvailable && setSelectedSpot(spot);
            }}
          >
            <p className={cn("text-lg")}>{spot.name}</p>
            <div className={cn("flex gap-3 items-center")}>
              <p className={cn("text-sm")}>{spot.level}</p>
              <p className={cn("text-lg")}>헤라1,2</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
