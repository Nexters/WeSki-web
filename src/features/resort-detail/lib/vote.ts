import { formatDate } from "./formatDate";

export const getVoteData = () => {
  const voteData = localStorage.getItem('vote_data');
  return voteData ? JSON.parse(voteData) : {};
}

export const saveVoteData = (voteData: Record<string, string>[]) => {
  localStorage.setItem('vote_data', JSON.stringify(voteData));
}

export const canVote = (resortId: string) => {
  const voteData = getVoteData();
  const todayDate = formatDate(new Date());

  if (voteData[resortId] === todayDate) {
    return false;
  }

  return true;
}