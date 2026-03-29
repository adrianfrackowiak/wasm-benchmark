import { type Context, createContext, type Dispatch } from 'react';

import type { AppActions } from '#types';

export const AppDispatchContext: Context<Dispatch<AppActions>> = createContext<Dispatch<AppActions>>(
  (): void => undefined
);
