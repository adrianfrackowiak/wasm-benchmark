import type { AppState } from '#interfaces';

export const appEmptyState: AppState = {
  algorithm: 'quicksort',
  n: 10000,
  status: 'idle',
  jsMs: null,
  wasmMs: null,
};
