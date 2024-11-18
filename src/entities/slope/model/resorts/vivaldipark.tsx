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
      PathAsset: BalladSlopPath,
      webcam: 6,
    },
    {
      id: 'blues-slop',
      PathAsset: BluesSlopPath,
      webcam: 9,
    },
    {
      id: 'hiphop-slop',
      PathAsset: HiphopSlopPath,
      webcam: 4,
    },
    {
      id: 'classic-slop',
      PathAsset: ClassicSlopPath,
      webcam: 3,
    },
    {
      id: 'reggae-slop',
      PathAsset: ReggaeSlopPath,
    },
    {
      id: 'jazz-slop',
      PathAsset: JazzSlopPath,
      webcam: 8,
    },
    {
      id: 'funky-slop',
      PathAsset: FunkySlopPath,
      webcam: 5,
    },
    {
      id: 'techno-slop',
      PathAsset: TechnoSlopPath,
      webcam: 7,
    },
    {
      id: 'rock-slop',
      PathAsset: RockSlopPath,
    },
  ],
  webcams: [
    {
      id: 1,
      position: {
        top: 'top-[14%]',
        left: 'left-[37%]',
      },
      scale: 1,
    },
    {
      id: 2,
      position: {
        top: 'top-[24%]',
        left: 'left-[48%]',
      },
      scale: 1,
    },
    {
      id: 3,
      position: {
        top: 'top-[30%]',
        left: 'left-[30%]',
      },
      scale: 1,
    },
    {
      id: 4,
      position: {
        top: 'top-[34%]',
        left: 'left-[55%]',
      },
      scale: 1,
    },
    {
      id: 5,
      position: {
        top: 'top-[44%]',
        left: 'left-[46%]',
      },
      scale: 1,
    },
    {
      id: 6,
      position: {
        top: 'top-[56%]',
        left: 'left-[41%]',
      },
      scale: 1,
    },
    {
      id: 7,
      position: {
        top: 'top-[64%]',
        left: 'left-[51%]',
      },
      scale: 1,
    },
    {
      id: 8,
      position: {
        top: 'top-[62%]',
        left: 'left-[21%]',
      },
      scale: 1,
    },
    {
      id: 9,
      position: {
        top: 'top-[62%]',
        left: 'left-[77%]',
      },
      scale: 1,
    },
    {
      id: 10,
      position: {
        top: 'top-[76%]',
        left: 'left-[45%]',
      },
      scale: 1,
    },
  ],
};
