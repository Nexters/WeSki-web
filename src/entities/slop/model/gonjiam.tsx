'use client';

import CNP1SlopPath from '../image/gonjiam/cnp1-slop-path';
import CNP2SlopPath from '../image/gonjiam/cnp2-slop-path';
import Gram1SlopPath from '../image/gonjiam/gram1-slop-path';
import Gram2SlopPath from '../image/gonjiam/gram2-slop-path';
import GonjiamMap from '../image/gonjiam/map';
import ThinkyouBridgeSlopPath from '../image/gonjiam/thinkyou-bridge-slop';
import Thinkyou1SlopPath from '../image/gonjiam/thinkyou1-slop-path';
import Thinkyou2SlopPath from '../image/gonjiam/thinkyou2-slop-path';
import Thinkyou3SlopPath from '../image/gonjiam/thinkyou3-slop-path';
import WhisenSlopPath from '../image/gonjiam/whisen-slop-path';
import WhynotSlopPath from '../image/gonjiam/whynot-slop-path';
import type { ResortInfo } from './model';

export const GONJIAM: ResortInfo = {
  MapComponent: GonjiamMap,
  slops: [
    {
      id: 'whynot-slop',
      level: 'UPPER_BEGINNER',
      name: '와이낫슬로프',
      Element: WhynotSlopPath,
      isOpen: true,
    },
    {
      id: 'gram1-slop',
      level: 'ADVANCED',
      name: '그램슬로프1',
      Element: Gram1SlopPath,
      isOpen: true,
    },
    {
      id: 'gram2-slop',
      level: 'INTERMEDIATE',
      name: '그램슬로프 2',
      Element: Gram2SlopPath,
      isOpen: true,
    },
    {
      id: 'cnp1-slop',
      level: 'UPPER_BEGINNER',
      name: 'CNP슬로프 1',
      Element: CNP1SlopPath,
      webcamId: 'cnp-top',
      isOpen: true,
    },
    {
      id: 'cnp2-slop',
      level: 'ADVANCED',
      name: 'CNP슬로프 2',
      Element: CNP2SlopPath,
      isOpen: true,
    },
    {
      id: 'thinkyou1-slop',
      level: 'UPPER_INTERMEDIATE',
      name: '씽큐리프트 1',
      Element: Thinkyou1SlopPath,
      webcamId: 'cnp-top',
      isOpen: true,
    },
    {
      id: 'thinkyou2-slop',
      level: 'UPPER_BEGINNER',
      name: '씽큐리프트 2',
      Element: Thinkyou2SlopPath,
      webcamId: 'upper-base',
      isOpen: true,
    },
    {
      id: 'thinkyou3-slop',
      level: 'UPPER_INTERMEDIATE',
      name: '씽큐리프트 3',
      Element: Thinkyou3SlopPath,
      isOpen: true,
    },
    {
      id: 'thinkyou-bridge-slop',
      level: 'ADVANCED',
      name: '씽큐브릿지',
      Element: ThinkyouBridgeSlopPath,
      isOpen: true,
    },
    {
      id: 'whisen-slop',
      level: 'BEGINNER',
      name: '휘센슬로프',
      Element: WhisenSlopPath,
      webcamId: 'upper-base',
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'whisen-base',
      name: '초중급 베이스',
      position: {
        top: 'top-[82%]',
        left: 'left-[51%]',
      },
      scale: 1,
    },
    {
      id: 'upper-base',
      name: '중상급 베이스',
      position: {
        top: 'top-[85%]',
        left: 'left-[43%]',
      },
      scale: 1,
    },
    {
      id: 'cnp-top',
      name: '정상부 슬로프',
      position: {
        top: 'top-[34%]',
        left: 'left-[21%]',
      },
      scale: 1,
    },
  ],
};
