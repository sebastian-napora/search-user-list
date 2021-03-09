import { useUsersList } from "./useUsersLists";

import { TUsersListProps } from "./types";

import * as C from "./constants";

import * as S from "./styles";

export default ({ findUserPhrease }: TUsersListProps) => {
  const { message, users } = useUsersList({ findUserPhrease });

  if (message !== null) return <div>{message}</div>;
  if (users.length <= 0) return <div>{C.LOADING}</div>;

  return (
    <>
      {users.map(({ name, username, id }, index) => (
        <S.Container key={`${id}${name}`}>
          <S.IndexUser>{index + 1}.</S.IndexUser>
          <S.UserDetails>
            {name} <S.UserName>@{username}</S.UserName>
          </S.UserDetails>
        </S.Container>
      ))}
    </>
  );
};
