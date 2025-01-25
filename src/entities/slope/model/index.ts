export type { Level, Slope, Webcam, SlopeResponse, ResortConstant, WebcamConstant, SlopeConstant, Position } from './model';

import { ALPENSIA } from './resorts/alpensia';
import { EDEN } from './resorts/eden';
import { ELYSIAN_GANGCHON } from './resorts/elysian-gangchon';
import { GONJIAM } from './resorts/gonjiam';
import { HIGH1 } from './resorts/high1';
import { JISAN } from './resorts/jisan';
import { MUJU } from './resorts/muju';
import { O2 } from './resorts/o2';
import { OAKVALLEY } from './resorts/oakvalley';
import { PHOENIX } from './resorts/phoenix';
import { VIVALDIPARK } from './resorts/vivaldipark';
import { WELLIHILLI } from './resorts/wellihilli';
import { YONGPYONG } from './resorts/yongpyong';

export { JISAN } from './resorts/jisan';
export { HIGH1 } from './resorts/high1';
export { GONJIAM } from './resorts/gonjiam';
export { VIVALDIPARK } from './resorts/vivaldipark';
export { ELYSIAN_GANGCHON } from './resorts/elysian-gangchon';
export { YONGPYONG } from './resorts/yongpyong';
export { EDEN } from './resorts/eden';
export { WELLIHILLI } from './resorts/wellihilli';
export { MUJU } from './resorts/muju';
export { PHOENIX } from './resorts/phoenix';
export { O2 } from './resorts/o2'
export { ALPENSIA } from './resorts/alpensia';
export { OAKVALLEY } from './resorts/oakvalley';

export const RESORT_DOMAIN = {
  jisan: JISAN,
  high1: HIGH1,
  gonjiam: GONJIAM,
  vivaldipark: VIVALDIPARK,
  'elysian-gangchon': ELYSIAN_GANGCHON,
  yongpyong: YONGPYONG,
  eden: EDEN,
  wellihilli: WELLIHILLI,
  muju: MUJU,
  phoenix: PHOENIX,
  o2: O2,
  alpensia: ALPENSIA,
  oakvalley: OAKVALLEY,
};
