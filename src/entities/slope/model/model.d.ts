export type Slope = {
  name: string,
  difficulty: string,
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