'use client';

import MapImage from '@public/maps/yongpyong.png';
import BlueSlopePath from '../image/yongpyong/blue-slope-path';
import DragonParkPath from '../image/yongpyong/dragon-park-path';
import GoldFantasticPath from '../image/yongpyong/gold-fantastic-path';
import GoldParadisePath from '../image/yongpyong/gold-paradise-path';
import GoldValleyPath from '../image/yongpyong/gold-valley-path';
import MegaGreenPath from '../image/yongpyong/mega-green-path';
import NewGoldSlopePath from '../image/yongpyong/new-gold-slope-path';
import NewRedSlopePath from '../image/yongpyong/new-red-slope-path';
import NewYellowSlopePath from '../image/yongpyong/new-yellow-slope-path';
import PinkSlopePath from '../image/yongpyong/pink-slope-path';
import RainbowParadisePath from '../image/yongpyong/rainbow-paradise-path';
import Rainbow1Path from '../image/yongpyong/rainbow1-path';
import Rainbow2Path from '../image/yongpyong/rainbow2-path';
import Rainbow3Path from '../image/yongpyong/rainbow3-path';
import Rainbow4Path from '../image/yongpyong/rainbow4-path';
import RedParadisePath from '../image/yongpyong/red-paradise-path';
import RedSlopePath from '../image/yongpyong/red-slope-path';
import SilverParadisePath from '../image/yongpyong/silver-paradise-path';
import SilverSlopePath from '../image/yongpyong/silver-slope-path';
import SummitLandTheGreenPath from '../image/yongpyong/summit-land-the-green-path';
import YellowSlopePath from '../image/yongpyong/yellow-slope-path';
import type { ResortConstant } from '../model';

export const YONGPYONG: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 'gold-valley',
      pathAsset: GoldValleyPath,
      webcam: 4,
    },
    {
      id: 'gold-paradise',
      pathAsset: GoldParadisePath,
    },
    {
      id: 'new-gold-slope',
      pathAsset: NewGoldSlopePath,
      webcam: 4,
    },
    {
      id: 'gold-fantastic',
      pathAsset: GoldFantasticPath,
      webcam: 4,
    },
    {
      id: 'red-paradise',
      pathAsset: RedParadisePath,
      webcam: 6,
    },
    {
      id: 'red-slope',
      pathAsset: RedSlopePath,
    },
    {
      id: 'new-red-slope',
      pathAsset: NewRedSlopePath,
      webcam: 6,
    },
    {
      id: 'blue-slope',
      pathAsset: BlueSlopePath,
    },
    {
      id: 'pink-slope',
      pathAsset: PinkSlopePath,
      webcam: 7,
    },
    {
      id: 'yellow-slope',
      pathAsset: YellowSlopePath,
    },
    {
      id: 'new-yellow-slope',
      pathAsset: NewYellowSlopePath,
      webcam: 8,
    },
    {
      id: 'silver-slope',
      pathAsset: SilverSlopePath,
    },
    {
      id: 'silver-paradise',
      pathAsset: SilverParadisePath,
    },
    {
      id: 'rainbow-paradise',
      pathAsset: RainbowParadisePath,
      webcam: 1,
    },
    {
      id: 'rainbow1',
      pathAsset: Rainbow1Path,
      webcam: 3,
    },
    {
      id: 'rainbow2',
      pathAsset: Rainbow2Path,
      webcam: 3,
    },
    {
      id: 'rainbow3',
      pathAsset: Rainbow3Path,
      webcam: 3,
    },
    {
      id: 'rainbow4',
      pathAsset: Rainbow4Path,
      webcam: 3,
    },
    {
      id: 'mega-green',
      pathAsset: MegaGreenPath,
      webcam: 5,
    },
    {
      id: 'dragon-park',
      pathAsset: DragonParkPath,
    },
    {
      id: 'summit-land-the-green',
      pathAsset: SummitLandTheGreenPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[2%]',
        left: 'left-[61%]',
      },
      scale: 2,
    },
    {
      id: 2,
      position: {
        top: 'top-[26%]',
        left: 'left-[30%]',
      },
      scale: 2,
    },
    {
      id: 3,
      position: {
        top: 'top-[41%]',
        left: 'left-[79%]',
      },
      scale: 2,
    },
    {
      id: 4,
      position: {
        top: 'top-[56%]',
        left: 'left-[17%]',
      },
      scale: 2,
    },
    {
      id: 5,
      position: {
        top: 'top-[59%]',
        left: 'left-[56%]',
      },
      scale: 2,
    },
    {
      id: 6,
      position: {
        top: 'top-[57%]',
        left: 'left-[29%]',
      },
      scale: 2,
    },
    {
      id: 7,
      position: {
        top: 'top-[64%]',
        left: 'left-[33%]',
      },
      scale: 2,
    },
    {
      id: 8,
      position: {
        top: 'top-[71%]',
        left: 'left-[37%]',
      },
      scale: 2,
    },
    {
      id: 9,
      position: {
        top: 'top-[84%]',
        left: 'left-[34%]',
      },
      scale: 2,
    },
    {
      id: 10,
      position: {
        top: 'top-[86%]',
        left: 'left-[26%]',
      },
      scale: 2,
    },
  ],
};
