import {cn} from "@/lib/utils";

import BatteryIcon from "../icons/battery";
import WifiIcon from "../icons/wifi";

const StatusBar = () => {
  return (
    <div className={cn("flex pl-6 pr-4 w-full h-11 justify-between items-center")}>
      <p className={cn("font-bold")}>12:22</p>
      <div className={cn("flex items-center gap-2")}>
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
};

export default StatusBar;
