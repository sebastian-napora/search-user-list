import React from "react";

import UsersList from "./users-list";
import SearchBar from "./search-bar";

import { useUsersPage } from "./useUsersPage";

import * as C from "./constants";

import * as S from "./styles";

export default () => {
  const { findUserPhrease, onChange } = useUsersPage();

  return (
    <S.Content>
      <S.Header>{C.USERS_LIST}</S.Header>
      <SearchBar {...{ onChange }} />
      <UsersList {...{ findUserPhrease }} />
    </S.Content>
  );
};
