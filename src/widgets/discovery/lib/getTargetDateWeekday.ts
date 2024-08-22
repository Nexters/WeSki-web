export const getTargetDateWeekday = (index: number) => {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + index);

  const targetDateWeekday = days[targetDate.getDay()];

  return targetDateWeekday;
};
