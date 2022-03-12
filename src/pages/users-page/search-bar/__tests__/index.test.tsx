import React from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { THEMES } from 'src/theme/schema';

import SearchBar from '../index';

afterEach(cleanup);

describe('SearchBar tests', () => {
  describe('checked render children component SearchBar', () => {
    it('should render children component well SearchBar', () => {
      const { container, unmount } = render(
        <ThemeProvider {...{ theme: THEMES.data.main }}>
          <SearchBar onChange={() => null} />
        </ThemeProvider>
      );

      expect(container).toMatchSnapshot();

      unmount();
    });
  });
});
