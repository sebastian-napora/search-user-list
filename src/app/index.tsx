import React from 'react';
import { ThemeProvider } from 'styled-components';

import UsersPage from 'src/pages/users-page';

import { useApp } from './useApp';

import { Container } from './styles';

export default (): JSX.Element => {
  const { selectedTheme, themeLoaded } = useApp();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <Container>
            <UsersPage />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};
