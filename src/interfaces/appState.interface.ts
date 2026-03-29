import type { AlgorithmType, Status } from '#types';

export interface AppState {
  algorithm: AlgorithmType;
  n: number;
  status: Status;
  jsMs: number | null;
  wasmMs: number | null;
}
