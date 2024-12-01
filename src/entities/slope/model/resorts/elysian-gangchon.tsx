'use client';

import ElysianGangchonMap from '@public/maps/elysian-gangchon.png';
import DeerPath from '../image/elysian-gangchon/deer-path';
import DragonPath from '../image/elysian-gangchon/dragon-path';
import HorsePath from '../image/elysian-gangchon/horse-path';
import JaguarPath from '../image/elysian-gangchon/jaguar-path';
import LeopardPath from '../image/elysian-gangchon/leopard-path';
import PandaPath from '../image/elysian-gangchon/panda-path';
import PegasusPath from '../image/elysian-gangchon/pegasus-path';
import PumaPath from '../image/elysian-gangchon/puma-path';
import RabbitPath from '../image/elysian-gangchon/rabbit-path';
import ZebraPath from '../image/elysian-gangchon/zebra-path';
import type { ResortConstant } from '../model';

export const ELYSIAN_GANGCHON: ResortConstant = {
  MapComponent: ElysianGangchonMap,
  slopes: [
    {
      id: 29,
      PathAsset: PandaPath,
    },
    {
      id: 30,
      PathAsset: RabbitPath,
    },
    {
      id: 31,
      PathAsset: DragonPath,
    },
    {
      id: 32,
      PathAsset: HorsePath,
    },
    {
      id: 33,
      PathAsset: PegasusPath,
    },
    {
      id: 34,
      PathAsset: ZebraPath,
    },
    {
      id: 35,
      PathAsset: DeerPath,
    },
    {
      id: 36,
      PathAsset: PumaPath,
    },
    {
      id: 37,
      PathAsset: LeopardPath,
    },
    {
      id: 38,
      PathAsset: JaguarPath,
    },
  ],
  webcams: [
    {
      id: 1,
      key: '알프하우스',
      position: [7, 27],
      scale: 1,
    },
    {
      id: 2,
      key: '서브하우스',
      position: [86, 19],
      scale: 1,
    },
    {
      id: 3,
      key: '스키하우스',
      position: [83, 80],
      scale: 1,
    },
  ],
};
