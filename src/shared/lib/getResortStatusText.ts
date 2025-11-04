export const getResortStatusText = (status: string, openingDate: string, openSlopes: number) => {
  if (status === '운영중') {
    return `운행중인 슬로프 ${openSlopes}개`;
  } else if (status === '운영종료') {
    return '다음 시즌에 또 만나요'
  }

  if (openingDate) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, month, day] = openingDate.split('-');
    return `${+month}월 ${+day}일에 개장 예정이에요`
  } else {
    return '개장일이 곧 공개될 예정이에요'
  }
}


