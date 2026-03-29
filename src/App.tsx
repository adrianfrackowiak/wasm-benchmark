import type { FC, JSX } from 'react';

import { AppProvider, BenchmarkControls, BenchmarkResults, CodePreview, SpeedupBanner } from '#components';
import { useApp } from '#hooks';
import type { UseApp } from '#interfaces';

const App: FC = (): JSX.Element => {
  const { appState }: UseApp = useApp();

  return (
    <AppProvider>
      <div className='min-h-screen bg-[#1a1a1a] text-white'>
        <div className='max-w-3xl mx-auto px-6 py-12 flex flex-col gap-6'>
          <header>
            <h1 className='text-2xl font-bold text-gray-400'>JS vs WebAssembly Benchmark</h1>
            <p className='text-sm text-gray-500 mt-1'>C++ compiled to WASM vs pure JavaScript</p>
          </header>
          <BenchmarkControls />
          {appState.status === 'done' && <SpeedupBanner />}
          <BenchmarkResults />
          <CodePreview />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
