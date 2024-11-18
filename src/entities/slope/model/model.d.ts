export type Level = '초급' | '초중급' | '중급' | '중상급' | '상급' | '최상급' | '파크';

export type SlopeRaw = {
  id: number;
  name: string;
  difficulty: Level;
  isDayOperating: true;
  isNightOperating: true;
  isLateNightOperating: true;
  isDawnOperating: true;
  isMidnightOperating: true;
};

export type WebcamRaw = {
  name: string;
  number: 0;
  description: string;
  url: string;
};

export type SlopeResponse = {
  dayOperatingHours: string;
  nightOperatingHours: string;
  lateNightOperatingHours: string;
  dawnOperatingHours: string;
  midnightOperatingHours: string;
  slopes: SlopeRaw[];
  webcams: WebcamRaw[];
};

export type ResortConstant = {
  MapComponent: ComponentType | StaticImageData;
  slopes: SlopeConstant[];
  webcams: WebcamConstant[];
};

export type WebcamConstant = {
  id: number;
  scale: number;
  position: {
    top: string;
    left: string;
  };
};

export type SlopeConstant = {
  id: number | string;
  PathAsset: ComponentType<{
    color?: string;
  }>;
  webcam?: number;
};

export type Position = {
  x: number;
  y: number;
};

export type Slope = SlopeRaw & SlopeConstant;
export type Webcam = WebcamRaw & WebcamConstant;
