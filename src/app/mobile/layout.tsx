import NavBar from "@/components/ui/nav-bar";
import StatusBar from "@/components/ui/status-bar";
import {cn} from "@/lib/utils";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className={cn("w-screen h-screen bg-gray-200 flex justify-center items-center")}>
      <div className={cn("relative w-[376px] h-[814px] bg-white")}>
        <StatusBar />
        <div className={cn("h-12 flex justify-center items-center font-bold text-2xl")}>WeSki</div>
        {children}
        <NavBar className={cn("absolute bottom-0 z-10")} />
      </div>
    </div>
  );
}
