'use client';

import MapImage from '@public/maps/phoenix.png';
import ChampionSlopePath from '../image/phoenix/champion-slope-path';
import DiggySlopePath from '../image/phoenix/diggy-slope-path';
import DukeSlopePath from '../image/phoenix/duke-slope-path';
import ExtremeParkPath from '../image/phoenix/extreme-park-path';
import FantasySlopePath from '../image/phoenix/fantasy-slope-path';
import HawkSlope1Path from '../image/phoenix/hawk-slope1-path';
import HawkSlope2Path from '../image/phoenix/hawk-slope2-path';
import KiwiSlopePath from '../image/phoenix/kiwi-slope-path';
import MogulSlopePath from '../image/phoenix/mogul-slope-path';
import PanoramaPath from '../image/phoenix/panorama-path';
import ParadisePath from '../image/phoenix/paradise-path';
import PenguinSlopePath from '../image/phoenix/penguin-slope-path';
import SlopeStylePath from '../image/phoenix/slope-style-path';
import SparrowPath from '../image/phoenix/sparrow-path';
import ValleySlopePath from '../image/phoenix/valley-slope-path';
import type { ResortConstant } from '../model';

export const PHOENIX: ResortConstant = {
  MapComponent: MapImage,
  slopes: [
    {
      id: 'sparrow',
      level: '초급',
      name: '스패로우',
      Element: SparrowPath,
      webcamId: 'sparrow',
      isOpen: true,
    },
    {
      id: 'penguin-slope',
      level: '초급',
      name: '펭귄 슬로프',
      Element: PenguinSlopePath,
      webcamId: 'penguin-slope',
      isOpen: true,
    },
    {
      id: 'hawk-slope1',
      level: '초급',
      name: '호크 슬로프 1',
      Element: HawkSlope1Path,
      isOpen: true,
    },
    {
      id: 'kiwi-slope',
      level: '중급',
      name: '키위 슬로프',
      Element: KiwiSlopePath,
      webcamId: 'ski-base',
      isOpen: true,
    },
    {
      id: 'panorama',
      level: '중급',
      name: '파노라마',
      Element: PanoramaPath,
      webcamId: 'panorama',
      isOpen: true,
    },
    {
      id: 'valley-slope',
      level: '중급',
      name: '밸리 슬로프',
      Element: ValleySlopePath,
      webcamId: 'montblanc-peak',
      isOpen: true,
    },
    {
      id: 'hawk-slope2',
      level: '중급',
      name: '호크 슬로프 2',
      Element: HawkSlope2Path,
      isOpen: true,
    },
    {
      id: 'duke-slope',
      level: '중급',
      name: '듀크 슬로프',
      Element: DukeSlopePath,
      webcamId: 'bulsae-maru-zone',
      isOpen: true,
    },
    {
      id: 'slope-style',
      level: '중급',
      name: '슬로프 스타일',
      Element: SlopeStylePath,
      webcamId: 'penguin-slope',
      isOpen: true,
    },
    {
      id: 'champion-slope',
      level: '상급',
      name: '챔피언 슬로프',
      Element: ChampionSlopePath,
      webcamId: 'champion',
      isOpen: true,
    },
    {
      id: 'fantasy-slope',
      level: '상급',
      name: '환타지 슬로프',
      Element: FantasySlopePath,
      isOpen: true,
    },
    {
      id: 'diggy-slope',
      level: '최상급',
      name: '디지 슬로프',
      Element: DiggySlopePath,
      webcamId: 'montblanc-peak',
      isOpen: true,
    },
    {
      id: 'mogul-slope',
      level: '최상급',
      name: '모글 슬로프',
      Element: MogulSlopePath,
      isOpen: true,
    },
    {
      id: 'paradise',
      level: '최상급',
      name: '파라다이스',
      Element: ParadisePath,
      isOpen: true,
    },
    {
      id: 'extreme-park',
      level: '초급',
      name: '익스트림 파크',
      Element: ExtremeParkPath,
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'sparrow',
      name: '스패로우',
      position: {
        top: 'top-[45%]',
        left: 'left-[87%]',
      },
      scale: 1,
    },
    {
      id: 'penguin-slope',
      name: '펭귄 슬로프',
      position: {
        top: 'top-[79%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
    {
      id: 'ski-base',
      name: '스키베이스',
      position: {
        top: 'top-[83%]',
        left: 'left-[79%]',
      },
      scale: 1,
    },
    {
      id: 'bulsae-maru-zone',
      name: '불새마루존',
      position: {
        top: 'top-[31%]',
        left: 'left-[9%]',
      },
      scale: 1,
    },
    {
      id: 'panorama',
      name: '파노라마',
      position: {
        top: 'top-[15%]',
        left: 'left-[88%]',
      },
      scale: 1,
    },
    {
      id: 'montblanc-peak',
      name: '몽블랑 정상',
      position: {
        top: 'top-[7%]',
        left: 'left-[53%]',
      },
      scale: 1,
    },
    {
      id: 'champion',
      name: '챔피온',
      position: {
        top: 'top-[26%]',
        left: 'left-[66%]',
      },
      scale: 1,
    },
  ],
};
