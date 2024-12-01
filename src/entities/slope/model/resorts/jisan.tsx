'use client';

import MapImage from '@public/maps/jisan.png';
import * as Slope from '../image/jisan';
import type { ResortConstant } from '../model';

export const JISAN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 1,
      PathAsset: Slope.Lemon1LiftPath,
    },
    {
      id: 2,
      PathAsset: Slope.Lemon1Sub1LiftPath,
    },
    {
      id: 3,
      PathAsset: Slope.Orange2LiftPath,
    },
    {
      id: 4,
      PathAsset: Slope.Orange3LiftPath,
    },
    {
      id: 5,
      PathAsset: Slope.NewOrangeLiftPath,
    },
    {
      id: 6,
      PathAsset: Slope.BlueLiftPath,
    },
    {
      id: 7,
      PathAsset: Slope.Silver6LiftPath,
    },
    {
      id: 8,
      PathAsset: Slope.Silver7LiftPath,
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
