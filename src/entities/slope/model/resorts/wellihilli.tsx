'use client';

import WellihilliMap from '@public/maps/wellihilli.png';

import * as Slope from '../image/wellihilli';
import type { ResortConstant } from '../model';

export const WELLIHILLI: ResortConstant = {
  MapComponent: WellihilliMap,
  slopes: [
    {
      id: 39,
      PathAsset: Slope.Alpha1Path,
    },
    {
      id: 40,
      PathAsset: Slope.Alpha2Path,
    },
    {
      id: 41,
      PathAsset: Slope.Alpha3Path,
    },
    {
      id: 42,
      PathAsset: Slope.Bravo1Path,
    },
    {
      id: 43,
      PathAsset: Slope.Bravo2Path,
    },
    {
      id: 44,
      PathAsset: Slope.Delta1Path,
    },
    {
      id: 45,
      PathAsset: Slope.Delta2Path,
    },
    {
      id: 46,
      PathAsset: Slope.DeltaPlusPath,
    },
    {
      id: 47,
      PathAsset: Slope.Echo1Path,
    },
    {
      id: 48,
      PathAsset: Slope.Echo2Path,
    },
    {
      id: 49,
      PathAsset: Slope.Echo3Path,
    },
    {
      id: 50,
      PathAsset: Slope.Challenge1Path,
    },
    {
      id: 51,
      PathAsset: Slope.Challenge2Path,
    },
    {
      id: 52,
      PathAsset: Slope.Challenge3Path,
    },
    {
      id: 53,
      PathAsset: Slope.Challenge4Path,
    },
    {
      id: 54,
      PathAsset: Slope.Challenge5Path,
    },
    {
      id: 55,
      PathAsset: Slope.StarExpress1Path,
    },
    {
      id: 56,
      PathAsset: Slope.StarExpress2Path,
    },
  ],
  webcams: [
    { id: 2, key: '알파', position: [72, 20], scale: 1 },
    {
      id: 3,
      key: '베이스',
      position: [75, 26],
      scale: 1,
    },
    {
      id: 4,
      key: '리조트 전경',
      position: [78, 35],
      scale: 1,
    },
    {
      id: 5,
      key: '정상광장',
      position: [4, 56],
      scale: 1,
    },
    {
      id: 6,
      key: '패밀리',
      position: [85, 39],
      scale: 1,
    },
    {
      id: 7,
      key: '워터플래닛',
      position: [88, 22],
      scale: 1,
    },
  ],
};

export default WELLIHILLI;
