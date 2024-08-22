export const getFormattedYesterday = () => {
  const today = new Date();

  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const month = yesterday.getMonth() + 1;
  const day = yesterday.getDate();

  return `${month}월 ${day}일`;
};
