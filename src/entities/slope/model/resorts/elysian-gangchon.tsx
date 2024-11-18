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
      id: 'panda-slop',
      PathAsset: PandaSlopPath,
      webcam: 2,
    },
    {
      id: 'rabbit-slop',
      PathAsset: RabbitSlopPath,
      webcam: 2,
    },
    {
      id: 'dragon-slop',
      PathAsset: DragonSlopPath,
      webcam: 1,
    },
    {
      id: 'horse-slop',
      PathAsset: HorseSlopPath,
      webcam: 1,
    },
    {
      id: 'pegasus-slop',
      PathAsset: PegasusSlopPath,
      webcam: 3,
    },
    {
      id: 'zebra-slop',
      PathAsset: ZebraSlopPath,
      webcam: 3,
    },
    {
      id: 'deer-slop',
      PathAsset: DeerSlopPath,
    },
    {
      id: 'puma-slop',
      PathAsset: PumaSlopPath,
      webcam: 1,
    },
    {
      id: 'leopard-slop',
      PathAsset: LeopardSlopPath,
      webcam: 3,
    },
    {
      id: 'jaguar-slop',
      PathAsset: JaguarSlopPath,
      webcam: 3,
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
