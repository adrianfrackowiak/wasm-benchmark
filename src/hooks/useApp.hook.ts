import { useContext } from 'react';

import { AppContext, AppDispatchContext } from '#contexts';
import type { ResultData, UseApp } from '#interfaces';
import type { AlgorithmType } from '#types';

export const useApp: () => UseApp = (): UseApp => {
  const appState = useContext(AppContext);
  const appDispatch = useContext(AppDispatchContext);

  const setN: (payload: number) => void = (payload: number): void => {
    appDispatch({ type: 'setN', payload });
  };

  const setAlgorithm: (payload: AlgorithmType) => void = (payload: AlgorithmType): void => {
    appDispatch({ type: 'setAlgorithm', payload });
  };

  const setError: () => void = (): void => {
    appDispatch({ type: 'setError' });
  };

  const setResults: (payload: ResultData) => void = (payload: ResultData): void => {
    appDispatch({ type: 'setResults', payload });
  };

  const resetData: () => void = (): void => {
    appDispatch({ type: 'resetData' });
  };

  return {
    appState,
    setN,
    setAlgorithm,
    setError,
    setResults,
    resetData,
  };
};
