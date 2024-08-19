import MapImage from '../image/phoenix/map';
import type { ResortInfo } from './model';
import SparrowPath from '../image/phoenix/sparrow-path';
import PenguinSlopePath from '../image/phoenix/penguin-slope-path';
import HawkSlope1Path from '../image/phoenix/hawk-slope1-path';
import KiwiSlopePath from '../image/phoenix/kiwi-slope-path';
import PanoramaPath from '../image/phoenix/panorama-path';
import ValleySlopePath from '../image/phoenix/valley-slope-path';
import HawkSlope2Path from '../image/phoenix/hawk-slope2-path';
import DukeSlopePath from '../image/phoenix/duke-slope-path';
import SlopeStylePath from '../image/phoenix/slope-style-path';
import ChampionSlopePath from '../image/phoenix/champion-slope-path';
import FantasySlopePath from '../image/phoenix/fantasy-slope-path';
import DiggySlopePath from '../image/phoenix/diggy-slope-path';
import MogulSlopePath from '../image/phoenix/mogul-slope-path';
import ParadisePath from '../image/phoenix/paradise-path';
import ExtremeParkPath from '../image/phoenix/extreme-park-path';

export const PHOENIX: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'sparrow',
      level: 'BEGINNER',
      name: '스패로우',
      Element: SparrowPath,
      webcamId: 'sparrow',
      isOpen: true,
    },
    {
      id: 'penguin-slope',
      level: 'BEGINNER',
      name: '펭귄 슬로프',
      Element: PenguinSlopePath,
      webcamId: 'penguin-slope',
      isOpen: true,
    },
    {
      id: 'hawk-slope1',
      level: 'BEGINNER',
      name: '호크 슬로프 1',
      Element: HawkSlope1Path,
      isOpen: true,
    },
    {
      id: 'kiwi-slope',
      level: 'INTERMEDIATE',
      name: '키위 슬로프',
      Element: KiwiSlopePath,
      webcamId: 'ski-base',
      isOpen: true,
    },
    {
      id: 'panorama',
      level: 'INTERMEDIATE',
      name: '파노라마',
      Element: PanoramaPath,
      webcamId: 'panorama',
      isOpen: true,
    },
    {
      id: 'valley-slope',
      level: 'INTERMEDIATE',
      name: '밸리 슬로프',
      Element: ValleySlopePath,
      webcamId: 'montblanc-peak',
      isOpen: true,
    },
    {
      id: 'hawk-slope2',
      level: 'INTERMEDIATE',
      name: '호크 슬로프 2',
      Element: HawkSlope2Path,
      isOpen: true,
    },
    {
      id: 'duke-slope',
      level: 'INTERMEDIATE',
      name: '듀크 슬로프',
      Element: DukeSlopePath,
      webcamId: 'bulsae-maru-zone',
      isOpen: true,
    },
    {
      id: 'slope-style',
      level: 'INTERMEDIATE',
      name: '슬로프 스타일',
      Element: SlopeStylePath,
      webcamId: 'penguin-slope',
      isOpen: true,
    },
    {
      id: 'champion-slope',
      level: 'ADVANCED',
      name: '챔피언 슬로프',
      Element: ChampionSlopePath,
      webcamId: 'champion',
      isOpen: true,
    },
    {
      id: 'fantasy-slope',
      level: 'ADVANCED',
      name: '환타지 슬로프',
      Element: FantasySlopePath,
      isOpen: true,
    },
    {
      id: 'diggy-slope',
      level: 'EXPERT',
      name: '디지 슬로프',
      Element: DiggySlopePath,
      webcamId: 'montblanc-peak',
      isOpen: true,
    },
    {
      id: 'mogul-slope',
      level: 'EXPERT',
      name: '모글 슬로프',
      Element: MogulSlopePath,
      isOpen: true,
    },
    {
      id: 'paradise',
      level: 'EXPERT',
      name: '파라다이스',
      Element: ParadisePath,
      isOpen: true,
    },
    {
      id: 'extreme-park',
      level: 'BEGINNER',
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
