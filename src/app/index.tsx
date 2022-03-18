import React from 'react';
import { ThemeProvider } from 'styled-components';

import UsersPage from 'src/pages/users-page';

import { useApp } from './useApp';

import { Container } from './styles';
import { GlobalStyles } from 'src/theme/GlobalStyles';

export default (): JSX.Element => {
  const { selectedTheme, themeLoaded } = useApp();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container>
            <UsersPage />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
};
