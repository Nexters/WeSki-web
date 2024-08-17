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
  id: string;
  level: Level;
  name: string;
  Element: React.FC;
  isOpen: boolean;
  isDayOpen: boolean;
  isNightOpen: boolean;
  isLateNightOpen: boolean;

  webcam: Webcam | null;
};
