import BlueLiftPath from '../image/jisan/blue-lift-path';
import Lemon1Sub1LiftPath from '../image/jisan/lemon1-1-lift-path';
import Lemon1LiftPath from '../image/jisan/lemon1-lift-path';
import MapImage from '../image/jisan/map';
import NewOrangeLiftPath from '../image/jisan/new-orange-lift-path';
import Orange2LiftPath from '../image/jisan/orange2-lift-path';
import Orange3LiftPath from '../image/jisan/orange3-lift-path';
import Silver6LiftPath from '../image/jisan/silver6-lift-path';
import Silver7LiftPath from '../image/jisan/silver7-lift-path';
import type { ResortInfo } from './model';

export const JISAN: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'lemon1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1',
      Element: Lemon1LiftPath,
      webcam: {
        id: 'lemon-station',
        name: '레몬 탑승장',
        position: {
          top: 'top-[84%]',
          left: 'left-[20%]',
        },
        scale: 2,
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'lemon1-1-lift',
      level: 'BEGINNER',
      name: '레몬 리프트 1-1',
      Element: Lemon1Sub1LiftPath,
      webcam: null,
      isOpen: false,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'orange2-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 2',
      Element: Orange2LiftPath,
      webcam: {
        id: 'orange-station',
        name: '오렌지 탑승장',
        position: {
          top: 'top-[69%]',
          left: 'left-[29%]',
        },
        scale: 1,
        src: 'http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8',
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'orange3-lift',
      level: 'INTERMEDIATE',
      name: '오렌지 리프트 3',
      Element: Orange3LiftPath,
      webcam: {
        id: 'new-orange-station',
        name: '뉴오렌지 탑승장',
        position: {
          top: 'top-[64%]',
          left: 'left-[38%]',
        },
        scale: 2,
        src: 'http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8',
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'new-orange-lift',
      level: 'ADVANCED',
      name: '뉴오렌지 리프트',
      Element: NewOrangeLiftPath,
      webcam: null,
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'blue-lift',
      level: 'ADVANCED',
      name: '블루 리프트 5',
      Element: BlueLiftPath,
      webcam: {
        id: 'blue-station',
        name: '블루 탑승장',
        scale: 2,
        position: {
          top: 'top-[69%]',
          left: 'left-[56%]',
        },
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'silver6-lift',
      level: 'EXPERT',
      name: '실버 리프트 6',
      Element: Silver6LiftPath,
      webcam: {
        id: '5-station',
        name: '5번 슬로프',
        scale: 1,
        position: {
          top: 'top-[47%]',
          left: 'left-[37%]',
        },
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
    {
      id: 'silver7-lift',
      level: 'UPPER_INTERMEDIATE',
      name: '실버 리프트 7',
      Element: Silver7LiftPath,
      webcam: {
        id: 'silver-station',
        name: '실버 탑승장',
        scale: 1,
        position: {
          top: 'top-[72%]',
          left: 'left-[68%]',
        },
      },
      isOpen: true,
      isDayOpen: false,
      isNightOpen: false,
      isLateNightOpen: false,
    },
  ],
};
