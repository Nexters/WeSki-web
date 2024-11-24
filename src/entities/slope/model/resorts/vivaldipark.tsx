'use client';

import VivaldiparkMap from '@public/maps/vivaldipark.png';
import BalladSlopPath from '../image/vivaldipark/ballad-slop-path';
import BluesSlopPath from '../image/vivaldipark/blues-slop-path';
import ClassicSlopPath from '../image/vivaldipark/classic-slop-path';
import FunkySlopPath from '../image/vivaldipark/funky-slop-path';
import HiphopSlopPath from '../image/vivaldipark/hiphop-slop-path';
import JazzSlopPath from '../image/vivaldipark/jazz-slop-path';
import ReggaeSlopPath from '../image/vivaldipark/reggae-slop-path';
import RockSlopPath from '../image/vivaldipark/rock-slop-path';
import TechnoSlopPath from '../image/vivaldipark/techno-slop-path';
import type { ResortConstant } from '../model';

export const VIVALDIPARK: ResortConstant = {
  MapComponent: VivaldiparkMap,
  slopes: [
    {
      id: 'ballad-slop',
      level: '초급',
      name: '발라드슬로프',
      Element: BalladSlopPath,
      webcamId: 'ballad-webcam',
      isOpen: true,
    },
    {
      id: 'blues-slop',
      level: '초급',
      name: '블루스슬로프',
      Element: BluesSlopPath,
      webcamId: 'blues-webcam',
      isOpen: true,
    },
    {
      id: 'hiphop-slop',
      level: '중상급',
      name: '힙합슬로프',
      Element: HiphopSlopPath,
      webcamId: 'hiphop-webcam',
      isOpen: true,
    },
    {
      id: 'classic-slop',
      level: '중상급',
      name: '클래식슬로프',
      Element: ClassicSlopPath,
      webcamId: 'classic-webcam',
      isOpen: true,
    },
    {
      id: 'reggae-slop',
      level: '중급',
      name: '레게슬로프',
      Element: ReggaeSlopPath,
      isOpen: true,
    },
    {
      id: 'jazz-slop',
      level: '중급',
      name: '재즈슬로프',
      Element: JazzSlopPath,
      webcamId: 'jazz-webcam',
      isOpen: true,
    },
    {
      id: 'funky-slop',
      level: '상급',
      name: '펑키슬로프',
      Element: FunkySlopPath,
      webcamId: 'funky-webcam',
      isOpen: true,
    },
    {
      id: 'techno-slop',
      level: '상급',
      name: '테크노슬로프',
      Element: TechnoSlopPath,
      webcamId: 'techno-bottom',
      isOpen: true,
    },
    {
      id: 'rock-slop',
      level: '최상급',
      name: '락슬로프',
      Element: RockSlopPath,
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'ballad-webcam',
      name: '발라드',
      position: {
        top: 'top-[56%]',
        left: 'left-[41%]',
      },
      scale: 1,
    },
    {
      id: 'blues-webcam',
      name: '블루스',
      position: {
        top: 'top-[62%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
    {
      id: 'hiphop-webcam',
      name: '힙합',
      position: {
        top: 'top-[34%]',
        left: 'left-[55%]',
      },
      scale: 1,
    },
    {
      id: 'classic-webcam',
      name: '클래식',
      position: {
        top: 'top-[30%]',
        left: 'left-[30%]',
      },
      scale: 1,
    },
    {
      id: 'jazz-webcam',
      name: '재즈',
      position: {
        top: 'top-[62%]',
        left: 'left-[21%]',
      },
      scale: 1,
    },
    {
      id: 'funky-webcam',
      name: '펑키',
      position: {
        top: 'top-[44%]',
        left: 'left-[46%]',
      },
      scale: 1,
    },
    {
      id: 'techno-bottom',
      name: '테크노하단',
      position: {
        top: 'top-[64%]',
        left: 'left-[51%]',
      },
      scale: 1,
    },
    {
      id: 'slope-view',
      name: '슬로프 전경',
      position: {
        top: 'top-[76%]',
        left: 'left-[45%]',
      },
      scale: 1,
    },
    {
      id: 'skiword-top',
      name: '스키월드 정상',
      position: {
        top: 'top-[14%]',
        left: 'left-[37%]',
      },
      scale: 1,
    },
    {
      id: 'techno-top',
      name: '테크노 상단',
      position: {
        top: 'top-[24%]',
        left: 'left-[48%]',
      },
      scale: 1,
    },
  ],
};
