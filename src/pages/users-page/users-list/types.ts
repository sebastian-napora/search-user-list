import { TUsersDataList } from 'src/core/typings/Users';

type TFindUserPhrease = string | null;

export type TUseUsersListReturn = {
  error: string | null;
  users: TUsersDataList[];
};

export type TUseUsersList = ({ findUserPhrease }: { findUserPhrease: TFindUserPhrease }) => {
  usersList: { list: TUsersDataList[] | []; filtredList: TUsersDataList[] | [] };
};

export type TUsersListProps = {
  findUserPhrease: TFindUserPhrease;
};
