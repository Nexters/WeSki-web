'use client';

import Apollo1SlopPath from '../image/high1/apollo1-slop-path';
import Apollo2SlopPath from '../image/high1/apollo2-slop-path';
import Apollo3SlopPath from '../image/high1/apollo3-slop-path';
import Apollo4SlopPath from '../image/high1/apollo4-slop-path';
import Apollo6SlopPath from '../image/high1/apollo6-slop-path';
import Athena2SlopPath from '../image/high1/athena2-slop-path';
import Athena3SlopPath from '../image/high1/athena3-slop-path';
import Hera1SlopPath from '../image/high1/hera1-slop-path';
import Hera2SlopPath from '../image/high1/hera2-slop-path';
import Hera3SlopPath from '../image/high1/hera3-slop-path';
import High1Map from '../image/high1/map';
import Victoria1SlopPath from '../image/high1/victoria1-slop-path';
import Victoria2SlopPath from '../image/high1/victoria2-slop-path';
import Zeus1SlopPath from '../image/high1/zeus1-slop-path';
import Zeus2SlopPath from '../image/high1/zeus2-slop-path';
import Zeus3Sub1SlopPath from '../image/high1/zeus3-1-slop-path';
import Zeus3SlopPath from '../image/high1/zeus3-slop-path';
import type { ResortConstant } from '../model';

export const HIGH1: ResortConstant = {
  MapComponent: High1Map,
  slopes: [
    {
      id: 'zeus1-slop',
      level: '초급',
      name: '제우스슬로프 1',
      Element: Zeus1SlopPath,
      isOpen: true,
    },
    {
      id: 'zeus2-slop',
      level: '초급',
      name: '제우스슬로프 2',
      Element: Zeus2SlopPath,
      webcamId: 'zeus2-entry',
      isOpen: true,
    },
    {
      id: 'zeus3-slop',
      level: '초급',
      name: '제우스슬로프 3',
      Element: Zeus3SlopPath,
      webcamId: 'zeus3-entry',
      isOpen: true,
    },
    {
      id: 'zeus3-1-slop',
      level: '초급',
      name: '제우스슬로프 3-1',
      Element: Zeus3Sub1SlopPath,
      isOpen: true,
    },
    {
      id: 'victoria1-slop',
      level: '상급',
      name: '빅토리아슬로프 1',
      Element: Victoria1SlopPath,
      webcamId: 'victoria1-entry',
      isOpen: true,
    },
    {
      id: 'victoria2-slop',
      level: '상급',
      name: '빅토리아슬로프 2',
      Element: Victoria2SlopPath,
      isOpen: true,
    },
    {
      id: 'hera1-slop',
      level: '중급',
      name: '헤라슬로프 1',
      Element: Hera1SlopPath,
      isOpen: true,
    },
    {
      id: 'hera2-slop',
      level: '중상급',
      name: '헤라슬로프 2',
      Element: Hera2SlopPath,
      webcamId: 'hera2-entry',
      isOpen: true,
    },
    {
      id: 'hera3-slop',
      level: '상급',
      name: '헤라슬로프 3',
      Element: Hera3SlopPath,
      isOpen: true,
    },
    {
      id: 'apollo1-slop',
      level: '상급',
      name: '아폴로슬로프 1',
      Element: Apollo1SlopPath,
      isOpen: true,
    },
    {
      id: 'apollo2-slop',
      level: '상급',
      name: '아폴로슬로프 2',
      Element: Apollo2SlopPath,
      isOpen: true,
    },
    {
      id: 'apollo3-slop',
      level: '상급',
      name: '아폴로슬로프 3',
      Element: Apollo3SlopPath,
      isOpen: true,
    },
    {
      id: 'apollo4-slop',
      level: '상급',
      name: '아폴로슬로프 4',
      Element: Apollo4SlopPath,
      webcamId: 'apollo4-mid',
      isOpen: true,
    },
    {
      id: 'apollo6-slop',
      level: '상급',
      name: '아폴로슬로프 6',
      Element: Apollo6SlopPath,
      isOpen: true,
    },
    {
      id: 'athena2-slop',
      level: '중급',
      name: '아테나슬로프 2',
      Element: Athena2SlopPath,
      webcamId: 'athena2-entry',
      isOpen: true,
    },
    {
      id: 'athena3-slop',
      level: '초급',
      name: '아테나슬로프 3',
      Element: Athena3SlopPath,
      isOpen: true,
    },
  ],
  webcams: [
    {
      id: 'zeus2-entry',
      name: '제우스2번 슬로프 입구',
      position: {
        top: 'top-[6%]',
        left: 'left-[45%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch1.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'hera2-entry',
      name: '헤라2번 슬로프 입구',
      position: {
        top: 'top-[10%]',
        left: 'left-[50%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch2.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'highone-top',
      name: '하이원 탑',
      position: {
        top: 'top-[6%]',
        left: 'left-[54%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch3.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'athena1-entry',
      name: '아테나1번 슬로프',
      position: {
        top: 'top-[30%]',
        left: 'left-[65%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch4.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'mountain-hub-base',
      name: '마운틴 허브 베이스',
      position: {
        top: 'top-[35%]',
        left: 'left-[61%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch5.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'athena2-entry',
      name: '아테나2번 슬로프',
      position: {
        top: 'top-[40%]',
        left: 'left-[66%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch6.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'mountain-base',
      name: '마운틴 베이스',
      position: {
        top: 'top-[68%]',
        left: 'left-[78%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch7.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'athena2-bottom',
      name: '아테나2번 슬로프 하단',
      position: {
        top: 'top-[76%]',
        left: 'left-[73%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch8.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'victoria-top',
      name: '빅토리아 상단',
      position: {
        top: 'top-[17%]',
        left: 'left-[17%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch9.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'zeus2-slope',
      name: '제우스 2번',
      position: {
        top: 'top-[34%]',
        left: 'left-[38%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch10.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'valley-hub-base',
      name: '밸리 허브 베이스',
      position: {
        top: 'top-[40%]',
        left: 'left-[40%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch11.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'victoria1-entry',
      name: '빅토리아1번 슬로프',
      position: {
        top: 'top-[48%]',
        left: 'left-[43%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch12.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'zeus3-entry',
      name: '제우스3번 슬로프',
      position: {
        top: 'top-[50%]',
        left: 'left-[36%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch13.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'zeus3-mid',
      name: '제우스3번 중단부',
      position: {
        top: 'top-[58%]',
        left: 'left-[40%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch14.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'apollo4-mid',
      name: '아폴로4번 중단부',
      position: {
        top: 'top-[58%]',
        left: 'left-[52%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch15.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'apollo-base',
      name: '아폴로 베이스',
      position: {
        top: 'top-[71%]',
        left: 'left-[44%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch16.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'zeus3-bottom',
      name: '제우스3번 하단',
      position: {
        top: 'top-[86%]',
        left: 'left-[46%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch17.stream/playlist.m3u8',
      scale: 2,
    },
    {
      id: 'valley-base',
      name: '밸리 베이스',
      position: {
        top: 'top-[86%]',
        left: 'left-[39%]',
      },
      src: '/api/webcam?url=http://59.30.12.195:1935/live/_definst_/ch18.stream/playlist.m3u8',
      scale: 2,
    },
  ],
};
