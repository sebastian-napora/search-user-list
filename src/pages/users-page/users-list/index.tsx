import React from 'react';

import { useUsersList } from './useUsersLists';

import { TUsersListProps } from './types';

import { LOADING } from './constants';

import { Container, IndexUser, UserDetails, UserName } from './styles';

export default ({ findUserPhrease }: TUsersListProps): JSX.Element => {
  const { usersList } = useUsersList({ findUserPhrease });

  if (usersList.list.length === 0 || usersList.filtredList.length === 0) return <div>{LOADING}</div>;

  return (
    <>
      {usersList.filtredList.map(({ name, username, id }, index) => (
        <Container key={`${id}${name}`}>
          <IndexUser>{index + 1}.</IndexUser>
          <UserDetails>
            {name} <UserName>@{username}</UserName>
          </UserDetails>
        </Container>
      ))}
    </>
  );
};
