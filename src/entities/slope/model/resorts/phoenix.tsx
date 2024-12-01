'use client';

import MapImage from '@public/maps/phoenix.png';
import ChampionPath from '../image/phoenix/champion-path';
import DiggyPath from '../image/phoenix/diggy-path';
import DukePath from '../image/phoenix/duke-path';
import ExtremeParkPath from '../image/phoenix/extreme-park-path';
import FantasyPath from '../image/phoenix/fantasy-path';
import Hawk1Path from '../image/phoenix/hawk1-path';
import Hawk2Path from '../image/phoenix/hawk2-path';
import KiwiPath from '../image/phoenix/kiwi-path';
import MogulPath from '../image/phoenix/mogul-path';
import PanoramaPath from '../image/phoenix/panorama-path';
import ParadisePath from '../image/phoenix/paradise-path';
import PenguinPath from '../image/phoenix/penguin-path';
import SlopeStylePath from '../image/phoenix/slope-style-path';
import SparrowPath from '../image/phoenix/sparrow-path';
import ValleyPath from '../image/phoenix/valley-path';
import type { ResortConstant } from '../model';

export const PHOENIX: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 57,
      PathAsset: SparrowPath,
    },
    {
      id: 58,
      PathAsset: PenguinPath,
    },
    {
      id: 59,
      PathAsset: Hawk2Path,
    },
    // {
    //   id: 60,
    //   PathAsset: DodoPath,
    // },
    {
      id: 61,
      PathAsset: KiwiPath,
    },
    {
      id: 62,
      PathAsset: PanoramaPath,
    },
    {
      id: 63,
      PathAsset: Hawk1Path,
    },
    {
      id: 64,
      PathAsset: ValleyPath,
    },
    {
      id: 65,
      PathAsset: DukePath,
    },
    {
      id: 66,
      PathAsset: SlopeStylePath,
    },
    {
      id: 67,
      PathAsset: ChampionPath,
    },
    {
      id: 68,
      PathAsset: FantasyPath,
    },
    {
      id: 69,
      PathAsset: DiggyPath,
    },
    {
      id: 70,
      PathAsset: MogulPath,
    },
    {
      id: 71,
      PathAsset: ParadisePath,
    },
    {
      id: 72,
      PathAsset: ExtremeParkPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '호크,스패로우',
      position: [82, 76],
      scale: 1,
    },
    {
      id: 2,
      key: '도도',
      position: [78, 48],
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
      position: [82, 38],
      scale: 1,
    },
    {
      id: 5,
      key: '펭귄',
      position: [45, 50],
      scale: 1,
    },
    {
      id: 6,
      key: '스노우 빌리지',
      position: [82, 65],
      scale: 1,
    },
  ],
};
