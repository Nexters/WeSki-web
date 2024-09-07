'use client';

import ChallengeSlope1Path from '../image/o2/challenge-slope1-path';
import ChallengeSlope2Path from '../image/o2/challenge-slope2-path';
import ChallengeSlope3Path from '../image/o2/challenge-slope3-path';
import DreamSlope1Path from '../image/o2/dream-slope1-path';
import DreamSlope2Path from '../image/o2/dream-slope2-path';
import FashionSlope1Path from '../image/o2/fashion-slope1-path';
import FashionSlope2Path from '../image/o2/fashion-slope2-path';
import GlorySlope1Path from '../image/o2/glory-slope1-path';
import GlorySlope2Path from '../image/o2/glory-slope2-path';
import GlorySlope3Path from '../image/o2/glory-slope3-path';
import HalfPipePath from '../image/o2/half-pipe-path';
import HappySlopePath from '../image/o2/happy-slope-path';
import HeadSlopePath from '../image/o2/head-slope-path';
import MapImage from '../image/o2/map';
import type { ResortInfo } from './model';

export const O2: ResortInfo = {
  MapComponent: MapImage,
  slops: [
    {
      id: 'dream-slope1',
      level: 'BEGINNER',
      name: '드림슬로프 1',
      Element: DreamSlope1Path,
      webcamId: 'dream1',
      isOpen: true,
    },
    {
      id: 'dream-slope2',
      level: 'BEGINNER',
      name: '드림슬로프 2',
      Element: DreamSlope2Path,
      isOpen: true,
    },
    {
      id: 'head-slope',
      level: 'INTERMEDIATE',
      name: '헤드슬로프',
      Element: HeadSlopePath,
      isOpen: true,
    },
    {
      id: 'happy-slope',
      level: 'INTERMEDIATE',
      name: '해피슬로프',
      Element: HappySlopePath,
      webcamId: 'peak1',
      isOpen: true,
    },
    {
      id: 'glory-slope1',
      level: 'ADVANCED',
      name: '글로리슬로프 1',
      Element: GlorySlope1Path,
      isOpen: true,
    },
    {
      id: 'glory-slope2',
      level: 'ADVANCED',
      name: '글로리슬로프 2',
      Element: GlorySlope2Path,
      isOpen: true,
    },
    {
      id: 'glory-slope3',
      level: 'ADVANCED',
      name: '글로리슬로프 3',
      Element: GlorySlope3Path,
      webcamId: 'peak1',
      isOpen: true,
    },
    {
      id: 'fashion-slope1',
      level: 'EXPERT',
      name: '패션슬로프 1',
      Element: FashionSlope1Path,
      webcamId: 'peak1',
      isOpen: true,
    },
    {
      id: 'fashion-slope2',
      level: 'EXPERT',
      name: '패션슬로프 2',
      Element: FashionSlope2Path,
      isOpen: true,
    },
    {
      id: 'challenge-slope1',
      level: 'EXPERT',
      name: '챌린지슬로프 1',
      Element: ChallengeSlope1Path,
      webcamId: 'peak2',
      isOpen: true,
    },
    {
      id: 'challenge-slope2',
      level: 'EXPERT',
      name: '챌린지슬로프 2',
      Element: ChallengeSlope2Path,
      webcamId: 'peak2',
      isOpen: true,
    },
    {
      id: 'challenge-slope3',
      level: 'EXPERT',
      name: '챌린지슬로프 3',
      Element: ChallengeSlope3Path,
      webcamId: 'peak2',
      isOpen: true,
    },
    {
      id: 'half-pipe',
      level: 'BEGINNER',
      name: '하프파이프',
      Element: HalfPipePath,
      webcamId: 'ski-house',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'dream1',
      name: '드림1',
      position: {
        top: 'top-[80%]',
        left: 'left-[48%]',
      },
      scale: 1,
    },
    {
      id: 'peak1',
      name: '으뜸마루',
      position: {
        top: 'top-[5%]',
        left: 'left-[75%]',
      },
      scale: 1,
    },
    {
      id: 'peak2',
      name: '버금마루',
      position: {
        top: 'top-[23%]',
        left: 'left-[46%]',
      },
      scale: 1,
    },
    {
      id: 'ski-house',
      name: '오투 스키하우스',
      position: {
        top: 'top-[76%]',
        left: 'left-[14%]',
      },
      scale: 1,
    },
  ],
};
