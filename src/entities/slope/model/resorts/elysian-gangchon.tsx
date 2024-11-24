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
      level: '초급',
      name: '팬더슬로프',
      Element: PandaSlopPath,
      webcamId: 'sub-house',
      isOpen: true,
    },
    {
      id: 'rabbit-slop',
      level: '초급',
      name: '래빗슬로프',
      Element: RabbitSlopPath,
      webcamId: 'sub-house',
      isOpen: true,
    },
    {
      id: 'dragon-slop',
      level: '중급',
      name: '드래곤슬로프',
      Element: DragonSlopPath,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'horse-slop',
      level: '중급',
      name: '호스슬로프',
      Element: HorseSlopPath,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'pegasus-slop',
      level: '중급',
      name: '페가수스슬로프',
      Element: PegasusSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'zebra-slop',
      level: '중급',
      name: '제브라슬로프',
      Element: ZebraSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'deer-slop',
      level: '중급',
      name: '디어슬로프',
      Element: DeerSlopPath,
      isOpen: true,
    },
    {
      id: 'puma-slop',
      level: '중급',
      name: '퓨마슬로프',
      Element: PumaSlopPath,
      webcamId: 'alp-house',
      isOpen: true,
    },
    {
      id: 'leopard-slop',
      level: '상급',
      name: '래퍼드슬로프',
      Element: LeopardSlopPath,
      webcamId: 'ski-house',
      isOpen: true,
    },
    {
      id: 'jaguar-slop',
      level: '상급',
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
        left: 'left-[19%]',
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
        top: 'top-[83%]',
        left: 'left-[80%]',
      },
      scale: 1,
    },
  ],
};
