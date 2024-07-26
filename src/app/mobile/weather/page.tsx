import CloudIcon from "@/components/icons/cloud";
import SunIcon from "@/components/icons/sun";
import { cn } from "@/lib/utils";

const WEATHER_DATA = [
  {
    time: "오전 8시",
    icon: <SunIcon />,
    temperature: "22°",
    humidity: "20%",
  },
  {
    time: "오전 11시",
    icon: <CloudIcon />,
    temperature: "24°",
    humidity: "30%",
  },
  {
    time: "오후 2시",
    icon: <SunIcon />,
    temperature: "26°",
    humidity: "40%",
  },
  {
    time: "오후 5시",
    icon: <CloudIcon />,
    temperature: "25°",
    humidity: "30%",
  },
];

const Page = () => {
  return (
    <div
      className={cn("flex flex-col gap-3 items-center overflow-auto h-[650px]")}
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <WeatherCard key={index} />
      ))}
    </div>
  );
};

export default Page;

const WeatherCard = () => {
  return (
    <div className={cn("rounded-lg w-[335px] h-[461px] bg-gray-100 p-6 ")}>
      <div className={cn("flex justify-between items-center mb-[130px]")}>
        <h4 className={cn(" font-bold")}>하이원 스키장</h4>
        <div className={cn("text-sm font-bold rounded-lg bg-white px-3 py-1")}>
          설질 GOOD 56%
        </div>
      </div>

      <p className={cn(" text-4xl font-semibold")}>25°</p>
      <p className={cn(" text-sm text-gray-600 mb-4")}>흐리고 비</p>

      <p className={cn("text-lg font-semibold")}>
        흐리고 비오는 날씨가 계속 돼요
      </p>
      <p className={cn("text-sm mb-4")}>최고:28° 최저 24° 미세먼지 좋음</p>

      <hr className={cn("mb-4")} />

      <ul className={cn("flex gap-5")}>
        {WEATHER_DATA.map((data) => (
          <li key={data.time} className={cn("flex items-center flex-col")}>
            <div className={cn(" text-sm font-medium mb-1")}>{data.time}</div>
            {data.icon}
            <p className={cn("mt-1")}>{data.temperature}</p>
            <p className={cn("text-xs")}>{data.humidity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
