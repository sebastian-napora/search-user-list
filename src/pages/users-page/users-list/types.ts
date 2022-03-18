import { TUsersDataList } from 'src/core/typings/Users';

type TFindUserPhrease = string | null;

export type TUseUsersListReturn = {
  error: string | null;
  users: TUsersDataList[];
};

export type TUseUsersList = ({
  findUserPhrease,
  isThrowError
}: {
  findUserPhrease: TFindUserPhrease;
  isThrowError: boolean;
}) => {
  usersList: { list: TUsersDataList[] | []; filtredList: TUsersDataList[] | [] };
};

export type TUsersListProps = {
  findUserPhrease: TFindUserPhrease;
  isThrowError: boolean;
};
