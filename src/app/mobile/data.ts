interface Resort {
  name: string;
  tag?: string;
  weather: number;
  temperature: number;
  congestion: string;
  spots?: Spot[];
}

export interface Spot {
  tag: string;
  name: string;
  level: string;
  isAvailable: boolean;
}

export const ResortList: Resort[] = [
  {
    name: "곤지암리조트 스키장",
    tag: "konjiam",
    weather: 24,
    temperature: 21,
    congestion: "다소 혼잡해요",
    spots: [
      {
        tag: "top",
        name: "정상 휴게소",
        level: "중급",
        isAvailable: true,
      },
      {
        tag: "top-slope",
        name: "정상부 슬로프",
        level: "상급",
        isAvailable: true,
      },
      {
        tag: "middle-slope",
        name: "중간 슬로프",
        level: "중급",
        isAvailable: false,
      },
      {
        tag: "beginner-base",
        name: "초중급 베이스",
        level: "초급",
        isAvailable: true,
      },
      {
        tag: "intermediate-base",
        name: "중상급 베이스",
        level: "중급",
        isAvailable: true,
      },
    ],
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
