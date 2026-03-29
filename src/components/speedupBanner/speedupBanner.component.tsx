import type { FC, JSX } from 'react';

import { useApp } from '#hooks';
import type { UseApp } from '#interfaces';

export const SpeedupBanner: FC = (): JSX.Element => {
  const { appState }: UseApp = useApp();
  return (
    <div className='rounded-xl bg-[#1a3a1a] px-6 py-4 text-center text-green-400 font-semibold text-lg tracking-wide'>
      WASM is {appState.wasmMs && appState.jsMs ? (appState.jsMs / appState.wasmMs).toFixed(1) : '—'}x faster than JS! ({appState.wasmMs} vs {appState.jsMs})
    </div>
  );
};
