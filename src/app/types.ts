import { Dispatch, SetStateAction } from 'react';
import { TSingleTheme } from '../theme/types';

export type TReturnUseApp = {
  themeLoaded: boolean;
  selectedTheme: TSingleTheme;
  setSelectedTheme: Dispatch<SetStateAction<TSingleTheme>>;
};
