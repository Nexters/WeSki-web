'use client';

import MapImage from '@public/maps/phoenix.png';
import * as Slope from '../image/phoenix';
import type { ResortConstant } from '../model';

export const PHOENIX: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 57,
      PathAsset: Slope.SparrowPath,
    },
    {
      id: 58,
      PathAsset: Slope.PenguinPath,
    },
    {
      id: 59,
      PathAsset: Slope.Hawk2Path,
    },
    {
      id: 60,
      PathAsset: Slope.DodoPath,
    },
    {
      id: 61,
      PathAsset: Slope.KiwiPath,
    },
    {
      id: 62,
      PathAsset: Slope.PanoramaPath,
    },
    {
      id: 63,
      PathAsset: Slope.Hawk1Path,
    },
    {
      id: 64,
      PathAsset: Slope.ValleyPath,
    },
    {
      id: 65,
      PathAsset: Slope.DukePath,
    },
    {
      id: 66,
      PathAsset: Slope.SlopeStylePath,
    },
    {
      id: 67,
      PathAsset: Slope.ChampionPath,
    },
    {
      id: 68,
      PathAsset: Slope.FantasyPath,
    },
    {
      id: 69,
      PathAsset: Slope.DiggyPath,
    },
    {
      id: 70,
      PathAsset: Slope.MogulPath,
    },
    {
      id: 71,
      PathAsset: Slope.ParadisePath,
    },
    {
      id: 72,
      PathAsset: Slope.ExtremeParkPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '호크,스패로우',
      position: [82, 78],
      scale: 1,
    },
    {
      id: 2,
      key: '도도',
      position: [75, 45],
      scale: 1,
    },
    {
      id: 3,
      key: '불새마루',
      position: [31, 9],
      scale: 1,
    },
    {
      id: 4,
      key: '베이스',
      position: [86, 38],
      scale: 1,
    },
    {
      id: 5,
      key: '펭귄',
      position: [78, 28],
      scale: 1,
    },
    {
      id: 6,
      key: '스노우 빌리지',
      position: [80, 65],
      scale: 1,
    },
  ],
};
