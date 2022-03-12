import { useState, useEffect } from 'react';

import { useTheme } from 'src/theme/useTheme';

import { TSingleTheme } from 'src/theme/types';
import { TReturnUseApp } from './types';

export const useApp = (): TReturnUseApp => {
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<TSingleTheme>(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return { selectedTheme, setSelectedTheme, themeLoaded };
};
