export const getVoteText = (total?: number, like?: number): string => {
  if (!total || !like) {
    return '';
  }

  if (total === 0) {
    return '아직 투표가 진행되지 않았어요';
  }

  const percentage = (like / total) * 100;

  if (percentage >= 80) {
    return '상태가 좋아요';
  } else if (percentage >= 50) {
    return '나쁘지 않아요';
  } else if (percentage >= 30) {
    return '좋지 않아요';
  } else {
    return '좋지 않아요';
  }
};
