import type { FC, JSX } from 'react';

import { useApp } from '#hooks';
import type { UseApp } from '#interfaces';

export const BenchmarkResults: FC = (): JSX.Element => {
  const { appState }: UseApp = useApp();
  const hasResults: boolean = appState.jsMs !== null && appState.wasmMs !== null;
  const maxMs: number = Math.max(appState.jsMs ?? 0, appState.wasmMs ?? 0);

  return (
    <div className='rounded-xl bg-[#2a2a2a] p-6 flex flex-col gap-6'>
      <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
        Results
      </p>
      <div className='grid grid-cols-2 gap-3'>
        <div className='rounded-lg bg-[#1a1a1a] p-4 flex flex-col gap-1'>
          <p className='text-sm text-gray-400'>JavaScript / TypeScript</p>
          {hasResults
            ? <p className='text-3xl font-bold text-white'>{appState.jsMs} ms</p>
            : <p className='text-3xl font-bold text-gray-600'>— ms</p>
          }
        </div>
        <div className='rounded-lg bg-[#e8f0fe] p-4 flex flex-col gap-1'>
          <p className='text-sm text-blue-600 font-medium'>C++ / WebAssembly</p>
          {hasResults
            ? <p className='text-3xl font-bold text-blue-800'>{appState.wasmMs} ms</p>
            : <p className='text-3xl font-bold text-blue-200'>— ms</p>
          }
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-gray-300 w-44 shrink-0'>JavaScript / TypeScript</span>
          <div className='flex-1 bg-[#1a1a1a] rounded-full h-2'>
            <div
              className='bg-gray-500 h-2 rounded-full transition-all duration-500'
              style={{ width: hasResults ? `${((appState.jsMs ?? 0) / maxMs) * 100}%` : '0%' }}
            />
          </div>
          <span className='text-sm text-gray-400 w-14 text-right shrink-0'>
            {hasResults ? `${appState.jsMs} ms` : '—'}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-gray-300 w-44 shrink-0'>WebAssembly</span>
          <div className='flex-1 bg-[#1a1a1a] rounded-full h-2'>
            <div
              className='bg-blue-500 h-2 rounded-full transition-all duration-500'
              style={{ width: hasResults ? `${((appState.wasmMs ?? 0) / maxMs) * 100}%` : '0%' }}
            />
          </div>
          <span className='text-sm text-gray-400 w-14 text-right shrink-0'>
            {hasResults ? `${appState.wasmMs} ms` : '—'}
          </span>
        </div>
      </div>
    </div>
  );
};
