import { EDEN, JISAN, YONGPYONG } from '../model';

const domainMap = {
  jisan: JISAN,
  yongpyong: YONGPYONG,
  eden: EDEN,
};

export const getSlopes = async ({ key }: { key: keyof typeof domainMap }) => {
  const result = {
    key: key,
    slopes: domainMap[key].slops.map((slop) => ({
      key: slop.id,
      level: slop.level,
      name: slop.name,
      isOpen: slop.isOpen,
      isOpenDuringDay: false,
      isOpenDuringWeek: false,
      isOpenDuringNight: false,
    })),
  };

  return result;
};
