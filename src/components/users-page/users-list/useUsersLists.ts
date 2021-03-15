import { useCallback, useEffect, useState } from "react";

import { ServiceFactory } from "@api/ServiceFactory";

import { TUsersDataList, TUseUsersList } from "./types";

import * as C from "./constants";

const allUsers = ServiceFactory.get(C.USERS);

export const useUsersList = ({ findUserPhrease }: TUseUsersList<"props">): TUseUsersList<"return"> => {
  const [usersList, setUsersList] = useState<TUsersDataList[] | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<TUsersDataList[] | []>([]);

  const takeAllUsers = useCallback(async () => {
    try {
      const takeData = await allUsers.getUsers();
      setUsersList(takeData?.data);
      setUsers(takeData?.data);
    } catch (err) {
      setError(err);
    }
  }, [usersList.length === 0]);

  const filterData = () => {
    const filteredUsers =
      findUserPhrease &&
      usersList.filter(({ name }) => name.toLowerCase().trim().includes(findUserPhrease.toLowerCase().trim()));

    if (!findUserPhrease) return setUsers(usersList);

    return filteredUsers && setUsers(filteredUsers);
  };

  useEffect(() => {
    usersList.length === 0 && (async () => await takeAllUsers())();
    findUserPhrease !== null && filterData();
  }, [findUserPhrease]);

  return { error, users };
};
