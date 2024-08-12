import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import mapSrc from '../image/jisan/map.png';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7LiftPath from '../image/jisan/silver7-lift-path';
import type { ResortInfo } from './model';

export const JISAN: ResortInfo = {
  map: mapSrc,
  slops: [
    {
      id: 'lemon1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1',
      Element: Lemon1LiftPath,
      webcam: null,
      isOpen: false,
    },
    {
      id: 'lemon1-1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1-1',
      Element: Lemon1Sub1LiftPath,
      webcam: null,
      isOpen: false,
    },
    {
      id: 'orange2-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 2',
      Element: Orange2LiftPath,
      webcam: {
        position: {
          top: 'top-[69%]',
          left: 'left-[29%]',
        },
      },
      isOpen: true,
    },
    {
      id: 'orange3-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 3',
      Element: Orange3LiftPath,
      webcam: {
        position: {
          top: 'top-[64%]',
          left: 'left-[38%]',
        },
      },
      isOpen: true,
    },
    {
      id: 'new-orange-lift',
      level: 'ADVANCED',
      name: '뉴오렌지 리프트',
      Element: NewOrangeLiftPath,
      webcam: null,
      isOpen: false,
    },
    {
      id: 'blue-lift',
      level: 'ADVANCED',
      name: '블루 리프트 5',
      Element: BlueLiftPath,
      webcam: {
        position: {
          top: 'top-[69%]',
          left: 'left-[56%]',
        },
      },
      isOpen: true,
    },
    {
      id: 'silver6-lift',
      level: 'EXPERT',
      name: '실버 리프트 6',
      Element: Silver6LiftPath,
      webcam: null,
      isOpen: false,
    },
    {
      id: 'silver7-lift',
      level: 'UPPER_INTERMEDIATE',
      name: '실버 리프트 7',
      Element: Silver7LiftPath,
      webcam: null,
      isOpen: false,
    },
  ],
};
