'use client';

import WellihilliMap from '@public/maps/wellihilli.png';
import Alpha1Path from '../image/wellihilli/alpha1-path';
import Alpha2Path from '../image/wellihilli/alpha2-path';
import Alpha3Path from '../image/wellihilli/alpha3-path';
import Bravo1Path from '../image/wellihilli/bravo1-path';
import Bravo2Path from '../image/wellihilli/bravo2-path';
import Challenge1Path from '../image/wellihilli/challenge1-path';
import Challenge2Path from '../image/wellihilli/challenge2-path';
import Challenge3Path from '../image/wellihilli/challenge3-path';
import Challenge4Path from '../image/wellihilli/challenge4-path';
import Challenge5Path from '../image/wellihilli/challenge5-path';
import DeltaPlusPath from '../image/wellihilli/delta-plus-path';
import Delta1Path from '../image/wellihilli/delta1-path';
import Delta2Path from '../image/wellihilli/delta2-path';
import Echo1Path from '../image/wellihilli/echo1-path';
import Echo2Path from '../image/wellihilli/echo2-path';
import Echo3Path from '../image/wellihilli/echo3-path';
import StarExpress1Path from '../image/wellihilli/star-express1-path';
import StarExpress2Path from '../image/wellihilli/star-express2-path';
import type { ResortConstant } from '../model';

export const WELLIHILLI: ResortConstant = {
  MapComponent: WellihilliMap,
  slopes: [
    {
      id: 39,
      PathAsset: Alpha1Path,
    },
    {
      id: 40,
      PathAsset: Alpha2Path,
    },
    {
      id: 41,
      PathAsset: Alpha3Path,
    },
    {
      id: 42,
      PathAsset: Bravo1Path,
    },
    {
      id: 43,
      PathAsset: Bravo2Path,
    },
    {
      id: 44,
      PathAsset: Delta1Path,
    },
    {
      id: 45,
      PathAsset: Delta2Path,
    },
    {
      id: 46,
      PathAsset: DeltaPlusPath,
    },
    {
      id: 47,
      PathAsset: Echo1Path,
    },
    {
      id: 48,
      PathAsset: Echo2Path,
    },
    {
      id: 49,
      PathAsset: Echo3Path,
    },
    {
      id: 50,
      PathAsset: Challenge1Path,
    },
    {
      id: 51,
      PathAsset: Challenge2Path,
    },
    {
      id: 52,
      PathAsset: Challenge3Path,
    },
    {
      id: 53,
      PathAsset: Challenge4Path,
    },
    {
      id: 54,
      PathAsset: Challenge5Path,
    },
    {
      id: 55,
      PathAsset: StarExpress1Path,
    },
    {
      id: 56,
      PathAsset: StarExpress2Path,
    },
  ],
  webcams: [
    { id: 2, key: '알파', position: [72, 20], scale: 1 },
    {
      id: 3,
      key: '베이스',
      position: [75, 26],
      scale: 1,
    },
    {
      id: 4,
      key: '리조트 전경',
      position: [78, 35],
      scale: 1,
    },
    {
      id: 5,
      key: '정상광장',
      position: [4, 56],
      scale: 1,
    },
    {
      id: 6,
      key: '패밀리',
      position: [85, 39],
      scale: 1,
    },
    {
      id: 7,
      key: '워터플래닛',
      position: [88, 22],
      scale: 1,
    },
  ],
};

export default WELLIHILLI;
