import { SofSolution } from './sof-solution';

export interface SofQuestion {
  $key: string;
  id: number;
  username: string;
  solutions: SofSolution;
  userId: number;
}
