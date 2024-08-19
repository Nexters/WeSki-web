import type { RESORT_DOMAIN } from '.';

export type Level =
  | 'BEGINNER'
  | 'UPPER_BEGINNER'
  | 'INTERMEDIATE'
  | 'UPPER_INTERMEDIATE'
  | 'ADVANCED'
  | 'EXPERT';

export type ResortInfo = {
  MapComponent: ComponentType;
  slops: Slop[];
  webcams: Webcam[];
};

export type Webcam = {
  id: string;
  name: string;
  scale: number;
  position: {
    top: string;
    left: string;
  };
  src?: string;
};

export type Slop = {
  id: keyof typeof RESORT_DOMAIN;
  level: Level;
  name: string;
  Element: React.FC;
  webcamId?: string;
  isOpen: boolean;
};

export type Position = {
  x: number;
  y: number;
};
