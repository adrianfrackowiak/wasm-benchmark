import type { AppState } from '#interfaces';
import type { AppActions } from '#types';

export const appReducer: (state: AppState, action: AppActions) => AppState = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case 'setAlgorithm':
      return { ...state, algorithm: action.payload };
    case 'setN':
      return { ...state, n: action.payload };
    case 'setError':
      return { ...state, jsMs: null, wasmMs: null, status: 'error' };
    case 'setResults':
      return {
        ...state,
        jsMs: action.payload.jsMs,
        wasmMs: action.payload.wasmMs,
        status: 'done'
      };
    case 'resetData':
      return { ...state, jsMs: null, wasmMs: null, status: 'running' };
    default:
      return state;
  }
};
