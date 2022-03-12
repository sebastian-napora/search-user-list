import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';

import { THEMES } from './schema';

describe('GlobalStyles', () => {
  it('renders properly every add styles from THEMES', () => {
    const { container, unmount } = render(
      <ThemeProvider {...{ theme: THEMES.data.main }}>
        <GlobalStyles />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();

    unmount();
  });
});
