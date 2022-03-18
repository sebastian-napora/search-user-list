import React from 'react';
import { ThemeProvider } from 'styled-components';

import { cleanup, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { THEMES } from 'src/theme/schema';

import UsersList from '../index';

afterEach(cleanup);

describe('UsersList tests', () => {
  describe('1. Checked render children component UsersList', () => {
    const TestComponent = ({
      findUserPhrease,
      isThrowError
    }: {
      findUserPhrease: 'Margaret' | 'Stefan' | '';
      isThrowError: boolean;
    }) => {
      return (
        <ThemeProvider {...{ theme: THEMES.data.main }}>
          <UsersList findUserPhrease={findUserPhrease} isThrowError={isThrowError} />
        </ThemeProvider>
      );
    };

    it('1.1. Should render users list component first time with Margaret and Stefan value and second time only with Marager', async () => {
      const { container, getAllByTestId, rerender, unmount } = render(
        <TestComponent findUserPhrease={''} isThrowError={false} />
      );

      await waitFor(() => {
        expect(getAllByTestId('users-list-user-name')[0]).toBeDefined();
        expect(container).toMatchSnapshot();
      });

      rerender(<TestComponent findUserPhrease={'Margaret'} isThrowError={false} />);

      await waitFor(() => {
        expect(container).toMatchSnapshot();
      });

      unmount();
    });

    it('1.2. Should render users list component with info No match users...', async () => {
      const { container, unmount } = render(<TestComponent findUserPhrease={''} isThrowError={true} />);

      expect(container).toMatchSnapshot();

      unmount();
    });
  });
});
