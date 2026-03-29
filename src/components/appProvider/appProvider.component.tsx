import { type FC, type JSX, useReducer } from 'react';

import { appEmptyState } from '#consts';
import { AppContext, AppDispatchContext } from '#contexts';
import { appReducer } from '#reducers';

import type { AppProviderProps } from './appProvider.types';

export const AppProvider: FC<AppProviderProps> = (props: AppProviderProps): JSX.Element => {
  const { children }: AppProviderProps = props;
  const [state, dispatch] = useReducer(appReducer, appEmptyState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppContext.Provider value={state}>
        {children}
      </AppContext.Provider>
    </AppDispatchContext.Provider>
  );
};
