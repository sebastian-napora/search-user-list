import React from 'react';

import UsersList from './users-list';
import SearchBar from './search-bar';

import { useUsersPage } from './useUsersPage';

import { USERS_LIST } from './constants';

import { Content, Header } from './styles';

export default (): JSX.Element => {
  const { findUserPhrease, onChange } = useUsersPage();

  return (
    <Content>
      <Header>{USERS_LIST}</Header>
      <SearchBar onChange={onChange} />
      <UsersList findUserPhrease={findUserPhrease} isThrowError={false} />
    </Content>
  );
};
