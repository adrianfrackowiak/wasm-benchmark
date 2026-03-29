import type { ResultData } from '#interfaces';

import type { AlgorithmType } from './algorithmType.type';

export type AppActions =
  | { type: 'setAlgorithm'; payload: AlgorithmType }
  | { type: 'setN'; payload: number }
  | { type: 'setResults'; payload: ResultData }
  | { type: 'setError' }
  | { type: 'resetData' }
