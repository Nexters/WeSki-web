export type Level = '초급' | '초중급' | '중급' | '중상급' | '상급' | '최상급' | '파크' | '익스트림';

export type SlopeRaw = {
  slopeId: number;
  name: string;
  difficulty: Level;
  isDayOperating: boolean;
  isNightOperating: boolean;
  isLateNightOperating: boolean;
  isDawnOperating: boolean;
  isMidnightOperating: boolean;
  webcamNo: number;
};

export type WebcamRaw = {
  name: string;
  number: number;
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
  key?: string;
  scale: number;
  position: {
    top: string;
    left: string;
  };
};

export type SlopeConstant = {
  id: number;
  PathAsset: ComponentType<{
    color?: string;
  }>;
};

export type Position = {
  x: number;
  y: number;
};

export type Slope = SlopeRaw & SlopeConstant;
export type Webcam = WebcamRaw & WebcamConstant;
