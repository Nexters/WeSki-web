'use client';

import MujuMap from '@public/maps/muju.png';
import * as Slope from '../image/muju';
import type { ResortConstant } from '../model';

export const MUJU: ResortConstant = {
  MapComponent: MujuMap,
  slopes: [
    {
      id: 115,
      PathAsset: Slope.EasternPath,
    },
    {
      id: 116,
      PathAsset: Slope.SoyokgihangPath,
    },
    {
      id: 117,
      PathAsset: Slope.SpitchLowestPath,
    },
    {
      id: 118,
      PathAsset: Slope.WesternPath,
    },
    {
      id: 119,
      PathAsset: Slope.SundownPath,
    },
    {
      id: 120,
      PathAsset: Slope.SilkroadPath,
    },
    {
      id: 121,
      PathAsset: Slope.RookiehillPath,
    },
    {
      id: 122,
      PathAsset: Slope.TurboPath,
    },
    {
      id: 123,
      PathAsset: Slope.ConnectionPath,
    },
    {
      id: 124,
      PathAsset: Slope.MinuetPath,
    },
    {
      id: 125,
      PathAsset: Slope.FreewayPath,
    },
    {
      id: 126,
      PathAsset: Slope.YamagaPath,
    },
    {
      id: 127,
      PathAsset: Slope.PanoramaPath,
    },
    {
      id: 128,
      PathAsset: Slope.RaidersLowestPath,
    },
    {
      id: 129,
      PathAsset: Slope.MozartPath,
    },
    {
      id: 130,
      PathAsset: Slope.WaltzPath,
    },
    {
      id: 131,
      PathAsset: Slope.AllegroPath,
    },
    {
      id: 132,
      PathAsset: Slope.RaidersHighestPath,
    },
    {
      id: 133,
      PathAsset: Slope.PolkaPath,
    },
    {
      id: 134,
      PathAsset: Slope.CadenzaPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '설천상단 슬로프',
      position: [16, 23],
      scale: 2,
    },
    {
      id: 2,
      key: '설천봉 정상',
      position: [12, 37],
      scale: 2,
    },
    {
      id: 3,
      key: '모차르트, 미뉴에트',
      position: [30, 27],
      scale: 2,
    },
    {
      id: 4,
      key: '만선봉 정상',
      position: [32, 51],
      scale: 2,
    },
    {
      id: 5,
      key: '하이디 하우스',
      position: [45, 70],
      scale: 2,
    },
    {
      id: 6,
      key: '서역기행, 썬다운',
      position: [65, 68],
      scale: 2,
    },
    {
      id: 7,
      key: '만선 하우스',
      position: [78, 47],
      scale: 2,
    },
    {
      id: 8,
      key: '설천 하우스',
      position: [74, 28],
      scale: 2,
    },
  ],
};

export default MUJU;
