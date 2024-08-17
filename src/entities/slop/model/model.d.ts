export type Level =
  | 'BEGINNER'
  | 'UPPER_BEGINNER'
  | 'INTERMEDIATE'
  | 'UPPER_INTERMEDIATE'
  | 'ADVANCED'
  | 'EXPERT';

export type ResortInfo = {
  map: mapSrc;
  slops: {
    id: string;
    level: Level;
    name: string;
    Element: React.FC;
    isOpen: boolean;
    isDayOpen: boolean;
    isNightOpen: boolean;
    isLateNightOpen: boolean;

    webcam: {
      id: string;
      name: string;
      scale: number;
      position: {
        top: string;
        left: string;
      };
      src?: string;
    } | null;
  }[];
};
