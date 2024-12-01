'use client';

import MapImage from '@public/maps/yongpyong.png';
import * as Slope from '../image/yongpyong';
import type { ResortConstant } from '../model';

export const YONGPYONG: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 95,
      PathAsset: Slope.YellowPath,
    },
    {
      id: 96,
      PathAsset: Slope.NewYellowPath,
    },
    {
      id: 97,
      PathAsset: Slope.MegaGreenPath,
    },
    {
      id: 98,
      PathAsset: Slope.PinkPath,
    },
    {
      id: 99,
      PathAsset: Slope.RedParadisePath,
    },
    {
      id: 100,
      PathAsset: Slope.GoldParadisePath,
    },
    {
      id: 101,
      PathAsset: Slope.SilverParadisePath,
    },
    {
      id: 102,
      PathAsset: Slope.RainbowParadisePath,
    },
    {
      id: 103,
      PathAsset: Slope.GoldFantasticPath,
    },
    {
      id: 104,
      PathAsset: Slope.NewRedPath,
    },
    {
      id: 105,
      PathAsset: Slope.BluePath,
    },
    {
      id: 106,
      PathAsset: Slope.GoldValleyPath,
    },
    {
      id: 107,
      PathAsset: Slope.Rainbow4Path,
    },
    {
      id: 108,
      PathAsset: Slope.RedPath,
    },
    {
      id: 109,
      PathAsset: Slope.SilverPath,
    },
    {
      id: 110,
      PathAsset: Slope.NewGoldPath,
    },
    {
      id: 111,
      PathAsset: Slope.Rainbow1Path,
    },
    {
      id: 112,
      PathAsset: Slope.Rainbow2Path,
    },
    {
      id: 113,
      PathAsset: Slope.Rainbow3Path,
    },
    {
      id: 114,
      PathAsset: Slope.DragonParkPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '발왕산 스카이워크',
      position: [3, 54],
      scale: 2,
    },
    {
      id: 2,
      key: '발왕산 천년주목숲길(동쪽)',
      position: [2, 63],
      scale: 2,
    },
    {
      id: 3,
      key: '옐로우 슬로프',
      position: [71, 37],
      scale: 2,
    },
    {
      id: 4,
      key: '핑크 슬로프',
      position: [64, 33],
      scale: 2,
    },
    {
      id: 5,
      key: '베이스전경/레드 슬로프',
      position: [60, 26],
      scale: 2,
    },
    {
      id: 6,
      key: '모나용평진입로',
      position: [86, 26],
      scale: 2,
    },
  ],
};
