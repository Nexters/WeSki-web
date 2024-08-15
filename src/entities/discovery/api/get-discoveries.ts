import { DiscoveryData } from '../model';
import type { Discovery } from '../model';

export const getDiscoveries = async (): Promise<Discovery[]> => {
  // const result = await apiClient.get<Discovery[]>('/discoveries');
  const result = DiscoveryData;

  return result;
};
