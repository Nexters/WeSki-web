export type Level =
  | '초급'
  | '초중급'
  | '중급'
  | '중상급'
  | '상급'
  | '최상급';

export type Slope = {
  name: string,
  difficulty: Level,
  isDayOperating: true,
  isNightOperating: true,
  isLateNightOperating: true,
  isDawnOperating: true,
  isMidnightOperating: true
}

export type Webcam = {
  name: string,
  number: 0,
  description: string,
  url: string
}

export type SlopeResponse = {
  dayOperatingHours: string,
  nightOperatingHours: string,
  lateNightOperatingHours: string,
  dawnOperatingHours: string,
  midnightOperatingHours: string,
  slopes: Slope[],
  webcams: Webcam[]
}