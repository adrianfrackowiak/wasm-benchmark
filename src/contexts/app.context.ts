import { type Context, createContext } from 'react';

import { appEmptyState } from '#consts';
import type { AppState } from '#interfaces';

export const AppContext: Context<AppState> = createContext<AppState>(appEmptyState);
