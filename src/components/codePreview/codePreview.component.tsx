import type { FC, JSX } from 'react';

import { useApp } from '#hooks';
import type { UseApp } from '#interfaces';
import type { AlgorithmType } from '#types';

const CODE_SNIPPETS: Record<AlgorithmType, string[]> = {
  quicksort: [
    'TODO'
  ],
  fibonacci: [
    'TODO'
  ],
  matrixMul: [
    'TODO'
  ],
  sieve: [
    'TODO'
  ],
  convolution: [
    'TODO'
  ],
  pidSim: [
    'TODO'
  ],
};

export const CodePreview: FC = (): JSX.Element => {
  const { appState }: UseApp = useApp();
  const lines: string[] = CODE_SNIPPETS[appState.algorithm];

  return (
    <div className='rounded-xl bg-[#2a2a2a] p-6 flex flex-col gap-4'>
      <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
        C++ code (compiled to WASM)
      </p>
      <div className='rounded-lg bg-[#1a1a1a] p-4 overflow-x-auto'>
        <pre className='text-sm font-mono text-gray-300 leading-6'>
          {lines.map((line: string, i: number): JSX.Element => (
            <p key={`${line}-${i}`}>{line || '\u00A0'}</p>
          ))}
        </pre>
      </div>
    </div>
  );
};
