import { RESORT_DOMAIN } from '../model';

export const getSlopes = async ({ key }: { key: keyof typeof RESORT_DOMAIN }) => {
  const result = {
    key: key,
    slopes: RESORT_DOMAIN[key].slops.map((slop) => ({
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
