'use client';

import ElysianGangchonMap from '@public/maps/elysian-gangchon.png';
import DeerSlopPath from '../image/elysian-gangchon/deer-slop-path';
import DragonSlopPath from '../image/elysian-gangchon/dragon-slop-path';
import HorseSlopPath from '../image/elysian-gangchon/horse-slop-path';
import JaguarSlopPath from '../image/elysian-gangchon/jaguar-slop-path';
import LeopardSlopPath from '../image/elysian-gangchon/leopard-slop-path';
import PandaSlopPath from '../image/elysian-gangchon/panda-slop-path';
import PegasusSlopPath from '../image/elysian-gangchon/pegasus-slop-path';
import PumaSlopPath from '../image/elysian-gangchon/puma-slop-path';
import RabbitSlopPath from '../image/elysian-gangchon/rabbit-slop-path';
import ZebraSlopPath from '../image/elysian-gangchon/zebra-slop-path';
import type { ResortConstant } from '../model';

export const ELYSIAN_GANGCHON: ResortConstant = {
  MapComponent: ElysianGangchonMap,
  slopes: [
    {
      id: 29,
      PathAsset: PandaSlopPath,
    },
    {
      id: 30,
      PathAsset: RabbitSlopPath,
    },
    {
      id: 31,
      PathAsset: DragonSlopPath,
    },
    {
      id: 32,
      PathAsset: HorseSlopPath,
    },
    {
      id: 33,
      PathAsset: PegasusSlopPath,
    },
    {
      id: 34,
      PathAsset: ZebraSlopPath,
    },
    {
      id: 35,
      PathAsset: DeerSlopPath,
    },
    {
      id: 36,
      PathAsset: PumaSlopPath,
    },
    {
      id: 37,
      PathAsset: LeopardSlopPath,
    },
    {
      id: 38,
      PathAsset: JaguarSlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[86%]',
        left: 'left-[19%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[7%]',
        left: 'left-[27%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[83%]',
        left: 'left-[80%]',
      },
      scale: 1,
    },
  ],
};
