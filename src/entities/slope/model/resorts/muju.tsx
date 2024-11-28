'use client';

import MujuMap from '@public/maps/muju.png';
import AllegroPath from '../image/muju/allegro-path';
import CadenzaSlopePath from '../image/muju/cadenza-slope-path';
import ConnectionSlopePath from '../image/muju/connection-slope-path';
import EasternSlopePath from '../image/muju/eastern-slope-path';
// import FlamingoPath from '../image/muju/flamingo-path';
import FreewayPath from '../image/muju/freeway-path';
// import Freeway2Path from '../image/muju/freeway2-path';
import MinuetPath from '../image/muju/minuet-path';
// import ModeratoPath from '../image/muju/moderato-path';
import MozartPath from '../image/muju/mozart-path';
import PanoramaPath from '../image/muju/panorama-path';
import PolkaSlopePath from '../image/muju/polka-slope-path';
// import RGardnerSlopePath from '../image/muju/r-gardner-slope-path';
import RaidersHighestPath from '../image/muju/raiders-highest-path';
import RaidersLowestPath from '../image/muju/raiders-lowest-path';
import RookiehillSlopePath from '../image/muju/rookiehill-slope-path';
// import RusutsuSlopePath from '../image/muju/rusutsu-slope-path';
// import ShortcutSlopePath from '../image/muju/shortcut-slope-path';
import SilkroadPath from '../image/muju/silkroad-path';
import SoyokgihangPath from '../image/muju/soyokgihang-path';
import SpitchLowestPath from '../image/muju/spitch-lowest-path';
// import SpitchSlopePath from '../image/muju/spitch-slope-path';
import SundownSlopePath from '../image/muju/sundown-slope-path';
import TurboSlopePath from '../image/muju/turbo-slope-path';
import WaltzSlopePath from '../image/muju/waltz-slope-path';
import WesternSlopePath from '../image/muju/western-slope-path';
import YamagaSlopePath from '../image/muju/yamaga-slope-path';
import type { ResortConstant } from '../model';

export const MUJU: ResortConstant = {
  MapComponent: MujuMap,
  slopes: [
    {
      id: 74,
      PathAsset: EasternSlopePath,
    },
    {
      id: 75,
      PathAsset: SoyokgihangPath,
    },
    {
      id: 76,
      PathAsset: SpitchLowestPath,
    },
    {
      id: 77,
      PathAsset: WesternSlopePath,
    },
    {
      id: 78,
      PathAsset: SundownSlopePath,
    },
    {
      id: 79,
      PathAsset: SilkroadPath,
    },
    {
      id: 80,
      PathAsset: RookiehillSlopePath,
    },
    {
      id: 81,
      PathAsset: TurboSlopePath,
    },
    {
      id: 82,
      PathAsset: ConnectionSlopePath,
    },
    {
      id: 83,
      PathAsset: MinuetPath,
    },
    {
      id: 84,
      PathAsset: FreewayPath,
    },
    {
      id: 85,
      PathAsset: YamagaSlopePath,
    },
    {
      id: 86,
      PathAsset: PanoramaPath,
    },
    {
      id: 87,
      PathAsset: RaidersLowestPath,
    },
    {
      id: 88,
      PathAsset: MozartPath,
    },
    {
      id: 89,
      PathAsset: WaltzSlopePath,
    },
    {
      id: 90,
      PathAsset: AllegroPath,
    },
    {
      id: 91,
      PathAsset: RaidersHighestPath,
    },
    {
      id: 92,
      PathAsset: PolkaSlopePath,
    },
    {
      id: 93,
      PathAsset: CadenzaSlopePath,
    },
    // {
    //   id: 'shortcut-slope',
    //   PathAsset: ShortcutSlopePath,
    // },
    // {
    //   id: 'spitch-slope',
    //   PathAsset: SpitchSlopePath,
    // },
    // {
    //   id: 'flamingo',
    //   PathAsset: FlamingoPath,
    // },
    // {
    //   id: 'moderato',
    //   PathAsset: ModeratoPath,
    // },
    // {
    //   id: 'r-gardner-slope',
    //   PathAsset: RGardnerSlopePath,
    // },
    // {
    //   id: 'freeway2',
    //   PathAsset: Freeway2Path,
    // },
    // {
    //   id: 'rusutsu-slope',
    //   PathAsset: RusutsuSlopePath,
    // },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[16%]',
        left: 'left-[23%]',
      },
      scale: 2,
    },
    {
      id: 2,
      position: {
        top: 'top-[12%]',
        left: 'left-[37%]',
      },
      scale: 2,
    },
    {
      id: 3,
      position: {
        top: 'top-[30%]',
        left: 'left-[27%]',
      },
      scale: 2,
    },
    {
      id: 4,
      position: {
        top: 'top-[32%]',
        left: 'left-[51%]',
      },
      scale: 2,
    },
    {
      id: 5,
      position: {
        top: 'top-[45%]',
        left: 'left-[70%]',
      },
      scale: 2,
    },
    {
      id: 6,
      position: {
        top: 'top-[65%]',
        left: 'left-[68%]',
      },
      scale: 2,
    },
    {
      id: 7,
      position: {
        top: 'top-[78%]',
        left: 'left-[47%]',
      },
      scale: 2,
    },
    {
      id: 8,
      position: {
        top: 'top-[74%]',
        left: 'left-[28%]',
      },
      scale: 2,
    },
  ],
};

export default MUJU;
