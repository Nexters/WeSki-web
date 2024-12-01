'use client';

import MapImage from '@public/maps/jisan.png';
import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7LiftPath from '../image/jisan/silver7-lift-path';
import type { ResortConstant } from '../model';

export const JISAN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 1,
      PathAsset: Lemon1LiftPath,
    },
    {
      id: 2,
      PathAsset: Lemon1Sub1LiftPath,
    },
    {
      id: 3,
      PathAsset: Orange2LiftPath,
    },
    {
      id: 4,
      PathAsset: Orange3LiftPath,
    },
    {
      id: 5,
      PathAsset: NewOrangeLiftPath,
    },
    {
      id: 6,
      PathAsset: BlueLiftPath,
    },
    {
      id: 7,
      PathAsset: Silver6LiftPath,
    },
    {
      id: 8,
      PathAsset: Silver7LiftPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '레몬 탑승장',
      position: [84, 20],
      scale: 1,
    },
    {
      id: 2,
      key: '오렌지 탑승장',
      position: [74, 31],
      scale: 1,
    },
    {
      id: 3,
      key: '뉴오렌지 탑승장',
      position: [64, 38],
      scale: 1,
    },
    {
      id: 4,
      key: '블루 탑승장',
      position: [69, 56],
      scale: 1,
    },
    {
      id: 5,
      key: '5번 슬로프',
      position: [47, 37],
      scale: 1,
    },
    {
      id: 6,
      key: '실버 탑승장',
      position: [72, 68],
      scale: 1,
    },
    {
      id: 7,
      key: '지산 전경',
      position: [38, 52],
      scale: 1,
    },
  ],
};
