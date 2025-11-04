'use client';

import VivaldiparkMap from '@public/maps/vivaldipark.png';

import * as Slope from '../image/vivaldipark';
import type { ResortConstant } from '../model';

export const VIVALDIPARK: ResortConstant = {
  MapComponent: VivaldiparkMap,
  slopes: [
    {
      id: 19,
      PathAsset: Slope.BalladPath,
    },
    {
      id: 20,
      PathAsset: Slope.ReggaePath,
    },
    {
      id: 21,
      PathAsset: Slope.ClassicPath,
    },
    {
      id: 22,
      PathAsset: Slope.FunkyPath,
    },
    {
      id: 23,
      PathAsset: Slope.Techno1Path,
    },
    {
      id: 24,
      PathAsset: Slope.Techno2Path,
    },
    {
      id: 25,
      PathAsset: Slope.HiphopPath,
    },
    {
      id: 27,
      PathAsset: Slope.BluesPath,
    },
    {
      id: 28,
      PathAsset: Slope.JazzPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '재즈',
      position: [62, 21],
      scale: 1,
    },
    {
      id: 2,
      key: '발라드',
      position: [56, 41],
      scale: 1,
    },
    {
      id: 4,
      key: '블루스',
      position: [62, 77],
      scale: 1,
    },
    {
      id: 5,
      key: '테크노',
      position: [64, 51],
      scale: 1,
    },
    {
      id: 6,
      key: '힙합',
      position: [34, 55],
      scale: 1,
    },
    {
      id: 8,
      key: '슬로프 전경',
      position: [76, 45],
      scale: 1,
    },
    {
      id: 9,
      key: '스키장 정상',
      position: [14, 37],
      scale: 1,
    },
  ],
};
