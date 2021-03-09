type S = string;
type N = number;
type NU = null;

export type TUsersDataList = {
  address: {
    street: S;
    suite: S;
    city: S;
    zipcode: S;
    geo: {
      lat: S;
      lng: S;
    };
  };
  company: {
    name: S;
    catchPhrase: S;
    bs: S;
  };
  email: S;
  id: N;
  name: S;
  phone: S;
  username: S;
  website: S;
};

export type TUseUsersListProps = {
  findUserPhrease: S | NU;
};

export type TUseUsersListReturn = {
  message: S | NU;
  data: TUsersDataList[];
  users: TUsersDataList[];
};

export type TUseUsersList<A> = A extends "props" ? TUseUsersListProps : TUseUsersListReturn;

export type TUsersListProps = {
  findUserPhrease: S | NU;
};
