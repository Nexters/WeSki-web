'use client';

import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import MapImage from '../image/jisan/map';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7LiftPath from '../image/jisan/silver7-lift-path';
import type { ResortInfo } from './model';

export const JISAN: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'lemon1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1',
      Element: Lemon1LiftPath,
      webcamId: 'lemon-station',
      isOpen: true,
    },
    {
      id: 'lemon1-1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1-1',
      Element: Lemon1Sub1LiftPath,
      isOpen: false,
    },
    {
      id: 'orange2-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 2',
      Element: Orange2LiftPath,
      webcamId: 'orange-station',
      isOpen: true,
    },
    {
      id: 'orange3-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 3',
      Element: Orange3LiftPath,
      webcamId: 'new-orange-station',
      isOpen: true,
    },
    {
      id: 'new-orange-lift',
      level: 'ADVANCED',
      name: '뉴오렌지 리프트',
      Element: NewOrangeLiftPath,
      isOpen: true,
    },
    {
      id: 'blue-lift',
      level: 'ADVANCED',
      name: '블루 리프트 5',
      Element: BlueLiftPath,
      webcamId: 'blue-station',
      isOpen: true,
    },
    {
      id: 'silver6-lift',
      level: 'EXPERT',
      name: '실버 리프트 6',
      Element: Silver6LiftPath,
      webcamId: '5-station',
      isOpen: true,
    },
    {
      id: 'silver7-lift',
      level: 'UPPER_INTERMEDIATE',
      name: '실버 리프트 7',
      Element: Silver7LiftPath,
      webcamId: 'silver-station',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'lemon-station',
      name: '레몬 탑승장',
      position: {
        top: 'top-[84%]',
        left: 'left-[20%]',
      },
      scale: 1,
    },
    {
      id: 'orange-station',
      name: '오렌지 탑승장',
      position: {
        top: 'top-[74%]',
        left: 'left-[31%]',
      },
      scale: 1,
    },
    {
      id: 'blue-station',
      name: '블루 탑승장',
      scale: 1,
      position: {
        top: 'top-[69%]',
        left: 'left-[56%]',
      },
    },
    {
      id: 'silver-station',
      name: '실버 탑승장',
      scale: 1,
      position: {
        top: 'top-[72%]',
        left: 'left-[68%]',
      },
    },
    {
      id: '5-station',
      name: '5번 슬로프',
      scale: 1,

      position: {
        top: 'top-[47%]',
        left: 'left-[37%]',
      },
    },
    {
      id: 'new-orange-station',
      name: '뉴오렌지 탑승장',
      scale: 1,
      position: {
        top: 'top-[64%]',
        left: 'left-[38%]',
      },
    },
    {
      id: 'jisan-overview',
      name: '지산 전경',
      scale: 1,
      position: {
        top: 'top-[38%]',
        left: 'left-[52%]',
      },
    },
  ],
};
