'use client';

import WellihilliMap from '@public/maps/wellihilli.png';
import AlphaSlope1Path from '../image/wellihilli/alpha-slope1-path';
import AlphaSlope2Path from '../image/wellihilli/alpha-slope2-path';
import AlphaSlope3Path from '../image/wellihilli/alpha-slope3-path';
import BravoSlope1Path from '../image/wellihilli/bravo-slope1-path';
import BravoSlope2Path from '../image/wellihilli/bravo-slope2-path';
import ChallengeSlope1Path from '../image/wellihilli/challenge-slope1-path';
import ChallengeSlope2Path from '../image/wellihilli/challenge-slope2-path';
import ChallengeSlope3Path from '../image/wellihilli/challenge-slope3-path';
import ChallengeSlope4Path from '../image/wellihilli/challenge-slope4-path';
import ChallengeSlope5Path from '../image/wellihilli/challenge-slope5-path';
import DeltaSlopePlusPath from '../image/wellihilli/delta-slope-plus-path';
import DeltaSlope1Path from '../image/wellihilli/delta-slope1-path';
import DeltaSlope2Path from '../image/wellihilli/delta-slope2-path';
import EchoSlopePlusPath from '../image/wellihilli/echo-slope-plus-path';
import EchoSlope1Path from '../image/wellihilli/echo-slope1-path';
import EchoSlope2Path from '../image/wellihilli/echo-slope2-path';
import EchoSlope3Path from '../image/wellihilli/echo-slope3-path';
import HalfPipePath from '../image/wellihilli/half-pipe-path';
import StarExpress1Path from '../image/wellihilli/star-express1-path';
import StarExpress2Path from '../image/wellihilli/star-express2-path';
import type { ResortConstant } from '../model';

export const WELLIHILLI: ResortConstant = {
  MapComponent: WellihilliMap,
  slopes: [
    {
      id: 'alpha-slope1',
      level: '초급',
      name: '알파슬로프 1',
      Element: AlphaSlope1Path,
      webcamId: 'a1/a3-slope',
      isOpen: true,
    },
    {
      id: 'alpha-slope2',
      level: '초급',
      name: '알파슬로프 2',
      Element: AlphaSlope2Path,
      webcamId: 'outdoor-square',
      isOpen: true,
    },
    {
      id: 'alpha-slope3',
      level: '초급',
      name: '알파슬로프 3',
      Element: AlphaSlope3Path,
      webcamId: 'outdoor-square',
      isOpen: true,
    },
    {
      id: 'bravo-slope1',
      level: '중급',
      name: '브라보슬로프 1',
      Element: BravoSlope1Path,
      isOpen: true,
    },
    {
      id: 'bravo-slope2',
      level: '중급',
      name: '브라보슬로프 2',
      Element: BravoSlope2Path,
      isOpen: true,
    },
    {
      id: 'delta-slope1',
      level: '초급',
      name: '델타슬로프 1',
      Element: DeltaSlope1Path,
      webcamId: 'family-slope',
      isOpen: true,
    },
    {
      id: 'delta-slope2',
      level: '초급',
      name: '델타슬로프 2',
      Element: DeltaSlope2Path,
      webcamId: 'top-square',
      isOpen: true,
    },
    {
      id: 'delta-slope-plus',
      level: '초급',
      name: '델타슬로프 +',
      Element: DeltaSlopePlusPath,
      isOpen: true,
    },
    {
      id: 'echo-slope1',
      level: '최상급',
      name: '에코슬로프 1',
      Element: EchoSlope1Path,
      isOpen: true,
    },
    {
      id: 'echo-slope2',
      level: '상급',
      name: '에코슬로프 2',
      Element: EchoSlope2Path,
      isOpen: true,
    },
    {
      id: 'echo-slope3',
      level: '최상급',
      name: '에코슬로프 3',
      Element: EchoSlope3Path,
      isOpen: true,
    },
    {
      id: 'echo-slope-plus',
      level: '최상급',
      name: '에코슬로프 +',
      Element: EchoSlopePlusPath,
      isOpen: true,
    },
    {
      id: 'challenge-slope1',
      level: '상급',
      name: '첼린지슬로프 1',
      Element: ChallengeSlope1Path,
      isOpen: true,
    },
    {
      id: 'challenge-slope2',
      level: '상급',
      name: '첼린지슬로프 2',
      Element: ChallengeSlope2Path,
      isOpen: true,
    },
    {
      id: 'challenge-slope3',
      level: '최상급',
      name: '첼린지슬로프 3',
      Element: ChallengeSlope3Path,
      isOpen: true,
    },
    {
      id: 'challenge-slope4',
      level: '상급',
      name: '첼린지슬로프 4',
      Element: ChallengeSlope4Path,
      isOpen: true,
    },
    {
      id: 'challenge-slope5',
      level: '상급',
      name: '첼린지슬로프 5',
      Element: ChallengeSlope5Path,
      isOpen: true,
    },
    {
      id: 'star-express1',
      level: '중급',
      name: '스타 익스프레스1',
      Element: StarExpress1Path,
      isOpen: true,
    },
    {
      id: 'star-express2',
      level: '초급',
      name: '스타 익스프레스2',
      Element: StarExpress2Path,
      webcamId: 'top-square',
      isOpen: true,
    },
    {
      id: 'half-pipe',
      level: '초급',
      name: '하프파이프',
      Element: HalfPipePath,
      webcamId: 'half-pipe',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'a1/a3-slope',
      name: 'A1/A3 슬로프',
      position: {
        top: 'top-[62%]',
        left: 'left-[8%]',
      },
      src: '/api/webcam?url=https://live.wellihillipark.com/wellihillipark/_definst_/cam07.stream/playlist.m3u8',
      scale: 1,
    },
    {
      id: 'outdoor-square',
      name: '야외광장',
      position: {
        top: 'top-[73%]',
        left: 'left-[19%]',
      },
      src: '/api/webcam?url=https://live.wellihillipark.com/wellihillipark/_definst_/cam06.stream/playlist.m3u8',
      scale: 1,
    },
    {
      id: 'family-slope',
      name: '패밀리슬로프',
      position: {
        top: 'top-[85%]',
        left: 'left-[39%]',
      },
      src: '/api/webcam?url=https://live.wellihillipark.com/wellihillipark/_definst_/cam05.stream/playlist.m3u8',
      scale: 1,
    },
    {
      id: 'top-square',
      name: '정상광장',
      position: {
        top: 'top-[4%]',
        left: 'left-[56%]',
      },
      src: '/api/webcam?url=https://live.wellihillipark.com/wellihillipark/_definst_/cam03.stream/playlist.m3u8',
      scale: 1,
    },
    {
      id: 'half-pipe',
      name: '하프파이프',
      position: {
        top: 'top-[81%]',
        left: 'left-[31%]',
      },
      src: '/api/webcam?url=https://live.wellihillipark.com/wellihillipark/_definst_/cam04.stream/playlist.m3u8',
      scale: 1,
    },
  ],
};

export default WELLIHILLI;
