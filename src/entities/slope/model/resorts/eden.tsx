'use client';

import MapImage from '@public/maps/eden.png';
import BasicSlopePath from '../image/eden/basic-slope-path';
import JupiterSlopePath from '../image/eden/jupiter-slope-path';
import MainSlopePath from '../image/eden/main-slope-path';
import MercurySlopePath from '../image/eden/mercury-slope-path';
import SaturnSlopePath from '../image/eden/saturn-slope-path';
import UranusSlopePath from '../image/eden/uranus-slope-path';
import VenusSlopePath from '../image/eden/venus-slope-path';
import type { ResortConstant } from '../model';

export const EDEN: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: '베이직 슬로프',
      pathAsset: BasicSlopePath,
      webcam: 1,
    },
    {
      id: '메인 슬로프',
      pathAsset: MainSlopePath,
      webcam: 1,
    },
    {
      id: '쥬피터 슬로프',
      pathAsset: JupiterSlopePath,
      webcam: 2,
    },
    {
      id: '새턴 슬로프',
      pathAsset: SaturnSlopePath,
    },
    {
      id: '우라누스 슬로프',
      pathAsset: UranusSlopePath,
      webcam: 3,
    },
    {
      id: '머큐리 슬로프',
      pathAsset: MercurySlopePath,
    },
    {
      id: '비너스 슬로프',
      pathAsset: VenusSlopePath,
      webcam: 1,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[52%]',
        left: 'left-[35%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[16%]',
        left: 'left-[50%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[32%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
  ],
};
