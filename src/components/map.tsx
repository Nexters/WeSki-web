import Image from "next/image";
import React from "react";
import konjiam from "@public/map/map-konjiam.jpg";
import CameraLabel from "./camera-button";
import {Popover, PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import {cn} from "@/lib/utils";

interface Spot {
  tag: string;
  name: string;
  top: number;
  left: number;
  isAvailable: boolean;
}

const SPOT_LIST: Spot[] = [
  {
    tag: "top",
    name: "정상 휴게소",
    top: 10,
    left: 0,
    isAvailable: true,
  },
  {
    tag: "top-slope",
    name: "정상부 슬로프",
    top: 60,
    left: 90,
    isAvailable: true,
  },
  {
    tag: "middle-slope",
    name: "중간 슬로프",
    top: 250,
    left: 280,
    isAvailable: false,
  },
  {
    tag: "beginner-base",
    name: "초중급 베이스",
    top: 380,
    left: 350,
    isAvailable: true,
  },
  {
    tag: "intermediate-base",
    name: "중상급 베이스",
    top: 480,
    left: 260,
    isAvailable: true,
  },
];

const Map = () => {
  const [loadingStates, setLoadingStates] = React.useState(
    SPOT_LIST.reduce((acc: Record<string, boolean>, spot: Spot) => {
      acc[spot.tag] = true;
      return acc;
    }, {})
  );

  const handleLoadedData = (tag: string) => {
    setLoadingStates(prevState => ({...prevState, [tag]: false}));
  };

  return (
    <div className="w-[666px] h-[629px] relative">
      <Image src={konjiam} alt="map-konjiam" />
      {SPOT_LIST.map(spot => (
        <Popover key={spot.tag}>
          <PopoverTrigger
            onClick={e => {
              if (!spot.isAvailable) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            className={cn("absolute", !spot.isAvailable && "cursor-not-allowed")}
            style={{top: spot.top, left: spot.left}}
          >
            <CameraLabel name={spot.name} disabled={!spot.isAvailable} />
          </PopoverTrigger>
          <PopoverContent
            className={cn("flex justify-center items-center z-10 bg-black rounded-2xl p-5 m-2 w-80 h-[200px]")}
          >
            {loadingStates[spot.tag] && (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              </div>
            )}
            <video
              src={`/video/${spot.tag}.mov`}
              muted
              autoPlay
              loop
              onLoadedData={() => handleLoadedData(spot.tag)}
              style={{display: loadingStates[spot.tag] ? "none" : "block"}}
            />
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
};

export default Map;
