'use client';

import MapImage from '@public/maps/phoenix.png';
import ChampionSlopePath from '../image/phoenix/champion-slope-path';
import DiggySlopePath from '../image/phoenix/diggy-slope-path';
import DukeSlopePath from '../image/phoenix/duke-slope-path';
import ExtremeParkPath from '../image/phoenix/extreme-park-path';
import FantasySlopePath from '../image/phoenix/fantasy-slope-path';
import HawkSlope1Path from '../image/phoenix/hawk-slope1-path';
import HawkSlope2Path from '../image/phoenix/hawk-slope2-path';
import KiwiSlopePath from '../image/phoenix/kiwi-slope-path';
import MogulSlopePath from '../image/phoenix/mogul-slope-path';
import PanoramaPath from '../image/phoenix/panorama-path';
import ParadisePath from '../image/phoenix/paradise-path';
import PenguinSlopePath from '../image/phoenix/penguin-slope-path';
import SlopeStylePath from '../image/phoenix/slope-style-path';
import SparrowPath from '../image/phoenix/sparrow-path';
import ValleySlopePath from '../image/phoenix/valley-slope-path';
import type { ResortConstant } from '../model';

export const PHOENIX: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 59,
      PathAsset: SparrowPath,
    },
    {
      id: 60,
      PathAsset: PenguinSlopePath,
    },
    {
      id: 61,
      PathAsset: HawkSlope1Path,
    },
    {
      id: 62,
      PathAsset: KiwiSlopePath,
    },
    {
      id: 63,
      PathAsset: PanoramaPath,
    },
    {
      id: 64,
      PathAsset: ValleySlopePath,
    },
    {
      id: 65,
      PathAsset: HawkSlope2Path,
    },
    {
      id: 66,
      PathAsset: DukeSlopePath,
    },
    {
      id: 67,
      PathAsset: SlopeStylePath,
    },
    {
      id: 68,
      PathAsset: ChampionSlopePath,
    },
    {
      id: 69,
      PathAsset: FantasySlopePath,
    },
    {
      id: 70,
      PathAsset: DiggySlopePath,
    },
    {
      id: 71,
      PathAsset: MogulSlopePath,
    },
    {
      id: 72,
      PathAsset: ParadisePath,
    },
    {
      id: 73,
      PathAsset: ExtremeParkPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '스패로우',
      position: [45, 87],
      scale: 1,
    },
    {
      id: 2,
      key: '파노라마',
      position: [15, 88],
      scale: 1,
    },
    {
      id: 3,
      key: '불새마루존',
      position: [31, 9],
      scale: 1,
    },
    {
      id: 4,
      key: '스키베이스',
      position: [83, 79],
      scale: 1,
    },
    {
      id: 5,
      key: '펭귄 슬로프',
      position: [79, 43],
      scale: 1,
    },
    {
      id: 6,
      key: '몽블랑 정상',
      position: [7, 53],
      scale: 1,
    },
    {
      id: 7,
      key: '챔피온',
      position: [26, 66],
      scale: 1,
    },
  ],
};
