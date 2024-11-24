'use client';

import MujuMap from '@public/maps/muju.png';
import AllegroPath from '../image/muju/allegro-path';
import CadenzaSlopePath from '../image/muju/cadenza-slope-path';
import ConnectionSlopePath from '../image/muju/connection-slope-path';
import EasternSlopePath from '../image/muju/eastern-slope-path';
import FlamingoPath from '../image/muju/flamingo-path';
import FreewayPath from '../image/muju/freeway-path';
import Freeway2Path from '../image/muju/freeway2-path';
import MinuetPath from '../image/muju/minuet-path';
import ModeratoPath from '../image/muju/moderato-path';
import MozartPath from '../image/muju/mozart-path';
import PanoramaPath from '../image/muju/panorama-path';
import PolkaSlopePath from '../image/muju/polka-slope-path';
import RGardnerSlopePath from '../image/muju/r-gardner-slope-path';
import RaidersHighestPath from '../image/muju/raiders-highest-path';
import RaidersLowestPath from '../image/muju/raiders-lowest-path';
import RookiehillSlopePath from '../image/muju/rookiehill-slope-path';
import RusutsuSlopePath from '../image/muju/rusutsu-slope-path';
import ShortcutSlopePath from '../image/muju/shortcut-slope-path';
import SilkroadPath from '../image/muju/silkroad-path';
import SoyokgihangPath from '../image/muju/soyokgihang-path';
import SpitchLowestPath from '../image/muju/spitch-lowest-path';
import SpitchSlopePath from '../image/muju/spitch-slope-path';
import SundownSlopePath from '../image/muju/sundown-slope-path';
import TurboSlopePath from '../image/muju/turbo-slope-path';
import WaltzSlopePath from '../image/muju/waltz-slope-path';
import WesternSlopePath from '../image/muju/western-slope-path';
import YamagaSlopePath from '../image/muju/yamaga-slope-path';
import type { ResortConstant } from '../model';

