import type { FC, JSX } from 'react';

export const SpeedupBanner: FC = (): JSX.Element => {
  return (
    <div className='rounded-xl bg-[#1a3a1a] px-6 py-4 text-center text-green-400 font-semibold text-lg tracking-wide'>
      WASM is 15× faster than JS! (123 ms vs 8 ms)
    </div>
  );
};
