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
    webcam: {
      position: {
        top: string;
        left: string;
      };
      src?: string;
    } | null;
  }[];
};