export const MUJU: ResortConstant = {
  MapComponent: MujuMap,
  slopes: [
    {
      id: 'eastern-slope',
      level: '초급',
      name: '이스턴슬로프',
      Element: EasternSlopePath,
      webcamId: 'mansun-house',
      isOpen: true,
    },
    {
      id: 'soyokgihang',
      level: '초급',
      name: '서역기행',
      Element: SoyokgihangPath,
      webcamId: 'heidi-house',
      isOpen: true,
    },
    {
      id: 'spitch-lowest',
      level: '초급',
      name: '스피츠 하단',
      Element: SpitchLowestPath,
      webcamId: 'seolcheon-house',
      isOpen: true,
    },
    {
      id: 'western-slope',
      level: '중급',
      name: '웨스턴슬로프',
      Element: WesternSlopePath,
      isOpen: true,
    },
    {
      id: 'sundown-slope',
      level: '중급',
      name: '썬다운슬로프',
      Element: SundownSlopePath,
      webcamId: 'soyokgihang-sundown',
      isOpen: true,
    },
    {
      id: 'silkroad',
      level: '중급',
      name: '실크로드',
      Element: SilkroadPath,
      webcamId: 'seolcheonbong-summit',
      isOpen: true,
    },
    {
      id: 'rookiehill-slope',
      level: '중급',
      name: '루키힐슬로프',
      Element: RookiehillSlopePath,
      isOpen: true,
    },
    {
      id: 'turbo-slope',
      level: '중급',
      name: '터보슬로프',
      Element: TurboSlopePath,
      webcamId: 'soyokgihang-sundown',
      isOpen: true,
    },
    {
      id: 'connection-slope',
      level: '중급',
      name: '커넥션슬로프',
      Element: ConnectionSlopePath,
      isOpen: true,
    },
    {
      id: 'minuet',
      level: '상급',
      name: '미뉴에트',
      Element: MinuetPath,
      webcamId: 'mozart-minuet',
      isOpen: true,
    },
    {
      id: 'freeway',
      level: '상급',
      name: '프리웨이',
      Element: FreewayPath,
      webcamId: 'heidi-house',
      isOpen: true,
    },
    {
      id: 'yamaga-slope',
      level: '상급',
      name: '야마가슬로프',
      Element: YamagaSlopePath,
      webcamId: 'heidi-house',
      isOpen: true,
    },
    {
      id: 'panorama',
      level: '상급',
      name: '파노라마',
      Element: PanoramaPath,
      isOpen: true,
    },
    {
      id: 'raiders-lowest',
      level: '상급',
      name: '레이더스 하단',
      Element: RaidersLowestPath,
      isOpen: true,
    },
    {
      id: 'mozart',
      level: '상급',
      name: '모차르트',
      Element: MozartPath,
      webcamId: 'mozart-minuet',
      isOpen: true,
    },
    {
      id: 'waltz-slope',
      level: '상급',
      name: '왈츠슬로프',
      Element: WaltzSlopePath,
      isOpen: true,
    },
    {
      id: 'allegro',
      level: '상급',
      name: '알레그로',
      Element: AllegroPath,
      webcamId: 'seolcheon-top-slope',
      isOpen: true,
    },
    {
      id: 'raiders-highest',
      level: '최상급',
      name: '레이더스 상단',
      Element: RaidersHighestPath,
      webcamId: 'mansunbong-summit',
      isOpen: true,
    },
    {
      id: 'polka-slope',
      level: '최상급',
      name: '폴카슬로프',
      Element: PolkaSlopePath,
      webcamId: 'seolcheon-top-slope',
      isOpen: true,
    },
    {
      id: 'cadenza-slope',
      level: '최상급',
      name: '카덴자슬로프',
      Element: CadenzaSlopePath,
      webcamId: 'seolcheon-top-slope',
      isOpen: true,
    },
    {
      id: 'shortcut-slope',
      level: '초급',
      name: '쇼트컷슬로프',
      Element: ShortcutSlopePath,
      isOpen: true,
    },
    {
      id: 'spitch-slope',
      level: '초급',
      name: '스피츠슬로프',
      Element: SpitchSlopePath,
      isOpen: true,
    },
    {
      id: 'flamingo',
      level: '초급',
      name: '플라밍고',
      Element: FlamingoPath,
      isOpen: true,
    },
    {
      id: 'moderato',
      level: '초급',
      name: '모데라토',
      Element: ModeratoPath,
      isOpen: true,
    },
    {
      id: 'r-gardner-slope',
      level: '초급',
      name: 'R.가드너슬로프',
      Element: RGardnerSlopePath,
      isOpen: true,
    },
    {
      id: 'freeway2',
      level: '초급',
      name: '프리웨이2',
      Element: Freeway2Path,
      isOpen: true,
    },
    {
      id: 'rusutsu-slope',
      level: '초급',
      name: '루스츠슬로프',
      Element: RusutsuSlopePath,
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'mansun-house',
      name: '만선 하우스',
      position: {
        top: 'top-[78%]',
        left: 'left-[47%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam01.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'heidi-house',
      name: '하이디 하우스',
      position: {
        top: 'top-[45%]',
        left: 'left-[70%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam03.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'seolcheon-house',
      name: '설천 하우스',
      position: {
        top: 'top-[74%]',
        left: 'left-[28%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam05.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'soyokgihang-sundown',
      name: '서역기행, 썬다운',
      position: {
        top: 'top-[65%]',
        left: 'left-[68%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam04.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'seolcheonbong-summit',
      name: '설천봉 정상',
      position: {
        top: 'top-[12%]',
        left: 'left-[37%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam07.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'mozart-minuet',
      name: '모차르트, 미뉴에트',
      position: {
        top: 'top-[30%]',
        left: 'left-[27%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam08.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'seolcheon-top-slope',
      name: '설천상단 슬로프',
      position: {
        top: 'top-[16%]',
        left: 'left-[23%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam06.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'mansunbong-summit',
      name: '만선봉 정상',
      position: {
        top: 'top-[32%]',
        left: 'left-[51%]',
      },
      src: '/api/webcam?url=http://muju.live.cdn.cloudn.co.kr/mujuresort/_definst_/cam02.stream/playlist.m3u8',
      scale: 2,
    },
  ],
};

export default MUJU;
