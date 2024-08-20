'use client';

import BasicSlopePath from '../image/eden/basic-slope-path';
import JupiterSlopePath from '../image/eden/jupiter-slope-path';
import MainSlopePath from '../image/eden/main-slope-path';
import MapImage from '../image/eden/map';
import MercurySlopePath from '../image/eden/mercury-slope-path';
import SaturnSlopePath from '../image/eden/saturn-slope-path';
import UranusSlopePath from '../image/eden/uranus-slope-path';
import VenusSlopePath from '../image/eden/venus-slope-path';
import type { ResortInfo } from './model';

export const EDEN: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'basic-slope',
      level: 'BEGINNER',
      name: '베이직 슬로프',
      Element: BasicSlopePath,
      webcamId: 'basic-slope',
      isOpen: true,
    },
    {
      id: 'main-slope',
      level: 'BEGINNER',
      name: '메인 슬로프',
      Element: MainSlopePath,
      webcamId: 'basic-slope',
      isOpen: true,
    },
    {
      id: 'jupiter-slope',
      level: 'INTERMEDIATE',
      name: '쥬피터 슬로프',
      Element: JupiterSlopePath,
      webcamId: 'jupiter-slope',
      isOpen: true,
    },
    {
      id: 'saturn-slope',
      level: 'INTERMEDIATE',
      name: '새턴 슬로프',
      Element: SaturnSlopePath,
      isOpen: true,
    },
    {
      id: 'uranus-slope',
      level: 'INTERMEDIATE',
      name: '우라누스',
      Element: UranusSlopePath,
      webcamId: 'uranus-slope',
      isOpen: true,
    },
    {
      id: 'mercury-slope',
      level: 'ADVANCED',
      name: '머큐리 슬로프',
      Element: MercurySlopePath,
      isOpen: true,
    },
    {
      id: 'venus-slope',
      level: 'ADVANCED',
      name: '비너스 슬로프',
      Element: VenusSlopePath,
      webcamId: 'basic-slope',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'basic-slope',
      name: '베이직 슬로프',
      position: {
        top: 'top-[52%]',
        left: 'left-[35%]',
      },
      scale: 1,
    },
    {
      id: 'jupiter-slope',
      name: '쥬피터 슬로프',
      position: {
        top: 'top-[17%]',
        left: 'left-[50%]',
      },
      scale: 1,
    },
    {
      id: 'uranus-slope',
      name: '우라누스 슬로프',
      position: {
        top: 'top-[34%]',
        left: 'left-[75%]',
      },
      scale: 1,
    },
  ],
};
