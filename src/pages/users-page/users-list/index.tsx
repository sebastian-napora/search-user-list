import React from 'react';

import { useUsersList } from './useUsersLists';

import { TUsersListProps } from './types';

import { LOADING } from './constants';

import { Container, IndexUser, UserDetails, UserName } from './styles';

export default ({ findUserPhrease, isThrowError }: TUsersListProps): JSX.Element => {
  const { usersList } = useUsersList({ findUserPhrease, isThrowError });

  if (usersList.list.length === 0 || usersList.filtredList.length === 0) return <div>{LOADING}</div>;

  return (
    <>
      {usersList.filtredList.map(({ name, username, id }, index) => (
        <Container data-testid="users-list-container" key={`${id}${name}`}>
          <IndexUser data-testid="users-list-index-user">{index + 1}.</IndexUser>
          <UserDetails data-testid="users-list-user-details">
            {name} <UserName data-testid="users-list-user-name">@{username}</UserName>
          </UserDetails>
        </Container>
      ))}
    </>
  );
};
