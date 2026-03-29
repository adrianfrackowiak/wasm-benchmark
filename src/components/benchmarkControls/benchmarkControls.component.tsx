import { type ChangeEvent, type FC, type JSX, useState } from 'react';

import { algorithms } from '#consts';
import type { AlgorithmButton } from '#interfaces';
import type { AlgorithmType } from '#types';

export const BenchmarkControls: FC = (): JSX.Element => {
  const [activeAlgorithm, setActiveAlgorithm] = useState<AlgorithmType>('quicksort');
  const [n, setN] = useState<number>(100000);

  return (
    <div className='rounded-xl bg-[#2a2a2a] p-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-3'>
        <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
          1. Select algorithm
        </p>
        <div className='grid grid-cols-3 gap-2'>
          {algorithms.map((algorithm: AlgorithmButton): JSX.Element => (
            <button
              key={algorithm.value}
              onClick={(): void => setActiveAlgorithm(algorithm.value)}
              className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                activeAlgorithm === algorithm.value
                  ? 'bg-[#1e3a5f] border-blue-500 text-white'
                  : 'bg-[#1a1a1a] border-[#3a3a3a] text-gray-300 hover:border-gray-500'
              }`}
            >
              {algorithm.label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
          2. Data size
        </p>
        <div className='flex items-center gap-4'>
          <span className='text-gray-300 text-sm shrink-0'>n =</span>
          <input
            type='range'
            min={100}
            max={1000000}
            value={n}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setN(Number(e.target.value))}
            className='flex-1 accent-blue-500'
          />
          <span className='text-white font-bold text-sm w-20 text-right shrink-0'>
            {n.toLocaleString('en-US')}
          </span>
        </div>
      </div>
      <button className='w-full py-4 rounded-lg bg-blue-900 hover:bg-blue-800 text-blue-300 font-medium transition-colors cursor-pointer'>
        Run benchmark
      </button>
    </div>
  );
};
