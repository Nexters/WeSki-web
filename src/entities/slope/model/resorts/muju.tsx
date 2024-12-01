'use client';

import MujuMap from '@public/maps/muju.png';
import AllegroPath from '../image/muju/allegro-path';
import CadenzaPath from '../image/muju/cadenza-path';
import ConnectionPath from '../image/muju/connection-path';
import EasternPath from '../image/muju/eastern-path';
import FreewayPath from '../image/muju/freeway-path';
import MinuetPath from '../image/muju/minuet-path';
import MozartPath from '../image/muju/mozart-path';
import PanoramaPath from '../image/muju/panorama-path';
import PolkaPath from '../image/muju/polka-path';
import RaidersHighestPath from '../image/muju/raiders-highest-path';
import RaidersLowestPath from '../image/muju/raiders-lowest-path';
import RookiehillPath from '../image/muju/rookiehill-path';
import SilkroadPath from '../image/muju/silkroad-path';
import SoyokgihangPath from '../image/muju/soyokgihang-path';
import SpitchLowestPath from '../image/muju/spitch-lowest-path';
import SundownPath from '../image/muju/sundown-path';
import TurboPath from '../image/muju/turbo-path';
import WaltzPath from '../image/muju/waltz-path';
import WesternPath from '../image/muju/western-path';
import YamagaPath from '../image/muju/yamaga-path';
import type { ResortConstant } from '../model';

export const MUJU: ResortConstant = {
  MapComponent: MujuMap,
  slopes: [
    {
      id: 115,
      PathAsset: EasternPath,
    },
    {
      id: 116,
      PathAsset: SoyokgihangPath,
    },
    {
      id: 117,
      PathAsset: SpitchLowestPath,
    },
    {
      id: 118,
      PathAsset: WesternPath,
    },
    {
      id: 119,
      PathAsset: SundownPath,
    },
    {
      id: 120,
      PathAsset: SilkroadPath,
    },
    {
      id: 121,
      PathAsset: RookiehillPath,
    },
    {
      id: 122,
      PathAsset: TurboPath,
    },
    {
      id: 123,
      PathAsset: ConnectionPath,
    },
    {
      id: 124,
      PathAsset: MinuetPath,
    },
    {
      id: 125,
      PathAsset: FreewayPath,
    },
    {
      id: 126,
      PathAsset: YamagaPath,
    },
    {
      id: 127,
      PathAsset: PanoramaPath,
    },
    {
      id: 128,
      PathAsset: RaidersLowestPath,
    },
    {
      id: 129,
      PathAsset: MozartPath,
    },
    {
      id: 130,
      PathAsset: WaltzPath,
    },
    {
      id: 131,
      PathAsset: AllegroPath,
    },
    {
      id: 132,
      PathAsset: RaidersHighestPath,
    },
    {
      id: 133,
      PathAsset: PolkaPath,
    },
    {
      id: 134,
      PathAsset: CadenzaPath,
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
