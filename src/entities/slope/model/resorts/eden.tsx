'use client';

import BasicSlopePath from '../image/eden/basic-slope-path';
import JupiterSlopePath from '../image/eden/jupiter-slope-path';
import MainSlopePath from '../image/eden/main-slope-path';
import MapImage from '../image/eden/map';
import MercurySlopePath from '../image/eden/mercury-slope-path';
import SaturnSlopePath from '../image/eden/saturn-slope-path';
import UranusSlopePath from '../image/eden/uranus-slope-path';
import VenusSlopePath from '../image/eden/venus-slope-path';
import type { ResortConstant } from '../model';

export const EDEN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 'basic-slope',
      level: '초급',
      name: '베이직 슬로프',
      Element: BasicSlopePath,
      webcamId: 'basic-slope',
      isOpen: true,
    },
    {
      id: 'main-slope',
      level: '초급',
      name: '메인 슬로프',
      Element: MainSlopePath,
      webcamId: 'basic-slope',
      isOpen: true,
    },
    {
      id: 'jupiter-slope',
      level: '중급',
      name: '쥬피터 슬로프',
      Element: JupiterSlopePath,
      webcamId: 'jupiter-slope',
      isOpen: true,
    },
    {
      id: 'saturn-slope',
      level: '중급',
      name: '새턴 슬로프',
      Element: SaturnSlopePath,
      isOpen: true,
    },
    {
      id: 'uranus-slope',
      level: '중급',
      name: '우라누스',
      Element: UranusSlopePath,
      webcamId: 'uranus-slope',
      isOpen: true,
    },
    {
      id: 'mercury-slope',
      level: '상급',
      name: '머큐리 슬로프',
      Element: MercurySlopePath,
      isOpen: true,
    },
    {
      id: 'venus-slope',
      level: '상급',
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
        top: 'top-[16%]',
        left: 'left-[50%]',
      },
      scale: 1,
    },
    {
      id: 'uranus-slope',
      name: '우라누스 슬로프',
      position: {
        top: 'top-[32%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
  ],
};
