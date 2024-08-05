import { ResortList } from './constants';

export type Spot = ExcludeArray<(typeof ResortList)[0]['spots']>;
