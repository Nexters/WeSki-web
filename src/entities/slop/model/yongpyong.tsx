'use client';

import BlueSlopePath from '../image/yongpyong/blue-slope-path';
import DragonParkPath from '../image/yongpyong/dragon-park-path';
import GoldFantasticPath from '../image/yongpyong/gold-fantastic-path';
import GoldParadisePath from '../image/yongpyong/gold-paradise-path';
import GoldValleyPath from '../image/yongpyong/gold-valley-path';
import MapImage from '../image/yongpyong/map';
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
import type { ResortInfo } from './model';

export const YONGPYONG: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'gold-valley',
      level: 'ADVANCED',
      name: '골드 밸리',
      Element: GoldValleyPath,
      webcamId: 'gold-slope-foreground',
      isOpen: true,
    },
    {
      id: 'gold-paradise',
      level: 'INTERMEDIATE',
      name: '골드 파라다이스',
      Element: GoldParadisePath,
      isOpen: true,
    },
    {
      id: 'new-gold-slope',
      level: 'ADVANCED',
      name: '뉴골드슬로프',
      Element: NewGoldSlopePath,
      webcamId: 'gold-slope-foreground',
      isOpen: true,
    },
    {
      id: 'gold-fantastic',
      level: 'ADVANCED',
      name: '골드 환타스틱',
      Element: GoldFantasticPath,
      webcamId: 'gold-slope-foreground',
      isOpen: true,
    },
    {
      id: 'red-paradise',
      level: 'INTERMEDIATE',
      name: '레드 파라다이스',
      Element: RedParadisePath,
      webcamId: 'red-slope',
      isOpen: true,
    },
    {
      id: 'red-slope',
      level: 'EXPERT',
      name: '레드슬로프',
      Element: RedSlopePath,
      isOpen: true,
    },
    {
      id: 'new-red-slope',
      level: 'ADVANCED',
      name: '뉴레드슬로프',
      Element: NewRedSlopePath,
      webcamId: 'red-slope',
      isOpen: true,
    },
    {
      id: 'blue-slope',
      level: 'ADVANCED',
      name: '블루슬로프',
      Element: BlueSlopePath,
      isOpen: true,
    },
    {
      id: 'pink-slope',
      level: 'INTERMEDIATE',
      name: '핑크슬로프',
      Element: PinkSlopePath,
      webcamId: 'pink-slope',
      isOpen: true,
    },
    {
      id: 'yellow-slope',
      level: 'BEGINNER',
      name: '옐로우슬로프',
      Element: YellowSlopePath,
      isOpen: true,
    },
    {
      id: 'new-yellow-slope',
      level: 'BEGINNER',
      name: '뉴 옐로우 슬로프',
      Element: NewYellowSlopePath,
      webcamId: 'yellow-slope',
      isOpen: true,
    },
    {
      id: 'silver-slope',
      level: 'INTERMEDIATE',
      name: '실버 슬로프',
      Element: SilverSlopePath,
      isOpen: true,
    },
    {
      id: 'silver-paradise',
      level: 'INTERMEDIATE',
      name: '실버 파라다이스',
      Element: SilverParadisePath,
      isOpen: true,
    },
    {
      id: 'rainbow-paradise',
      level: 'INTERMEDIATE',
      name: '레인보우 파라다이스',
      Element: RainbowParadisePath,
      webcamId: 'rainbow-top',
      isOpen: true,
    },
    {
      id: 'rainbow1',
      level: 'EXPERT',
      name: '레인보우 1',
      Element: Rainbow1Path,
      webcamId: 'rainbow-foreground',
      isOpen: true,
    },
    {
      id: 'rainbow2',
      level: 'EXPERT',
      name: '레인보우 2',
      Element: Rainbow2Path,
      webcamId: 'rainbow-foreground',
      isOpen: true,
    },
    {
      id: 'rainbow3',
      level: 'EXPERT',
      name: '레인보우 3',
      Element: Rainbow3Path,
      webcamId: 'rainbow-foreground',
      isOpen: true,
    },
    {
      id: 'rainbow4',
      level: 'ADVANCED',
      name: '레인보우 4',
      Element: Rainbow4Path,
      webcamId: 'rainbow-foreground',
      isOpen: true,
    },
    {
      id: 'mega-green',
      level: 'INTERMEDIATE',
      name: '메가 그린',
      Element: MegaGreenPath,
      webcamId: 'mega-green-slope',
      isOpen: true,
    },
    {
      id: 'dragon-park',
      level: 'INTERMEDIATE',
      name: '드래곤 파크',
      Element: DragonParkPath,
      isOpen: true,
    },
    {
      id: 'summit-land-the-green',
      level: 'INTERMEDIATE',
      name: '서밋랜드 더 그린',
      Element: SummitLandTheGreenPath,
      isOpen: false,
    },
  ],
  webcams: [
    {
      id: 'gold-slope-foreground',
      name: '골드 슬로프 전경',
      position: {
        top: 'top-[56%]',
        left: 'left-[17%]',
      },
      scale: 1,
    },
    {
      id: 'red-slope',
      name: '레드 슬로프',
      position: {
        top: 'top-[57%]',
        left: 'left-[29%]',
      },
      scale: 1,
    },
    {
      id: 'pink-slope',
      name: '핑크 슬로프',
      position: {
        top: 'top-[64%]',
        left: 'left-[33%]',
      },
      scale: 1,
    },
    {
      id: 'yellow-slope',
      name: '옐로우 슬로프',
      position: {
        top: 'top-[71%]',
        left: 'left-[37%]',
      },
      scale: 1,
    },
    {
      id: 'rainbow-top',
      name: '레인보우 정상',
      position: {
        top: 'top-[2%]',
        left: 'left-[61%]',
      },
      scale: 1,
    },
    {
      id: 'rainbow-foreground',
      name: '레인보우 전경',
      position: {
        top: 'top-[41%]',
        left: 'left-[79%]',
      },
      scale: 1,
    },
    {
      id: 'mega-green-slope',
      name: '메가 그린 슬로프',
      position: {
        top: 'top-[59%]',
        left: 'left-[56%]',
      },
      scale: 1,
    },
  ],
};
