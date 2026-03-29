import type { FC, JSX } from 'react';

const JS_MS = 123;
const WASM_MS = 8;
const MAX_MS = Math.max(JS_MS, WASM_MS);

export const BenchmarkResults: FC = (): JSX.Element => {
  return (
    <div className='rounded-xl bg-[#2a2a2a] p-6 flex flex-col gap-6'>
      <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>
        Results
      </p>
      <div className='grid grid-cols-2 gap-3'>
        <div className='rounded-lg bg-[#1a1a1a] p-4 flex flex-col gap-1'>
          <p className='text-sm text-gray-400'>JavaScript / TypeScript</p>
          <p className='text-3xl font-bold text-white'>{JS_MS} ms</p>
          <p className='text-sm text-gray-400'>325k ops/s</p>
        </div>
        <div className='rounded-lg bg-[#e8f0fe] p-4 flex flex-col gap-1'>
          <p className='text-sm text-blue-600 font-medium'>C++ / WebAssembly</p>
          <p className='text-3xl font-bold text-blue-800'>{WASM_MS} ms</p>
          <p className='text-sm text-blue-500'>12M ops/s</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-gray-300 w-44 shrink-0'>JavaScript / TypeScript</span>
          <div className='flex-1 bg-[#1a1a1a] rounded-full h-2'>
            <div
              className='bg-gray-500 h-2 rounded-full'
              style={{ width: `${(JS_MS / MAX_MS) * 100}%` }}
            />
          </div>
          <span className='text-sm text-gray-400 w-14 text-right shrink-0'>{JS_MS} ms</span>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-gray-300 w-44 shrink-0'>WebAssembly</span>
          <div className='flex-1 bg-[#1a1a1a] rounded-full h-2'>
            <div
              className='bg-blue-500 h-2 rounded-full'
              style={{ width: `${(WASM_MS / MAX_MS) * 100}%` }}
            />
          </div>
          <span className='text-sm text-gray-400 w-14 text-right shrink-0'>{WASM_MS} ms</span>
        </div>
      </div>
    </div>
  );
};
