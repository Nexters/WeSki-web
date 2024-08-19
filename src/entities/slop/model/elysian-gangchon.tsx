'use client';

import DeerSlopPath from '../image/elysian-gangchon/deer-slop-path';
import DragonSlopPath from '../image/elysian-gangchon/dragon-slop-path';
import HorseSlopPath from '../image/elysian-gangchon/horse-slop-path';
import JaguarSlopPath from '../image/elysian-gangchon/jaguar-slop-path';
import LeopardSlopPath from '../image/elysian-gangchon/leopard-slop-path';
import ElysianGangchonMap from '../image/elysian-gangchon/map';
import PandaSlopPath from '../image/elysian-gangchon/panda-slop-path';
import RabbitSlopPath from '../image/elysian-gangchon/rabbit-slop-path';
import ZebraSlopPath from '../image/elysian-gangchon/zebra-slop-path';
import type { ResortInfo } from './model';

export const ELYSIAN_GANGCHON: ResortInfo = {
  MapComponent: ElysianGangchonMap,
  slops: [
    {
      id: 'panda-slop',
      level: 'BEGINNER',
      name: '팬더슬로프',
      Element: PandaSlopPath,
      webcamId: 'sub-house',
      isOpen: true,
    },
    {
      id: 'rabbit-slop',
      level: 'BEGINNER',
      name: '래빗슬로프',
      Element: RabbitSlopPath,
      webcamId: 'sub-house',
      isOpen: true,
    },
    {
      id: 'dragon-slop',
      level: 'INTERMEDIATE',
      name: '드래곤슬로프',
      Element: DragonSlopPath,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'horse-slop',
      level: 'INTERMEDIATE',
      name: '호스슬로프',
      Element: HorseSlopPath,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'pegasus-slop',
      level: 'INTERMEDIATE',
      name: '페가수스슬로프',
      Element: () => <></>,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'zebra-slop',
      level: 'INTERMEDIATE',
      name: '제브라슬로프',
      Element: ZebraSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'deer-slop',
      level: 'INTERMEDIATE',
      name: '디어슬로프',
      Element: DeerSlopPath,
      isOpen: true,
    },
    {
      id: 'puma-slop',
      level: 'INTERMEDIATE',
      name: '퓨마슬로프',
      Element: () => <></>,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'leopard-slop',
      level: 'ADVANCED',
      name: '래퍼드슬로프',
      Element: LeopardSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'jaguar-slop',
      level: 'ADVANCED',
      name: '제규어슬로프',
      Element: JaguarSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'sub-house',
      name: '서브하우스',
      position: {
        top: 'top-[86%]',
        left: 'left-[18%]',
      },
      scale: 1,
    },
    {
      id: 'alp-house',
      name: '알프하우스',
      position: {
        top: 'top-[7%]',
        left: 'left-[27%]',
      },
      scale: 1,
    },
    {
      id: 'ski-house',
      name: '스키하우스',
      position: {
        top: 'top-[82%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
  ],
};
