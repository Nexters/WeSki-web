'use client';

import ElysianGangchonMap from '@public/maps/elysian-gangchon.png';
import * as Slope from '../image/elysian-gangchon';
import type { ResortConstant } from '../model';

export const ELYSIAN_GANGCHON: ResortConstant = {
  MapComponent: ElysianGangchonMap,
  slopes: [
    {
      id: 29,
      PathAsset: Slope.PandaPath,
    },
    {
      id: 30,
      PathAsset: Slope.RabbitPath,
    },
    {
      id: 31,
      PathAsset: Slope.DragonPath,
    },
    {
      id: 32,
      PathAsset: Slope.HorsePath,
    },
    {
      id: 33,
      PathAsset: Slope.PegasusPath,
    },
    {
      id: 34,
      PathAsset: Slope.ZebraPath,
    },
    {
      id: 35,
      PathAsset: Slope.DeerPath,
    },
    {
      id: 36,
      PathAsset: Slope.PumaPath,
    },
    {
      id: 37,
      PathAsset: Slope.LeopardPath,
    },
    {
      id: 38,
      PathAsset: Slope.JaguarPath,
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
