import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import mapSrc from '../image/jisan/map.png';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7Liftpath from '../image/jisan/silver7-lift-path';

export const JISAN = {
  map: mapSrc,
  slops: [
    {
      id: 'lemon1-lift',
      level: 'BEGINNER' as const,
      Element: Lemon1LiftPath,
      webcam: null,
    },
    {
      id: 'lemon1-1-lift',
      level: 'BEGINNER' as const,
      Element: Lemon1Sub1LiftPath,
      webcam: null,
    },
    {
      id: 'orange2-lift',
      level: 'INTERMEDIATE' as const,
      Element: Orange2LiftPath,
      webcam: null,
    },
    {
      id: 'orange3-lift',
      level: 'INTERMEDIATE' as const,
      Element: Orange3LiftPath,
      webcam: null,
    },
    {
      id: 'new-orange-lift',
      level: 'ADVANCED' as const,
      Element: NewOrangeLiftPath,
      webcam: null,
    },
    {
      id: 'blue-lift',
      level: 'ADVANCED' as const,
      Element: BlueLiftPath,
      webcam: null,
    },
    {
      id: 'silver6-lift',
      level: 'EXPERT' as const,
      Element: Silver6LiftPath,
      webcam: null,
    },
    {
      id: 'silver7-lift',
      level: 'UPPER_INTERMEDIATE' as const,
      Element: Silver7Liftpath,
      webcam: null,
    },
  ],
};
