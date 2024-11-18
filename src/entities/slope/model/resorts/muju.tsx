'use client';

import MujuMap from '@public/maps/muju.png';
import AllegroPath from '../image/muju/allegro-path';
import CadenzaSlopePath from '../image/muju/cadenza-slope-path';
import ConnectionSlopePath from '../image/muju/connection-slope-path';
import EasternSlopePath from '../image/muju/eastern-slope-path';
import FlamingoPath from '../image/muju/flamingo-path';
import FreewayPath from '../image/muju/freeway-path';
import Freeway2Path from '../image/muju/freeway2-path';
import MinuetPath from '../image/muju/minuet-path';
import ModeratoPath from '../image/muju/moderato-path';
import MozartPath from '../image/muju/mozart-path';
import PanoramaPath from '../image/muju/panorama-path';
import PolkaSlopePath from '../image/muju/polka-slope-path';
import RGardnerSlopePath from '../image/muju/r-gardner-slope-path';
import RaidersHighestPath from '../image/muju/raiders-highest-path';
import RaidersLowestPath from '../image/muju/raiders-lowest-path';
import RookiehillSlopePath from '../image/muju/rookiehill-slope-path';
import RusutsuSlopePath from '../image/muju/rusutsu-slope-path';
import ShortcutSlopePath from '../image/muju/shortcut-slope-path';
import SilkroadPath from '../image/muju/silkroad-path';
import SoyokgihangPath from '../image/muju/soyokgihang-path';
import SpitchLowestPath from '../image/muju/spitch-lowest-path';
import SpitchSlopePath from '../image/muju/spitch-slope-path';
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
      id: 'eastern-slope',
      PathAsset: EasternSlopePath,
      webcam: 7,
    },
    {
      id: 'soyokgihang',
      PathAsset: SoyokgihangPath,
      webcam: 5,
    },
    {
      id: 'spitch-lowest',
      PathAsset: SpitchLowestPath,
      webcam: 8,
    },
    {
      id: 'western-slope',
      PathAsset: WesternSlopePath,
    },
    {
      id: 'sundown-slope',
      PathAsset: SundownSlopePath,
      webcam: 6,
    },
    {
      id: 'silkroad',
      PathAsset: SilkroadPath,
      webcam: 2,
    },
    {
      id: 'rookiehill-slope',
      PathAsset: RookiehillSlopePath,
    },
    {
      id: 'turbo-slope',
      PathAsset: TurboSlopePath,
      webcam: 6,
    },
    {
      id: 'connection-slope',
      PathAsset: ConnectionSlopePath,
    },
    {
      id: 'minuet',
      PathAsset: MinuetPath,
      webcam: 3,
    },
    {
      id: 'freeway',
      PathAsset: FreewayPath,
      webcam: 5,
    },
    {
      id: 'yamaga-slope',
      PathAsset: YamagaSlopePath,
      webcam: 5,
    },
    {
      id: 'panorama',
      PathAsset: PanoramaPath,
    },
    {
      id: 'raiders-lowest',
      PathAsset: RaidersLowestPath,
    },
    {
      id: 'mozart',
      PathAsset: MozartPath,
      webcam: 3,
    },
    {
      id: 'waltz-slope',
      PathAsset: WaltzSlopePath,
    },
    {
      id: 'allegro',
      PathAsset: AllegroPath,
      webcam: 1,
    },
    {
      id: 'raiders-highest',
      PathAsset: RaidersHighestPath,
      webcam: 4,
    },
    {
      id: 'polka-slope',
      PathAsset: PolkaSlopePath,
      webcam: 1,
    },
    {
      id: 'cadenza-slope',
      PathAsset: CadenzaSlopePath,
      webcam: 1,
    },
    {
      id: 'shortcut-slope',
      PathAsset: ShortcutSlopePath,
    },
    {
      id: 'spitch-slope',
      PathAsset: SpitchSlopePath,
    },
    {
      id: 'flamingo',
      PathAsset: FlamingoPath,
    },
    {
      id: 'moderato',
      PathAsset: ModeratoPath,
    },
    {
      id: 'r-gardner-slope',
      PathAsset: RGardnerSlopePath,
    },
    {
      id: 'freeway2',
      PathAsset: Freeway2Path,
    },
    {
      id: 'rusutsu-slope',
      PathAsset: RusutsuSlopePath,
    },
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
