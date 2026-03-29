import type { AlgorithmType } from '#types';

import type { AppState } from './appState.interface';
import type { ResultData } from './resultData.interface';

export interface UseApp {
  appState: AppState;
  setN: (payload: number) => void;
  setAlgorithm: (payload: AlgorithmType) => void;
  setError: () => void;
  setResults: (payload: ResultData) => void;
  resetData: () => void;
}
