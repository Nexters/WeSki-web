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
      pathAsset: EasternSlopePath,
      webcam: 7,
    },
    {
      id: 'soyokgihang',
      pathAsset: SoyokgihangPath,
      webcam: 5,
    },
    {
      id: 'spitch-lowest',
      pathAsset: SpitchLowestPath,
      webcam: 8,
    },
    {
      id: 'western-slope',
      pathAsset: WesternSlopePath,
    },
    {
      id: 'sundown-slope',
      pathAsset: SundownSlopePath,
      webcam: 6,
    },
    {
      id: 'silkroad',
      pathAsset: SilkroadPath,
      webcam: 2,
    },
    {
      id: 'rookiehill-slope',
      pathAsset: RookiehillSlopePath,
    },
    {
      id: 'turbo-slope',
      pathAsset: TurboSlopePath,
      webcam: 6,
    },
    {
      id: 'connection-slope',
      pathAsset: ConnectionSlopePath,
    },
    {
      id: 'minuet',
      pathAsset: MinuetPath,
      webcam: 3,
    },
    {
      id: 'freeway',
      pathAsset: FreewayPath,
      webcam: 5,
    },
    {
      id: 'yamaga-slope',
      pathAsset: YamagaSlopePath,
      webcam: 5,
    },
    {
      id: 'panorama',
      pathAsset: PanoramaPath,
    },
    {
      id: 'raiders-lowest',
      pathAsset: RaidersLowestPath,
    },
    {
      id: 'mozart',
      pathAsset: MozartPath,
      webcam: 3,
    },
    {
      id: 'waltz-slope',
      pathAsset: WaltzSlopePath,
    },
    {
      id: 'allegro',
      pathAsset: AllegroPath,
      webcam: 1,
    },
    {
      id: 'raiders-highest',
      pathAsset: RaidersHighestPath,
      webcam: 4,
    },
    {
      id: 'polka-slope',
      pathAsset: PolkaSlopePath,
      webcam: 1,
    },
    {
      id: 'cadenza-slope',
      pathAsset: CadenzaSlopePath,
      webcam: 1,
    },
    {
      id: 'shortcut-slope',
      pathAsset: ShortcutSlopePath,
    },
    {
      id: 'spitch-slope',
      pathAsset: SpitchSlopePath,
    },
    {
      id: 'flamingo',
      pathAsset: FlamingoPath,
    },
    {
      id: 'moderato',
      pathAsset: ModeratoPath,
    },
    {
      id: 'r-gardner-slope',
      pathAsset: RGardnerSlopePath,
    },
    {
      id: 'freeway2',
      pathAsset: Freeway2Path,
    },
    {
      id: 'rusutsu-slope',
      pathAsset: RusutsuSlopePath,
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
